export enum FeatureType {
  /** Choose if There only limited options like Volume, Point, Area and Line */
  Select,

  /** Choose if the Feature is full Text editable like a Comment for Example   */
  Text,

  /** Choose if the Feature is in Reference to another Entity like in Link the to and from Features*/
  Reference
}

export const defaultAnnotationClasses: IAnnotationClass[] = [
  /*spatial entity */
  {
    rgb: 'rgb(235, 128, 82)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.SpatialEntity',
    name: 'Spatial Entity',
    css_class: 'I-Spatial-Entity',
    features: {

    }
  },
  /*place */
  {
    rgb: 'rgb(177, 89, 40)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Place',
    name: 'Place',
    css_class: 'I-Place',
    features: {
      "dimensionality": {
        display_name: "Dimensionality",
        type: FeatureType.Select,
        value: "Area",
        select_option: [{
          display_name: "Area",
          value: "AREA",
          value_name: "AREA"
        },
        {
          display_name: "Point",
          value: "POINT",
          value_name: "POINT"
        },
        {
          display_name: "Line",
          value: "LINE",
          value_name: "LINE"
        },
        {
          display_name: "Volume",
          value: "VOLUME",
          value_name: "VOLUME"
        }
        ]

      },
      "comment": {
        display_name: "Comment",
        type: FeatureType.Text,
        value: ""
      },
      /*Refer to MAE Tool*/
      "type": {
        display_name: "Type",
        type: FeatureType.Select,
        value: "type",
        select_option: [{
          display_name: "Body of water",
          value: "BODYOFWATER",
          value_name: "BODYOFWATER"
        },
        {
          display_name: "Celestial",
          value: "CELESTIAL",
          value_name: "CELESTIAL"
        },
        {
          display_name: "Civil",
          value: "CIVIL",
          value_name: "CIVIL"
        },
        {
          display_name: "Country",
          value: "COUNTRY",
          value_name: "COUNTRY"
        },
        {
          display_name: "Grid",
          value: "GRID",
          value_name: "GRID"
        },
        {
          display_name: "Latlong",
          value: "LATLONG",
          value_name: "LATLONG"
        },
        /* Didn't find any useful information to explain
        {
          display_name: "MTN",
          value: "MTN",
          value_name: "MTN"
        },*/
        {
          display_name: "PostalCode",
          value: "POSTALCODE",
          value_name: "POSTALCODE"
        }, {
          display_name: "Postbox",
          value: "POSTBOX",
          value_name: "POSTBOX"
        }, {/*private pilot license*/
          display_name: "PPL",
          value: "PPL",
          value_name: "PPL"
        }, {
          display_name: "PPLA",
          value: "PPLA",
          value_name: "PPLA"
        }, {
          display_name: "PPLC",
          value: "PPLC",
          value_name: "PPLC"
        }, {
          display_name: "Region",
          value: "REGION",
          value_name: "REGION"
        }, {
          display_name: "State",
          value: "STATE",
          value_name: "STATE"
        },
        {/*Universal Transverse Mercator, UTM*/
          display_name: "UTM",
          value: "UTM",
          value_name: "UTM"
        },
        ]
      },
      "form": {
        display_name: "Form",
        type: FeatureType.Select,
        value: "Form",
        select_option: [{/*Nominal Form*/
          display_name: "NOM",
          value: "NOM",
          value_name: "NOM"
        },
        {/*named location*/
          display_name: "NAM",
          value: "NAM",
          value_name: "NAM"
        }
        ]
      },
      "dcl": {/*Document Creation Location, default value：false*/
        display_name: "DCL",
        type: FeatureType.Select,
        value: false,
        select_option: [{
          display_name: "False",
          value: false,
          value_name: "FALSE"
        },
        {
          display_name: "True",
          value: true,
          value_name: "TRUE"
        }
        ],
        not_nullable: true

      },
      "elevation": {/*option attribute*/
        display_name: "elevation",
        type: FeatureType.Text,
        value: ""
      }

    }
  },
  /*location */
  {
    rgb: 'rgb(120, 64, 40)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Location',
    name: 'Location',
    css_class: 'I-Location',
    features: {}
  },
  /*nonmotion event*/
  {
    rgb: 'rgb(120, 0, 40)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.NonMotionEvent',
    name: 'Nonmotion_Event',
    css_class: 'I-Nonmotion_Event',
    features: {

    }
  },

  /**
   * {
                      name: 'Dimensionality',
                      uimaName: 'dimensionality',
                      formElement: 'combobox',
                      formCfg: { width: 268 },
                      values: ['POINT', 'LINE', 'AREA', 'VOLUME']
                  }
   */
  /*path*/
  {
    rgb: 'rgb(233,234,192)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Path',
    name: 'Path',
    css_class: 'I-Path',
    features: {
      'dimensionality': {
        display_name: 'Dimensionality',
        type: FeatureType.Select,
        value: "",
        select_option: [
          {
            value: 'AREA',
            display_name: 'Area',
            value_name: "AREA"
          },
          /*point should never be a path* */
          {
            display_name: "Line",
            value: "LINE",
            value_name: "LINE"
          },
          {
            display_name: "Volume",
            value: "VOLUME",
            value_name: "VOLUME"
          }
        ]
      },
      'type': {
        display_name: 'Type',
        type: FeatureType.Select,
        value: "",
        select_option: [
          {/*waterway or body of water*/
            value: 'Waterway',
            display_name: 'WATERWAY',
            value_name: "WATERWAY"
          },
          {
            display_name: "Railway",
            value: "RAILWAY",
            value_name: "RAILWAY"
          },
          {
            display_name: "Bridge",
            value: "BRIDGE",
            value_name: "BRIDGE"
          },
          {
            display_name: "Tunnel",
            value: "TUNNEL",
            value_name: "TUNNEL"
          },
          {
            display_name: "Road",
            value: "ROAD",
            value_name: "ROAD"
          },
          {
            display_name: "Lane",
            value: "LANE",
            value_name: "LANE"
          },
          {
            display_name: "Passage",
            value: "PASSAGE",
            value_name: "PASSAGE"
          },
          {
            display_name: "Trail",
            value: "TRAIL",
            value_name: "TRAIL"
          },
          {
            display_name: "Boundary",
            value: "BOUNDARY",
            value_name: "BOUNDARY"
          },
          {
            display_name: "Margin",
            value: "MARGIN",
            value_name: "MARGIN"
          },
          {
            display_name: "Row",
            value: "ROW",
            value_name: "ROW"
          },
          {
            display_name: "Conduit",
            value: "CONDUIT",
            value_name: "COUNDUIT"
          },
          {
            display_name: "Filament",
            value: "FILAMENT",
            value_name: "FILAMENT"
          },
          {
            display_name: "Mountain",
            value: "MOUNTAIN",
            value_name: "MOUNTAIN"
          }
        ]
      },
      'comment': {
        display_name: 'Comment',
        type: FeatureType.Text,
        value: "",
      },
      /*the following with 'reference' should be changed*/
      'beginID': {
        display_name: 'beginID',
        type: FeatureType.Reference,
        value: "null",
        /*midID would be added later*/
      },
      'endID': {
        display_name: 'endID',
        type: FeatureType.Reference,
        value: "null",

      },
      'midID': {/*Should add a list of midpoint locations*/
        display_name: 'midID',
        type: FeatureType.Reference,
        value: "null",

      },
      "form": {
        display_name: "Form",
        type: FeatureType.Select,
        value: "Form",
        select_option: [{/*Nominal Form*/
          display_name: "NOM",
          value: "NOM",
          value_name: "NOM"
        },
        {/*named location*/
          display_name: "NAM",
          value: "NAM",
          value_name: "NAM"
        }
        ]
      },
      "dcl": {/*Document Creation Location, default value：false*/
        display_name: "DCL",
        type: FeatureType.Select,
        value: "False",
        select_option: [{
          display_name: "False",
          value: false,
          value_name: "FALSE"
        },
        {
          display_name: "True",
          value: true,
          value_name: "TRUE"
        }
        ]
      },
      "evevation": {/*option attribute*/
        display_name: "eveation",
        type: FeatureType.Text,
        value: ""
      },
      'mod': {/*a spatially relevant modifier*/
        display_name: 'mod',
        type: FeatureType.Text,
        value: "",
      },
    }
  },
  /*event*/
  {
    rgb: 'rgb(250, 188, 46)',
    type: 'org.texttechnologylab.annotation.semaf.isobase.Event',
    name: 'Event',
    css_class: 'I-Event',
    features: {}
  },
  /*motion*/
  {
    rgb: 'rgb(137,157,192)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Motion',
    name: 'Motion',
    css_class: 'I-Motion',
    features: {}
  },
  /*url*/
  {
    rgb: 'rgb(131,50,50)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.URL',
    name: 'URL',
    css_class: 'URL',
    features: {}
  },
  /*measure*/
  {
    rgb: 'rgb(160,191,124)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Measure',
    name: 'Measure',
    css_class: 'I-UNK',
    features: {}
  },
  /*mrealation*/
  {
    rgb: 'rgb(252,157,154)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.MRelation',
    name: 'MRelation',
    css_class: 'I-UNK',
    features: {}
  },
  /*spatial signal*/
  {
    rgb: 'purple',
    type: 'org.texttechnologylab.annotation.semaf.isospace.SpatialSignal',
    name: 'Spatial Signal',
    css_class: 'I-SpatialSignal',
    features: {}
  },
  /*motion signal*/
  {
    rgb: 'green',
    type: 'org.texttechnologylab.annotation.semaf.isospace.MotionSignal',
    name: 'Motion Signal',
    css_class: 'I-MotionSignal',
    features: {}
  }
];


export const defaultLinkClasses: IAnnotationClass[] = [
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.QSLink',
    name: 'QSLink',
    css_class: 'I-QSLink',
    features: {}
  },
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.meta.MetaLink',
    name: 'Meta Link',
    css_class: 'I-MetaLink',
    features: {}
  },
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.MeasureLink',
    name: 'Measure Link',
    css_class: 'I-MeasureLink',
    features: {}
  },
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.MoveLink',
    name: 'Move Link',
    css_class: 'I-MoveLink',
    features: {}
  },
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.OLink',
    name: 'OLink',
    css_class: 'I-OLink',
    features: {}
  }
]



export interface SelectOption {
  /** Shoule be unique among the Array, does otherwise not mather */
  value_name: string
  value: boolean | string | number;

  /** The name which should be displayed in the selected */
  display_name: string;
}

export interface Feature {
  display_name: string;
  type: FeatureType;
  /** Should be the default to which it will be initialized */
  value: boolean | string | number;

  /** Options for the Select should be Empty if type is not Select */
  select_option?: SelectOption[]

  /** There are Attributes like DCL where it can only be true or false, 
   * null or empty is not option for these set this to true (only matters for Select)*/
  not_nullable?: boolean;
}



export interface IAnnotationClass {
  name: string;
  /** should be the same as in Uima, a list of most can be found in ./uima.json */
  type: string;
  /** Can be any css color, i think */
  rgb: string;
  css_class: string;
  /** Should only contain features which are editable by the user like a comment for example  */
  features: { [name: string]: Feature };
}
