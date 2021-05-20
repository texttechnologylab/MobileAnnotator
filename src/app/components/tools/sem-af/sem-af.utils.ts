
export const defaultAnnotationClasses: IAnnotationClass[] = [
  {
    rgb: 'rgb(235, 128, 82)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.SpatialEntity',
    name: 'Spatial Entity',
    sort: 1,
    concept: false,
    stype: 'ner',
    css: 'OTHER',
    value: 'I-Spatial-Entity',
    visible: true
  },
  {
    rgb: 'rgb(177, 89, 40)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Place',
    name: 'Place',
    sort: 1,
    concept: false,
    stype: 'ner',
    css: 'OTHER',
    value: 'I-Place',
    visible: true
  },


  {
    rgb: 'rgb(233,234,192)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Path',
    name: 'Path',
    sort: 1,
    concept: false,
    stype: 'ner',
    css: 'OTHER',
    value: 'I-Path',
    visible: true
  },
  {
    rgb: 'rgb(250, 188, 46)',
    type: 'org.texttechnologylab.annotation.semaf.isobase.Event',
    name: 'Event',
    sort: 1,
    concept: false,
    stype: 'ner',
    css: 'OTHER',
    value: 'I-Event',
    visible: true
  },
  {
    rgb: 'rgb(0,255,255)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Motion',
    name: 'Motion',
    sort: 1,
    concept: false,
    stype: 'ner',
    css: 'OTHER',
    value: 'I-Motion',
    visible: true
  },
  {
    rgb: 'rgb(128,0,128)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.SRelation',
    name: 'sRelation',
    sort: 1,
    concept: false,
    stype: 'ner',
    css: 'OTHER',
    value: 'I-SRelation',
    visible: true
  },
  {
    rgb: 'rgb(255,0,255)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Measure',
    name: 'Measure',
    sort: 1,
    concept: false,
    stype: 'ner',
    css: 'OTHER',
    value: 'I-UNK',
    visible: true
  },
  {
    rgb: 'rgb(0,0,128)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.MRelation',
    name: 'MRelation',
    sort: 1,
    concept: false,
    stype: 'ner',
    css: 'OTHER',
    value: 'I-UNK',
    visible: true
  }

];


export interface IAnnotationClass {
  name: string;
  type: string;
  rgb: string;
  concept: boolean;
  [key: string]: boolean | string | number;
}
