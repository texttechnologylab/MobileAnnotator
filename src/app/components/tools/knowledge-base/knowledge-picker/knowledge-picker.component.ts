import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDetailData } from '../knowledge-base.utils';
import { HttpClient } from '@angular/common/http';
import { PartialObserver } from 'rxjs';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-knowledge-picker',
  templateUrl: './knowledge-picker.component.html',
  styleUrls: ['./knowledge-picker.component.scss']
})
/**
 * Komonente für die Auswahl einer Annotation im KnowledgeBaseLinker
 */
export class KnowledgePickerComponent implements OnInit {

  /**
   * Wissensdatenkbanken mit Namen, URL, etc. pp.
   */
  public searchSources: ISearchSource[] = [
    {
      label: 'Wikipedia DE',
      search: 'complex',
      url: 'https://de.wikipedia.org/w/api.php',
      type: 'wikipedia',
      method: 'jsonp',
      reference: {
        type: 'append',
        value: 'https://de.wikipedia.org/wiki?curid='
      },
    },
    {
      label: 'Wikipedia EN',
      search: 'complex',
      url: 'https://en.wikipedia.org/w/api.php',
      type: 'wikipedia',
      method: 'jsonp',
      reference: {
        type: 'append',
        value: 'https://en.wikipedia.org/wiki?curid='
      },
    },
    {
      label: 'Wikipedia FR',
      search: 'complex',
      url: 'https://fr.wikipedia.org/w/api.php',
      type: 'wikipedia',
      method: 'jsonp',
      reference: {
        type: 'append',
        value: 'https://fr.wikipedia.org/wiki?curid='
      },
    },
    {
      label: 'Wikipedia ES',
      search: 'complex',
      url: 'https://es.wikipedia.org/w/api.php',
      type: 'wikipedia',
      method: 'jsonp',
      reference: {
        type: 'append',
        value: 'https://es.wikipedia.org/wiki?curid='
      },
    },
    {
      label: 'WikiData',
      search: 'complex',
      url: 'https://www.wikidata.org/w/api.php',
      type: 'wikidata',
      method: 'jsonp',
      reference: {
        type: 'append',
        value: 'https://www.wikidata.org/wiki/'
      },

    },
    {
      label: 'GeoNames',
      search: 'replace',
      url: 'http://api.geonames.org/searchJSON?formatted=true&q=__Searchtext__&maxRows=20&lang=en&username=abrami',
      type: 'geonames',
      method: 'jsonp',
      reference: {
        type: 'append',
        value: 'http://www.geonames.org/'
      },
    },
    {
      label: 'GermaNet',
      search: 'replace',
      url: 'http://api.textannotator.texttechnologylab.org/germanet/query/__Searchtext__',
      type: 'ttlab',
      method: 'get',
      reference: {
        type: 'property',
        value: 'url'
      },
    },
    {
      label: 'Babelfy DE',
      search: 'replace',
      url: 'https://babelfy.io/v1/disambiguate?text=__Searchtext__&lang=DE&key={key}',
      type: 'babelfy',
      method: 'get',
      reference: {
        type: 'append',
        value: 'http://babelnet.org/rdf/page/'
      },
    },
    {
      label: 'Babelfy EN',
      search: 'replace',
      url: 'https://babelfy.io/v1/disambiguate?text=__Searchtext__&lang=EN&key={key}',
      type: 'babelfy',
      method: 'get',
      reference: {
        type: 'append',
        value: 'http://babelnet.org/rdf/page/'
      },
    },
    {
      label: 'Deutsche Nationalbibliothek',
      search: 'replace',
      url: 'http://api.textannotator.texttechnologylab.org/dnb/__Searchtext__',
      type: 'ttlab',
      method: 'get',
      idReplace: { search: /(http(?:|s):\/\/d-nb.info\/)/, value: '' },
      reference: {
        type: 'id',
        value: ''
      },
    },
    {
      label: 'Wiktionary DE',
      search: 'complex',
      url: 'https://de.wiktionary.org/w/api.php',
      type: 'wiktionary',
      method: 'jsonp',
      reference: {
        type: 'append',
        value: 'https://de.wiktionary.org/wiki?curid='
      },
    },
    {
      label: 'Wiktionary EN',
      search: 'complex',
      url: 'https://en.wiktionary.org/w/api.php',
      type: 'wiktionary',
      method: 'jsonp',
      reference: {
        type: 'append',
        value: 'https://en.wiktionary.org/wiki?curid='
      },
    },
    {
      label: 'Wiktionary FR',
      search: 'complex',
      url: 'https://fr.wiktionary.org/w/api.php',
      type: 'wiktionary',
      method: 'jsonp',
      reference: {
        type: 'append',
        value: 'https://fr.wiktionary.org/wiki?curid='
      },
    },
    {
      label: 'Wiktionary ES',
      search: 'complex',
      url: 'https://es.wiktionary.org/w/api.php',
      type: 'wiktionary',
      method: 'jsonp',
      reference: {
        type: 'append',
        value: 'https://es.wiktionary.org/wiki?curid='
      },
    },
    {
      label: 'BIOFid',
      search: 'replace',
      url: 'http://api.textannotator.texttechnologylab.org/blazegraph/query/__Searchtext__',
      type: 'ttlab',
      method: 'get',
      reference: {
        type: 'id',
        value: ''
      },
    },
  ];

  public input = '';
  public selectedSource = this.searchSources[0];
  public searchResult: ISearchResult[] = [];

  constructor(
    public dialogRef: MatDialogRef<KnowledgePickerComponent>,
    private http: HttpClient,
    private menuService: MenuService,
    @Inject(MAT_DIALOG_DATA) public data: {
      text: string;
      label?: string;
    },
  ) { }

  public ngOnInit(): void {
    this.input = this.data.text || '';
    if (this.data.label) {
      const [source] = this.searchSources.filter(({ label }) => label === this.data.label);
      if (source) {
        this.selectedSource = source;
      }
    }
  }

  /**
   * Durchsuche die ausgewählte Wissensdatenbank nach dem Suchtext
   */
  public search(): void {
    const source = this.selectedSource;
    let url = source.url;
    if (source.search === 'replace') {
      url = source.url.replace('__Searchtext__', this.input.replace(' ', '%20'));
    } else {
      switch (source.type) {
        case 'wikidata':
        case 'wiktionary':
          url += `?action=query&list=search&srsearch=${this.input}&format=json&formatversion=2`;
          break;

        case 'wikipedia':
          // tslint:disable-next-line: max-line-length
          url += `?action=query&titles=${this.input}&format=json&prop=pageimages|extracts|pageprops&exintro=&explaintext=&ppprop=wikibase_item&redirects=&pithumbsize=100&formatversion=2`;
          break;
      }
    }
    const observer: PartialObserver<unknown> = {
      next: (res) => this.handleResponse(res, source),
    };
    if (source.method === 'jsonp') {
      this.http.jsonp(url, 'callback').subscribe(observer);
    } else {
      this.http.get(url, { responseType: 'json' }).subscribe(observer);
    }
  }

  /**
   * Schließe den Dialog und übergebe den ausgewählten Eintrag
   */
  public select(entry: ISearchResult): void {
    this.dialogRef.close([entry, this.selectedSource.label]);
  }

  /**
   * Verarbeite die Antwort der Wissensdatenbank
   */
  private handleResponse(res: unknown, source: ISearchSource): void {
    if (!res) {
      return;
    }
    const result: ISearchResult[] = [];

    switch (source.type) {
      case 'wikipedia':
        const wikiRes = res as IWikiResult;
        if (!wikiRes.query || !wikiRes.query.pages) {
          return;
        }
        for (const entry of wikiRes.query.pages) {
          if (entry.missing) {
            continue;
          }
          const resultEntry: ISearchResult = {
            identifier: this.getId(`${entry.pageid}`, source),
            image: '',
            label: entry.title || '',
            text: entry.extract || '',
            reference: `https://de.wikipedia.org/wiki?curid=${entry.pageid}`,
          };
          if (entry.thumbnail && entry.thumbnail.source) {
            resultEntry.image = entry.thumbnail.source;
          }
          result.push(resultEntry);
        }
        break;

      case 'wikidata':
      case 'wiktionary':
        const widaRes = res as IWikiDataResult;
        if (!widaRes.query || !widaRes.query.search) {
          return;
        }
        for (const entry of widaRes.query.search) {
          const entryId = `${source.type === 'wiktionary' ? entry.pageid : entry.title}`;
          const resultEntry: ISearchResult = {
            identifier: this.getId(entryId, source),
            image: '',
            label: entry.title || '',
            text: (entry.snippet || '').replace(/((<span class="searchmatch">)|(<\/span>))/g, ''),
            reference: this.getReference(entryId, source, entry),
          };
          const imageObserver: PartialObserver<unknown> = {
            next: (observerRes) => {
              const imgRes = observerRes as IWikiImage;
              if (imgRes && imgRes.query && imgRes.query.pages) {
                const page = imgRes.query.pages[entry.pageid];
                if (page && page.thumbnail) {
                  const id = this.searchResult.findIndex((e) => e.identifier === entryId);
                  this.searchResult[id].image = page.thumbnail.source || '';
                }
              }
            }
          };
          const url = source.url + `?action=query&&titles=${entry.title}&prop=pageimages&pithumbsize=100&format=json`;
          if (source.method === 'jsonp') {
            this.http.jsonp(url, 'callback').subscribe(imageObserver);
          } else {
            this.http.get(url, { responseType: 'json' }).subscribe(imageObserver);
          }
          result.push(resultEntry);
        }
        break;

      case 'geonames':
        const geoRes = res as IGeoResult;
        for (const { name, geonameId, countryName, adminName1, fcodeName } of geoRes.geonames) {
          const textelems = [countryName, adminName1, fcodeName].filter((e) => e);
          result.push({
            identifier: this.getId(`${geonameId}`, source),
            label: name,
            image: '',
            text: textelems.join(' \n'),
            reference: '',
          });
        }
        break;

      case 'babelfy':
        const babelRes = res as IBabelResult[];
        for (const entry of babelRes) {
          result.push({
            identifier: this.getId(entry.babelSynsetID, source),
            label: entry.babelSynsetID,
            image: '',
            text: `${entry.source}`,
            reference: this.getReference('s' + entry.babelSynsetID.substring(3), source, entry),
          });
        }
        break;

      case 'ttlab':
        const ttlRes = res as TTLabResult;
        if (Array.isArray(ttlRes.result)) {
          for (const entry of ttlRes.result) {
            result.push({
              identifier: this.getId(entry.id, source),
              label: entry.title || entry.form || '',
              image: '',
              text: entry.snippet || entry.synset || '',
              reference: this.getReference(entry.id, source, entry),
            });
          }
        } else if (ttlRes.results && Array.isArray(ttlRes.results.bindings)) {
          for (const entry of ttlRes.results.bindings) {
            result.push({
              identifier: this.getId(entry.s.value, source),
              label: entry.l.value,
              image: '',
              text: `${entry.n.value}`,
              reference: this.getReference(entry.s.value, source, entry),
            });
          }
        }
        break;
    }

    if (!result.length) {
      this.menuService.showMessage({ level: 'info', text: 'MESSAGES.NO-SEARCH-RESULT' });
    }
    this.searchResult = result;
  }

  /**
   * Gibt die Referenz ID des Eintrages zurück
   */
  private getReference(id: string, source: ISearchSource, entry: unknown): string {
    switch (source.reference.type) {
      case 'append':
        return source.reference.value + id;

      case 'id':
        return id;

      case 'replace':
        return source.reference.value.replace('__Searchtext__', id);

      case 'property':
        return entry[source.reference.value];
    }
  }

  private getId(id: string, source: ISearchSource) {
    if (source.idReplace) {
      return id.replace(source.idReplace.search, source.idReplace.value);
    }
    return id;
  }
}

export interface ISearchResult extends IDetailData {
  identifier: string;
  reference: string;
}

interface ISearchSource {
  label: string;
  search: 'complex' | 'replace';
  url: string;
  type: 'ttlab' | 'wikipedia' | 'wikidata' | 'babelfy' | 'wiktionary' | 'geonames';
  method: 'jsonp' | 'get';
  idReplace?: {
    search: string | RegExp
    value: string;
  };
  reference: {
    type: 'append' | 'id' | 'replace' | 'property';
    value: string;
  };
}


interface IWikiDataResult {
  query?: {
    search: Array<{
      pageid: string,
      title?: string,
      snippet?: string,
    }>
  };
}

interface IWikiResult {
  query?: {
    pages?: Array<{
      pageid: string,
      missing?: boolean,
      title?: string,
      extract?: string,
      thumbnail?: {
        source?: string
      },
    }>
  };
}

interface IGeoResult {
  geonames: Array<{
    name?: string;
    geonameId: string;
    countryName?: string;
    adminName1?: string;
    fcodeName?: string;
  }>;
}

interface IBabelResult {
  babelSynsetID?: string;
  source?: string;
}

type TTLabResult = ITTLab1 | ITTLab2;

interface ITTLab1 {
  result: undefined;
  results?: {
    bindings?: Array<{ l: { value: string }, n: { value: string }, s: { value: string } }>
  };
}

interface ITTLab2 {
  results: undefined;
  result: Array<{
    id: string,
    form?: string,
    title?: string;
    snippet?: string;
    synset?: string;
  }>;
}

interface IWikiImage {
  query?: {
    pages?: {
      [key: string]: { thumbnail?: { source: string } }
    }
  };
}
