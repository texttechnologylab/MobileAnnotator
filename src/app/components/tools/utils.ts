import { IToolElement } from 'src/app/services/interfaces';

export const quickTreeType = 'org.texttechnologylab.annotation.type.QuickTreeNode';
export const tokenType = 'de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token';
export const commentType = 'org.texttechnologylab.annotation.type.Comment';
export const knowledgeType = 'org.texttechnologylab.annotation.type.KnowledgeEntry';
export const ttEntityType = 'org.texttechnologylab.annotation.type.TextTechnologyEntity';
export const fingerprintType = 'org.texttechnologylab.annotation.type.Fingerprint';

/**
 * Gibt den übergebenen Eintrag als IToolElement zurück
 */
export function getAnnotation(anno: unknown): IToolElement | undefined {
    if (!anno || Object.keys(anno).length === 0) {
        return undefined;
    }
    return anno as IToolElement;
}

/**
 * Gibt den übergebenen Eintrag als angegebenen Type zurück
 */
export function getTypedAnnotation<T>(anno: unknown): T | undefined {
    if (!anno || Object.keys(anno).length === 0) {
        return undefined;
    }
    return anno as T;
}


export interface IFingerprint {
    _addr: number;
    _type: string;
    features: {
        create: number;
        modified: number;
        reference: number;
        user: string;
    };
}
