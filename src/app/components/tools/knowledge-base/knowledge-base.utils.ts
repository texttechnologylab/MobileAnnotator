import { IToolElement } from 'src/app/services/interfaces';
import { IQueueElement } from '../quick-anno/quick-anno.component';

/**
 * Farb Kodierung und Bild der einzelnen Wissensdatenbanken
 */
export const dataSources = {
    Wikipedia: {
        color: '#FF3333', image: 'assets/dataSources/32px-Wikipedia-logo.webp'
    },
    GeoNames: {
        color: '#99FF33', image: 'assets/dataSources/geonames.png'
    },
    GermaNet: {
        color: '#FF3399', image: ''
    },
    WikiData: {
        color: '#3399FF', image: 'assets/dataSources/40px-Wikidata-logo.webp'
    },
    Babelfy: {
        color: '#FFFF33', image: 'assets/dataSources/babelfy.png'
    },
    Wiktionary: {
        color: '#FF9933', image: 'assets/dataSources/32px-Wiktionary-logo.webp'
    },
    'Deutsche Nationalbibliothek': {
        color: '#33FFFF', image: ''
    },
    BIOFid: {
        color: '#B266FF', image: 'assets/dataSources/logo_fid_biodiversity_en.png'
    },
};

/**
 * Gibt einen Farbwert für die Wissensdatenbank als String zurück
 */
export function getColorCoding(source: string): string {
    for (const [key, { color }] of Object.entries(dataSources)) {
        if (source.startsWith(key)) {
            return color;
        }
    }
    return '';
}

/**
 * Gibt einen Bild-Url für die Wissensdatenbank als String zurück
 */
export function getImage(source: string) {
    for (const [key, { image }] of Object.entries(dataSources)) {
        if (source.startsWith(key)) {
            return image;
        }
    }
    return '';
}

/**
 * Gibt eine Liste aller verfügbaren Wissensdatenbanken als String Array zurück
 */
export function getSources(): string[] {
    return Object.keys(dataSources);
}

/**
 * Gibt URLs für das Laden von Informationen aus der entsprechenden Wissensdatenbank zurück
 */
export function getDataUrls(source: string, id: string): Array<[string, string, string]> {
    let sourceName: string;
    for (const src of Object.keys(dataSources)) {
        if (source.startsWith(src)) {
            sourceName = src;
            break;
        }
    }
    if (!sourceName) {
        return;
    }

    let lan: string;
    if (['Wikipedia', 'Babelfy', 'Wiktionary'].some((src) => src === sourceName) && !source.endsWith(sourceName)) {
        lan = source.substring(source.length - 2).toLowerCase();
    }

    // tslint:disable: max-line-length
    switch (sourceName) {
        case 'WikiData':
            return [
                ['data', `https://www.wikidata.org/w/api.php?action=wbgetentities&props=labels|descriptions&ids=${id}&languages=en&format=json&formatversion=2`, 'jsonp'],
                ['img', `https://www.wikidata.org/w/api.php?action=query&titles=${id}&prop=pageimages&pithumbsize=100&format=json`, 'jsonp'],
            ];

        case 'Wiktionary':
            return [
                ['data', `https://${lan || 'de'}.wiktionary.org/w/api.php?action=query&pageids=${id}&format=json&prop=pageimages|extracts|pageprops&exsentences=30&explaintext=&ppprop=wikibase_item&pithumbsize=100&redirects=1&formatversion=2`, 'jsonp']
            ];

        case 'Wikipedia':
            return [
                ['dataAndImg', `https://${lan || 'de'}.wikipedia.org/w/api.php?action=query&pageids=${id}&format=json&prop=pageimages|extracts|pageprops&exsentences=30&explaintext=&ppprop=wikibase_item&pithumbsize=100&redirects=1&formatversion=2`, 'jsonp']
            ];

        case 'GeoNames':
            return [
                ['data', `http://api.geonames.org/getJSON?geonameId=${id}&username=abrami&style=full`, 'jsonp'],
            ];

        case 'Babelfy':
            return [
                ['dataAndImg', `https://babelnet.io/v5/getSynset?id=${id}&key=26e202d8-32f7-4a0e-9f25-4a1985850af7`, 'get'],
            ];

        case 'BIOFid':
            [, id] = /.*Aves#(GBIF_.*)$/.exec(id);
            return [
                ['data', `http://api.textannotator.texttechnologylab.org/blazegraph/id/https:||www.biofid.de|bio-ontologies|Aves/${id}`, 'get'],
            ];
    }
    // tslint:enable: max-line-length
    return [];
}

/**
 * Verarbeitet die von den Wissensdatenbanken erhaltenen Daten
 */
export function handleDataRequest(type: string, source: string, resData: unknown, detailData: IDetailData): void {
    let sourceName: string;
    for (const src of Object.keys(dataSources)) {
        if (source.startsWith(src)) {
            sourceName = src;
            break;
        }
    }
    if (!sourceName) {
        return;
    }

    switch (type) {
        case 'data':
            extendData(sourceName, resData, detailData);
            break;

        case 'img':
            extendImage(sourceName, resData, detailData);
            break;

        case 'dataAndImg':
            extendData(sourceName, resData, detailData);
            extendImage(sourceName, resData, detailData);
            break;
    }
}

/**
 * Erweitert die übergebene IDetailData um Daten aus 'rawData'
 */
function extendData(source: string, rawData: unknown, detailData: IDetailData): void {
    switch (source) {
        case 'WikiData':
            const wdResult = rawData as IWikiDataResult;
            if (wdResult.entities) {
                const { descriptions, labels } = Object.values(wdResult.entities)[0];
                if (labels) {
                    detailData.label = Object.values(labels)[0].value || '';
                }
                if (descriptions) {
                    detailData.text = Object.values(descriptions)[0].value || '';
                }
            }
            break;

        case 'Wikipedia':
        case 'Wiktionary':
            const wikiResult = rawData as IWikiResult;
            if (!wikiResult.query || !wikiResult.query.pages) {
                return;
            }
            const { extract, title } = Object.values(wikiResult.query.pages)[0];
            if (title) {
                detailData.label = title;
            }
            if (extract) {
                detailData.text = extract;
            }
            break;

        case 'GeoNames':
            const { name, countryName, adminName1, fcodeName, fclName, population } = rawData as IGeoResult;
            const textelems = [countryName, adminName1, fcodeName, fclName].filter((e) => e);
            detailData.label = name;
            detailData.text = textelems.join(' \n');
            if (population) {
                detailData.text += `\nPopulation: ${population}`;
            }
            break;

        case 'Babelfy':
            const baResult = rawData as IBabelResult;
            detailData.label = (baResult.mainSense || '');
            detailData.text = (baResult.synsetType || '');
            break;

        case 'BIOFid':
            const bioResult = rawData as IBioResult;
            if (!bioResult.results || !bioResult.results.bindings) {
                return;
            }
            const [bioData] = bioResult.results.bindings;
            if (!bioData) {
                return;
            }
            detailData.label = bioData.l.value;
            detailData.text = bioData.n.value;
            break;

        default:
            break;
    }
}

/**
 * Fügt der übergebenen IDetailData ein in 'rawData' abgelegtes Bild hinzu
 */
function extendImage(source: string, rawData: unknown, detailData: IDetailData) {
    switch (source) {
        case 'Wikipedia':
        case 'WikiData':
            const wikiImage = rawData as IWikiImage;
            if (!wikiImage.query || !wikiImage.query.pages) {
                return;
            }
            const { thumbnail } = Object.values(wikiImage.query.pages)[0];
            if (thumbnail) {
                detailData.image = thumbnail.source || '';
            }
            break;

        case 'Babelfy':
            const babelImage = rawData as IBabelImage;
            if (!babelImage.images || !Array.isArray(babelImage.images) || !babelImage.images[0]) {
                return;
            }
            const image = babelImage.images[0];
            detailData.image = image.thumbUrl || image.url || '';
            break;

        default:
            break;
    }
}

/**
 * Ergänzt bei den übergebenen TextTechnologyEntities Multitoken Informationen anhand der übergebenen Tokens
 */
export function addChildData(ttEntities: TextTechnologyEntity[], tokens: IToolElement[]) {
    const ttBeginMap = new Map<string, TextTechnologyEntity>();
    for (const ttentity of ttEntities) {
        if (!ttentity) {
            continue;
        }
        ttBeginMap.set(ttentity.features.begin, ttentity);
    }

    tokens = tokens.sort((a, b) => a.features.begin - b.features.begin);
    let currTTEntity: TextTechnologyEntity;
    for (const token of tokens) {
        if (!token) {
            continue;
        }
        if (ttBeginMap.has(`${token.features.begin}`)) {
            currTTEntity = ttBeginMap.get(`${token.features.begin}`);
            currTTEntity.features.children = [];
        }
        if (currTTEntity && currTTEntity.features.end !== `${token.features.end}` || currTTEntity.features.children.length) {
            currTTEntity.features.children.push(token._addr);
        }
    }
}

/**
 * Gibt ein Array von Queue Elementen zurück, um die Annotationen der übergebenen TextTechnologyEntität zu entfernen
 */
export function createRemoveKnowledgeQueue(ttEntity: TextTechnologyEntity, offset = 0): IQueueElement[] {
    const queue: IQueueElement[] = [];
    if (!ttEntity.features.knowledgeEntries || !Array.isArray(ttEntity.features.knowledgeEntries)) {
        return queue;
    }
    for (const knowledge of ttEntity.features.knowledgeEntries) {
        queue.push({
            cmd: 'remove',
            data: {
                bid: `_b${queue.length + offset}_`,
                addr: `${knowledge}`,
            }
        });
    }
    return queue;
}

export interface ISourceData {
    source: string;
    userAnnotation: boolean;
    addr: number;
    identifier: string;
    reference: string;
    icon: string;
    extended?: IDetailData;
    rgb: string;
}

export type TextTechnologyEntity = IToolElement & {
    features: {
        begin: string;
        end: string;
        knowledgebaseEntries: number[];
        children?: number[];
    };
};

export interface IDetailData {
    image: string;
    label: string;
    text: string;
}

interface IWikiDataResult {
    entities?: {
        [key: string]: {
            labels?: {
                [key: string]: { value: string },
            },
            descriptions?: {
                [key: string]: { value: string },
            },
        };
    };
}

interface IWikiResult {
    query?: {
        pages?: {
            [key: string]: {
                extract: string,
                title: string,
            }
        }
    };
}

interface IGeoResult {
    name?: string;
    countryName?: string;
    adminName1?: string;
    fcodeName?: string;
    fclName?: string;
    population?: number;
}

interface IBabelResult {
    mainSense?: string;
    synsetType?: string;
}

interface IBioResult {
    results?: {
        bindings?: Array<{ l: { value: string }, n: { value: string } }>
    };
}

interface IWikiImage {
    query?: {
        pages?: {
            [key: string]: { thumbnail?: { source: string } }
        }
    };
}

interface IBabelImage {
    images?: Array<{ thumbUrl?: string, url?: string }>;
}
