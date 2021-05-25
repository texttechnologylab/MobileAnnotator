export enum FeatureType{
  /** Choose if There only limited options like Volume, Point, Area and Line */
  Select,

  /** Choose if the Feature is full Text editable like a Comment for Example   */
  Text,

  /** Choose if the Feature is in Reference to another Entity like in Link the to and from Features*/
  Reference
}

export const defaultAnnotationClasses: IAnnotationClass[] = [
  {
    rgb: 'rgb(235, 128, 82)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.SpatialEntity',
    name: 'Spatial Entity',
    css_class: 'I-Spatial-Entity',
    features:{}
  },
  {
    rgb: 'rgb(177, 89, 40)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Place',
    name: 'Place',
    css_class: 'I-Place',
    features:{
      "dimensionality":{
        display_name: "Dimensionality",
        type:FeatureType.Select,
        value: "AREA",
        select_option: [{
          display_name:"Area",
          value: "AREA",
          value_name:"AREA"
        },
        {
          display_name:"Point",
          value: "POINT",
          value_name:"POINT"
        },
        {
          display_name:"Line",
          value: "LINE",
          value_name:"LINE"
        },
        {
          display_name:"Volume",
          value: "VOLUME",
          value_name:"VOLUME"
        }
      ]
        
      },
    "comment":{
      display_name: "Comment",
      type: FeatureType.Text,
      value:""
    }
    }
  },

  {
    rgb: 'rgb(120, 64, 40)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Location',
    name: 'Location',
    css_class: 'I-Location',
    features:{}
  },
  {
    rgb: 'rgb(120, 0, 40)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Nonmotion_Event',
    name: 'Nonmotion_Event',
    css_class: 'I-Nonmotion_Event',
    features:{}
  },

  {
    rgb: 'rgb(233,234,192)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Path',
    name: 'Path',
    css_class: 'I-Path',
    features:{}
  },
  {
    rgb: 'rgb(250, 188, 46)',
    type: 'org.texttechnologylab.annotation.semaf.isobase.Event',
    name: 'Event',
    css_class: 'I-Event',
    features:{}
  },
  {
    rgb: 'rgb(137,157,192)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Motion',
    name: 'Motion',
    css_class: 'I-Motion',
    features:{}
  },
  
 
  {
    rgb: 'rgb(131,50,50)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.URL',
    name: 'URL',
    css_class: 'URL',
    features:{}
  },
  {
    rgb: 'rgb(160,191,124)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Measure',
    name: 'Measure',
    css_class: 'I-UNK',
    features:{}
  },
  {
    rgb: 'rgb(252,157,154)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.MRelation',
    name: 'MRelation',
    css_class: 'I-UNK',
    features:{}
  },
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.CP',
    name: 'CP',
    css_class: 'I-CP',
    features:{}
  },
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Spatial_Signal',
    name: 'Spatial Signal',
    css_class: 'I-Spatial_Signal',
    features:{}
  },
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Motion_Signal',
    name: 'Motion Signal',
    css_class: 'I-Motion_Signal',
    features:{}
  },
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Spatial_Function',
    name: 'Spatial Function',
    css_class: 'I-Spatial_Function',
    features:{}
  },
];


export const defaultLinkClasses: IAnnotationClass[] = [
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.QSLink',
    name: 'QSLink',
    css_class: 'I-QSLink',
    features:{}
  },
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.meta.MetaLink',
    name: 'Meta Link',
    css_class: 'I-MetaLink',
    features:{}
  },
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.MeasureLink',
    name: 'Measure Link',
    css_class: 'I-MeasureLink',
    features:{}
  },
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.MoveLink',
    name: 'Move Link',
    css_class: 'I-MoveLink',
    features:{}
  },
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.OLink',
    name: 'OLink',
    css_class: 'I-OLink',
    features:{}
  }
]



export interface SelectOption{
  /** Shoule be unique among the Array, does otherwise not mather */
  value_name: string
  value: boolean | string | number;

  /** The name which should be displayed in the selected */
  display_name: string;
}

export interface Feature{
  display_name: string;
  type: FeatureType;
  /** Should be the default to which it will be initialized */
  value: boolean | string | number;

  /** Options for the Select should be Empty if type is not Select */
  select_option? : SelectOption[]
}



export interface IAnnotationClass {
  name: string;
  /** should be the same as in Uima, a list of most can be found in ./uima.json */
  type: string;
  /** Can be any css color, i think */
  rgb: string;
  css_class: string;
  /** Should only contain features which are editable by the user like a comment for example  */
  features: {  [name: string]: Feature  } ;
}
