
export const defaultAnnotationClasses: IAnnotationClass[] = [
  {
    rgb: 'rgb(235, 128, 82)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.SpatialEntity',
    name: 'Spatial Entity',
    sort: 1,
    concept: true,
    stype: 'ner',
    css: 'OTHER',
    value: 'I-Spatial-Entity',
    visible: true
  },
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.QSLink',
    name: 'QSLink',
    sort: 1,
    concept: true,
    stype: 'ner',
    css: 'OTHER',
    value: 'I-QSLink',
    visible: true
  },
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.MetaLink',
    name: 'Meta Link',
    sort: 1,
    concept: true,
    stype: 'ner',
    css: 'OTHER',
    value: 'I-MetaLink',
    visible: true
  },
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.MeasureLink',
    name: 'Measure Link',
    sort: 1,
    concept: true,
    stype: 'ner',
    css: 'OTHER',
    value: 'I-MeasureLink',
    visible: true
  },
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.MoveLink',
    name: 'Move Link',
    sort: 1,
    concept: true,
    stype: 'ner',
    css: 'OTHER',
    value: 'I-MoveLink',
    visible: true
  },
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.OLink',
    name: 'OLink',
    sort: 1,
    concept: true,
    stype: 'ner',
    css: 'OTHER',
    value: 'I-OLink',
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
    rgb: 'rgb(120, 64, 40)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Location',
    name: 'Location',
    sort: 1,
    concept: false,
    stype: 'ner',
    css: 'OTHER',
    value: 'I-Location',
    visible: true
  },
  {
    rgb: 'rgb(120, 0, 40)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Nonmotion_Event',
    name: 'Nonmotion_Event',
    sort: 1,
    concept: false,
    stype: 'ner',
    css: 'OTHER',
    value: 'I-Nonmotion_Event',
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
    rgb: 'rgb(137,157,192)',
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
    rgb: 'rgb(131,50,50)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.URL',
    name: 'URL',
    sort: 1,
    concept: false,
    stype: 'ner',
    css: 'OTHER',
    value: 'URL',
    visible: true
  },
  {
    rgb: 'rgb(160,191,124)',
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
    rgb: 'rgb(252,157,154)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.MRelation',
    name: 'MRelation',
    sort: 1,
    concept: false,
    stype: 'ner',
    css: 'OTHER',
    value: 'I-UNK',
    visible: true
  },
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.CP',
    name: 'CP',
    sort: 1,
    concept: false,
    stype: 'ner',
    css: 'OTHER',
    value: 'I-CP',
    visible: true
  },
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Spatial_Signal',
    name: 'Spatial Signal',
    sort: 1,
    concept: false,
    stype: 'ner',
    css: 'OTHER',
    value: 'I-Spatial_Signal',
    visible: true
  },
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Motion_Signal',
    name: 'Motion Signal',
    sort: 1,
    concept: false,
    stype: 'ner',
    css: 'OTHER',
    value: 'I-Motion_Signal',
    visible: true
  },
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Spatial_Function',
    name: 'Spatial Function',
    sort: 1,
    concept: false,
    stype: 'ner',
    css: 'OTHER',
    value: 'I-Spatial_Function',
    visible: true
  },
];

export interface IAnnotationClass {
  name: string;
  type: string;
  rgb: string;
  concept: boolean;
  [key: string]: boolean | string | number;
}
