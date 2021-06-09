export enum FeatureType {
  /** Choose if There only limited options like Volume, Point, Area and Line */
  Select,

  /** Choose if the Feature is full Text editable like a Comment for Example   */
  Text,

  /** Choose if the Feature is in Reference to another Entity like in Link the to and from Features*/
  Reference,
  ReferenceMulti
}
export const defaultAnnotationClasses: IAnnotationClass[] = [
  /*spatial entity 'non-consuming tag'*/
  {
    rgb: 'rgb(193,203,215)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.SpatialEntity',
    name: 'Spatial Entity',
    css_class: 'I-Spatial-Entity',
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
      "spatial_entitiy_type": {
        display_name: "Type",
        type: FeatureType.Select,
        value: "type",
        select_option: [{/**maybe factor */
          display_name: "Fac",
          value: "FAC",
          value_name: "FAC"
        },
        {
          display_name: "Vehicle",
          value: "VEHICLE",
          value_name: "VEHICLE"
        },
        {
          display_name: "Person",
          value: "PERSON",
          value_name: "PERSON"
        },
        {
          display_name: "Dynamic Event",
          value: "DYNAMIC_EVENT",
          value_name: "DYNAMIC_EVENT"
        },
        {
          display_name: "Artifact",
          value: "ARTIFACT",
          value_name: "ARTIFACT"
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
      "countable": {
        display_name: "Countable",
        type: FeatureType.Select,
        value: "Countable",
        select_option: [{
          display_name: "True",
          value: true,
          value_name: "TRUE"
        },
        {
          display_name: "False",
          value: false,
          value_name: "FALSE"
        }
        ]
      },
      'mod': {/*a spatially relevant modifier*/
        display_name: 'mod',
        type: FeatureType.Text,
        value: "",
      },
    }
  },
  /*place */
  {
    rgb: 'rgb(175,176,178)',
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
      "spatial_entitiy_type": {
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
    rgb: 'rgb(224,229,223)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Location',
    name: 'Location',
    css_class: 'I-Location',
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
      "countable": {
        display_name: "Countable",
        type: FeatureType.Select,
        value: "Countable",
        select_option: [{
          display_name: "True",
          value: true,
          value_name: "TRUE"
        },
        {
          display_name: "False",
          value: false,
          value_name: "FALSE"
        }
        ]
      },
      "elevation": {/*option attribute*/
        display_name: "elevation",
        type: FeatureType.Text,
        value: ""
      }
    }
  },
  /*nonmotion event<-->event path*/
  {
    rgb: 'rgb(181,196,177)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.EventPath',
    name: 'Event-Path',
    css_class: 'I-eventpath',
    features: {
      "trigger": {/*define it later */
        display_name: "TRIGGER",
        type: FeatureType.Reference,
        value: "",
        not_nullable: true
      },
      'beginID': {/*define it later */
        display_name: 'beginID',
        type: FeatureType.Reference,
        value: "null",
        /*midID would be added later*/
      },
      'endID': {/*define it later */
        display_name: 'endID',
        type: FeatureType.Reference,
        value: "null",
      },
      'midID': {/*Should add a list of midpoint locations,define it later */
        display_name: 'midID',
        type: FeatureType.Reference,
        value: "null",
      },
      "gazref": {/*define it later */
        display_name: "GAZREF",
        type: FeatureType.Text,
        value: "",
      },
      'comment': {
        display_name: 'Comment',
        type: FeatureType.Text,
        value: "",
      },
      'longtitude': {
        display_name: 'longtitude',
        type: FeatureType.Text,
        value: "",
      },
      'latitude': {
        display_name: 'latitude',
        type: FeatureType.Text,
        value: "",
      }

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
    rgb: 'rgb(156,168,184)',
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
      'spatial_entitiy_type': {
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
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Place"],
        value: "null",
        /*midID would be added later*/
      },
      'endID': {
        display_name: 'endID',
        type: FeatureType.Reference,
        value: "null",

      },
      'midID_array': {/*Should add a list of midpoint locations*/
        display_name: 'midIDs',
        type: FeatureType.ReferenceMulti,
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Place","org.texttechnologylab.annotation.semaf.isospace.Location"],
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
    rgb: 'rgb(215,202,175)',
    type: 'org.texttechnologylab.annotation.semaf.isobase.Event',
    name: 'Event',
    css_class: 'I-Event',
    features: {
      'mod': {/*a spatially relevant modifier*/
        display_name: 'mod',
        type: FeatureType.Text,
        value: "",
      },
      "elevation": {
        display_name: "elevation",
        type: FeatureType.Text,
        value: ""
      },
      'comment': {
        display_name: 'Comment',
        type: FeatureType.Text,
        value: "",
      },
      'longtitude': {
        display_name: 'longtitude',
        type: FeatureType.Text,
        value: "",
      },
      'latitude': {
        display_name: 'latitude',
        type: FeatureType.Text,
        value: "",
      }
    }
  },
  /*motion*/
  {
    rgb: 'rgb(224,205,207)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Motion',
    name: 'Motion',
    css_class: 'I-Motion',
    features: {
      "motion_type": {
        display_name: "MOTION_TYPE",
        type: FeatureType.Select,
        value: "MOTION_TYPE",
        select_option: [{
          display_name: "Manner",
          value: "MANNER",
          value_name: "MANNER"
        },
        {
          display_name: "Path",
          value: "PATH",
          value_name: "PATH"
        }]
      },
      "motion_manner": {
        display_name: "MOTION_MANNER",
        type: FeatureType.Reference,
        value: ""
      },
      "motion_goal": {
        display_name: "MOTION_GOAL",
        type: FeatureType.Reference,
        value: ""
      },
      "motion_class": {
        display_name: "MOTION_CLASS",
        type: FeatureType.Select,
        value: "MOTION_CLASS",
        select_option: [{
          display_name: "Move",
          value: "MOVE",
          value_name: "MOVE"
        },
        {
          display_name: "Move External",
          value: "MOVE_EXTERNAL",
          value_name: "MOVE_EXTERNAL"
        },
        {
          display_name: "Move Internal",
          value: "MOVE_INTERNAL",
          value_name: "MOVE_INTERNAL"
        },
        {
          display_name: "Leave",
          value: "LEAVE",
          value_name: "LEAVE"
        },
        {
          display_name: "Reach",
          value: "REACH",
          value_name: "REACH"
        },
        {
          display_name: "Cross",
          value: "CROSS",
          value_name: "CROSS"
        },
        {
          display_name: "Detach",
          value: "DETACH",
          value_name: "DETACH"
        },
        {
          display_name: "Hit",
          value: "HIT",
          value_name: "HIT"
        },
        {
          display_name: "Follow",
          value: "FOLLOW",
          value_name: "FOLLOW"
        },
        {
          display_name: "Deviate",
          value: "DEVIATE",
          value_name: "DEVIATE"
        },
        {
          display_name: "Stay",
          value: "STAY",
          value_name: "STAY"
        }
        ]
      },
      "motion_sense": {
        display_name: "Motion Sense",
        type: FeatureType.Select,
        value: "MOTION_SENSE",
        select_option: [{
          display_name: "Litereal",
          value: "LITEREAL",
          value_name: "LITEREAL"
        },
        {
          display_name: "Fictive",
          value: "FICTIVE",
          value_name: "FICTIVE"
        },
        {
          display_name: "Intrinsic Change",
          value: "INTRINSIC_CHANGE",
          value_name: "INTEINSIC_CHANGE"
        }]
      },
      'mod': {/*a spatially relevant modifier*/
        display_name: 'mod',
        type: FeatureType.Text,
        value: "",
      },
      'comment': {
        display_name: 'Comment',
        type: FeatureType.Text,
        value: "",
      }

    }
  },
  /*url Not yet defined in source file*/
  {
    rgb: 'rgb(183,177,165)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.URL',
    name: 'URL',
    css_class: 'URL',
    features: {
      "comment": {/*option attribute*/
        display_name: "Comment",
        type: FeatureType.Text,
        value: ""
      }
    }
  },
  /*measure*/
  {
    rgb: 'rgb(250,234,210)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Measure',
    name: 'Measure',
    css_class: 'I-UNK',
    features: {
      "comment": {
        display_name: 'Comment',
        type: FeatureType.Text,
        value: "",
      },
      
      "value": {
        display_name: 'Value',
        type: FeatureType.Text,
        value: "",
        not_nullable: true
      },
      "unit": {
        display_name: 'unit',
        type: FeatureType.Text,
        value: "",

      }
    }
  },
  /*spatial signal<-->sRelation*/
  {
    rgb: 'rgb(238,229,247)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.SRelation',
    name: 'sRelation',
    css_class: 'I-sRelation',
    features: {
      "comment": {
        display_name: 'Comment',
        type: FeatureType.Text,
        value: "",
      },
      "cluster": {
        display_name: 'Cluster',
        type: FeatureType.Text,
        value: "",
      },
      "value": {
        display_name: 'Value',
        type: FeatureType.Text,
        value: "",
      },
      "spatial_entitiy_type": {
        display_name: "TYPE",
        type: FeatureType.Select,
        value: "TYPE",
        select_option: [{
          display_name: "Topological",
          value: "TOPOLOGICAL",
          value_name: "TOPOLOGICAL"
        },
        {
          display_name: "Directional",
          value: "DIRECTIONAL",
          value_name: "DIRECTIONAL"
        },
        {
          display_name: "Topo Directional",
          value: "TOPO_DIRECTIONAL",
          value_name: "TOPO_DIRECTIONAL"
        },
        {
          display_name: "Path Defining",
          value: "PATH_DEFINING",
          value_name: "PATH_DEFINING"
        }, {
          display_name: "Goal Defining",
          value: "GOAL_DEFINING",
          value_name: "GOAL_DEFINING"
        }
        ]
      },
    }
  },
  /*motion signal<-->mRelation need to complete trigger here*/
  {
    rgb: 'rgb(201,191,211)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.MRelation',
    name: 'mRelation',
    css_class: 'I-mRelation',
    features: {
      "Trigger": {
        display_name: "Trigger",
        /*refer to spatial signal*/
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.SRelation"],
        value: "null",
      },
      "comment": {
        display_name: 'Comment',
        type: FeatureType.Text,
        value: "",
      },
      "cluster": {
        display_name: 'Cluster',
        type: FeatureType.Text,
        value: "",
      },
      "value": {
        display_name: 'Value',
        type: FeatureType.Text,
        value: "",
      }
    }
  }
];

  /*spatial relationships class*/

export const defaultLinkClasses: IAnnotationClass[] = [
  /*QS link complete*/
  {      
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.QSLink',
    name: 'QSLink',
    css_class: 'I-QSLink',
    features: {
      "Trigger": {
        display_name: "Trigger",
        /*refer to spatial signal*/
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.SRelation"],
        value: "null",
      },
      "trajector": {
        display_name: "Trajector",
        /*refer to location/(spatial)entity/event tag*/
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Location","org.texttechnologylab.annotation.semaf.isospace.SpatialEntity","org.texttechnologylab.annotation.semaf.isobase.Event"],
        value: "null",
      },
      "landmark": {
        display_name: "Landmark",
        /*refer to location/(spatial)entity/event tag*/
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Location","org.texttechnologylab.annotation.semaf.isospace.SpatialEntity","org.texttechnologylab.annotation.semaf.isobase.Event"],
        value: "null",
      },
      "relType": {
        display_name: "relation type",
        type: FeatureType.Select,
        value: "",
        select_option: [{
          display_name: "DC",
          value: "DC",
          value_name: "DC"
        },
        {
          display_name: "EC",
          value: "EC",
          value_name: "EC"
        },
        {
          display_name: "PO",
          value: "PO",
          value_name: "PO"
        },
        {
          display_name: "EQ",
          value: "EQ",
          value_name: "EQ"
        },
        {
          display_name: "TPP",
          value: "TPP",
          value_name: "TPP"
        },
        {
          display_name: "TPPi",
          value: "TPPI",
          value_name: "TPPI"
        },
        {
          display_name: "NTPP",
          value: "NTPP",
          value_name: "NTPP"
        },
        {
          display_name: "NTPPi",
          value: "NTPPI",
          value_name: "NTPPI"
        },
        {
          display_name: "IN",
          value: "IN",
          value_name: "IN"
        },
        {
          display_name: "OUT",
          value: "OUT",
          value_name: "OUT"
        }]
    }
  }
  },
  /*meta link*/
  {     
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.meta.MetaLink',
    name: 'Meta Link',
    css_class: 'I-MetaLink',
    features: {
      "Trigger": {
        display_name: "Trigger",
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Place","org.texttechnologylab.annotation.semaf.isospace.Location"],
        value: "null",
      }
    }
  },
  /*measure link*/
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.MeasureLink',
    name: 'Measure Link',
    css_class: 'I-MeasureLink',
    features: {
      "Trigger": {
        display_name: "Trigger",
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Place","org.texttechnologylab.annotation.semaf.isospace.Location"],
        value: "null",
      }
    }
  },
   /* working move link problem with source,goal and midPoint*/
  {
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.MoveLink',
    name: 'Move Link',
    css_class: 'I-MoveLink',
    features: {
      "Trigger": {
        display_name: "Trigger",
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Motion"],
        value: "null",
      },
      "Source": {
        display_name: "Source",
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.EventPath.beginID"],
        /* problem : only want to refer beginID from EventPath*/
        value: "null",
      },
      "Goal": {
        display_name: "Goal",
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.EventPath.endID"],
        /* problem : only want to refer endID from EventPath*/
        value: "null",
      },
      "midPoint": {
        display_name: "Mid Point",
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.EventPath.midID"],
        /* problem : only want to refer midID from EventPath*/
        value: "null",
      },
      "mover": {
        display_name: "Mover",              
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Location","org.texttechnologylab.annotation.semaf.isospace.SpatialEntity","org.texttechnologylab.annotation.semaf.isobase.Event"],
        value: "null",
      },
      /*problem: want to refer the tags only from mover*/
      "ground": {
        display_name: "ground",              
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.MoveLink.mover"],
        value: "null",
      },
      "goal_reached": {
        display_name: "Goal Reached",
        type: FeatureType.Select,
        value: "",
        select_option: [{
          display_name: "True",
          value: "TRUE",
          value_name: "TRUE"
        },
        {
          display_name: "False",
          value: "FALSE",
          value_name: "FALSE"
        },
        {
          display_name: "Uncertain",
          value: "UNCERTAIN",
          value_name: "UNCERTAIN"
        },
      ]      
    },
    "pathID": {
      display_name: "PathID",              
      type: FeatureType.Reference,      
      reference_option: ["org.texttechnologylab.annotation.semaf.isospace.EventPath.trigger"],
      value: "null",
    },
    "motion_signalID": {
      display_name: "ground",              
      type: FeatureType.Reference,      
      reference_option: ["org.texttechnologylab.annotation.semaf.isospace.MRelation.trigger"],
      value: "null",
    }
  },
},
   /*orientation link complete but one question about "referencePt_viewer_entity" */
  {
    
    rgb: 'rgb(131,120,120)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.OLink',
    name: 'OLink',
    css_class: 'I-OLink',
    features: {
      "Trigger": {
        display_name: "Trigger",
        /*refer to spatial signal*/
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.SRelation"],
        value: "null",
      },
      "trajector": {
        display_name: "Trajector",
        /*refer to location/(spatial)entity/event tag*/
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Location","org.texttechnologylab.annotation.semaf.isospace.SpatialEntity","org.texttechnologylab.annotation.semaf.isobase.Event"],
        value: "null",
      },
      "landmark": {
        display_name: "Landmark",
        /*refer to location/(spatial)entity/event tag*/
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Location","org.texttechnologylab.annotation.semaf.isospace.SpatialEntity","org.texttechnologylab.annotation.semaf.isobase.Event"],
        value: "null",
      },
      /*relation type*/
      "relType": {
        display_name: "relation type",
        type: FeatureType.Select,
        value: "",
        select_option: [{
          display_name: "Above",
          value: "ABOVE",
          value_name: "ABOVE"
        },
        {
          display_name: "On",
          value: "ON",
          value_name: "ON"
        },
        {
          display_name: " In Front Of",
          value: "IN FRONT OF",
          value_name: "IN FRONT OF"
        },
        {
          display_name: "In The Front Of",
          value: "IN THE FRONT OF",
          value_name: "IN THE FRONT OF"
        },

        {
          display_name: "Behind",
          value: "BEHIND",
          value_name: "BEHIND"
        },
        {
          display_name: "Below",
          value: "BELOW",
          value_name: "BELOW"
        },
        {
          display_name: "Under",
          value: "UNDER",
          value_name: "UNDER"
        },
        {
          display_name: "Over",
          value: "OVER",
          value_name: "OVER"
        },
        {
          display_name: "Outside",
          value: "OUTSIDE",
          value_name: "OUTSIDE"
        },
        {
          display_name: "Inside",
          value: "INSIDE",
          value_name: "INSIDE"
        },
        {
          display_name: "Between",
          value: "BETWEEN",
          value_name: "BETWEEN"
        },        
        {
          display_name: "Beside",
          value: "BESIDE",
          value_name: "BESIDE"
        },

        {
          display_name: "Next To",
          value: "NEXT TO",
          value_name: "NEXT TO"
        },
        {
          display_name: "Before",
          value: "BEFORE",
          value_name: "BEFORE"
        },
        {
          display_name: "North",
          value: "NORTH",
          value_name: "NORTH"
        },
        {
          display_name: "South",
          value: "SOUTH",
          value_name: "SOUTH"
        },        
        {
          display_name: "West",
          value: "WEST",
          value_name: "WEST"
        },        
        {
          display_name: "East",
          value: "EAST",
          value_name: "EAST"
        },
        {
          display_name: "Northeast",
          value: "NORTHEAST",
          value_name: "NORTHEAST"
        },
        {
          display_name: "Northwest",
          value: "NORTHWEST",
          value_name: "NORTHWEST"
        },
        {
          display_name: "Southeast",
          value: "SOUTHEAST",
          value_name: "SOUTHEAST"
        },
        {
          display_name: "Southwest",
          value: "SOUTHWEST",
          value_name: "SOUTHWEST"
        },
        {
          display_name: "Right",
          value: "RIGHT",
          value_name: "RIGHT"
        },
        {
          display_name: "Left",
          value: "LEFT",
          value_name: "LEFT"
        },
        {
          display_name: "Opposite",
          value: "OPPOSITE",
          value_name: "OPPOSITE"
        },
        {
          display_name: "At",
          value: "AT",
          value_name: "AT"
        },
        {
          display_name: "In",
          value: "IN",
          value_name: "IN"
        }       
       ]
    },
     /* frame type */
    "frame_Type": {     
      display_name: "frame type",
      type: FeatureType.Select,
      value: "",
      select_option: [{
        display_name: "Absolute",
        value: "ABSOLUTE",
        value_name: "ABSOLUTE"
      },
      {
        display_name: "Instrinsic",
        value: "INSTRINSIC",
        value_name: "INSTRINSIC"
      },
      {
        display_name: "Relative",
        value: "RELATIVE",
        value_name: "RELATIVE"
      }
    ]
    },
    /* referencePt_cardinal_direction after selecting frametype "Absolute" */
    "referencePt_cardinal_direction": {
      display_name: "referencePt cardinal direction",
      type: FeatureType.Select,
      value: "",
      select_option: [{
        display_name: "Above",
        value: "ABOVE",
        value_name: "ABOVE"
      },
      {
        display_name: "On",
        value: "ON",
        value_name: "ON"
      },
      {
        display_name: " In Front Of",
        value: "IN FRONT OF",
        value_name: "IN FRONT OF"
      },
      {
        display_name: "In The Front Of",
        value: "IN THE FRONT OF",
        value_name: "IN THE FRONT OF"
      },

      {
        display_name: "Behind",
        value: "BEHIND",
        value_name: "BEHIND"
      },
      {
        display_name: "Below",
        value: "BELOW",
        value_name: "BELOW"
      },
      {
        display_name: "Under",
        value: "UNDER",
        value_name: "UNDER"
      },
      {
        display_name: "Over",
        value: "OVER",
        value_name: "OVER"
      },
      {
        display_name: "Outside",
        value: "OUTSIDE",
        value_name: "OUTSIDE"
      },
      {
        display_name: "Inside",
        value: "INSIDE",
        value_name: "INSIDE"
      },
      {
        display_name: "Between",
        value: "BETWEEN",
        value_name: "BETWEEN"
      },        
      {
        display_name: "Beside",
        value: "BESIDE",
        value_name: "BESIDE"
      },

      {
        display_name: "Next To",
        value: "NEXT TO",
        value_name: "NEXT TO"
      },
      {
        display_name: "Before",
        value: "BEFORE",
        value_name: "BEFORE"
      },
      {
        display_name: "North",
        value: "NORTH",
        value_name: "NORTH"
      },
      {
        display_name: "South",
        value: "SOUTH",
        value_name: "SOUTH"
      },        
      {
        display_name: "West",
        value: "WEST",
        value_name: "WEST"
      },        
      {
        display_name: "East",
        value: "EAST",
        value_name: "EAST"
      },
      {
        display_name: "Northeast",
        value: "NORTHEAST",
        value_name: "NORTHEAST"
      },
      {
        display_name: "Northwest",
        value: "NORTHWEST",
        value_name: "NORTHWEST"
      },
      {
        display_name: "Southeast",
        value: "SOUTHEAST",
        value_name: "SOUTHEAST"
      },
      {
        display_name: "Southwest",
        value: "SOUTHWEST",
        value_name: "SOUTHWEST"
      },
      {
        display_name: "Right",
        value: "RIGHT",
        value_name: "RIGHT"
      },
      {
        display_name: "Left",
        value: "LEFT",
        value_name: "LEFT"
      },
      {
        display_name: "Opposite",
        value: "OPPOSITE",
        value_name: "OPPOSITE"
      },
      {
        display_name: "At",
        value: "AT",
        value_name: "AT"
      },
      {
        display_name: "In",
        value: "IN",
        value_name: "IN"
      }       
     ]
  },
    /* referencePt_ground_entity after selecting frametype "Intrinsic" */
    "referencePt_ground_entity": {
      display_name: "referencePt ground entity",
      /*refer to (spatial)entity tag*/
      type: FeatureType.Reference,      
      reference_option: ["org.texttechnologylab.annotation.semaf.isospace.SpatialEntity"],
      value: "null",
    },

    /* referencePt_viewer_entity after selecting frametype "Reletive". A problem, I refer to Table 15, p33 Reletive: referencePt=VIEWER or Tag ID Specifying the view point */
    "referencePt_viewer_entity": {     
      display_name: "referencePt viewer entity",
      type: FeatureType.Select,
      value: "",
      select_option: [{
        display_name: "Viewer",
        value: "VIEWER",
        value_name: "VIEWER"
      },
      {
        display_name: "Tag",
        value: "TAG",
        value_name: "TAG"
      }
    ]
    },
    "referencePt_viewer_entity_Specifying_Tag": {     
      display_name: "Specifying Tag",
     /*refer to (spatial)entity tag*/
     type: FeatureType.Reference,      
     reference_option: ["org.texttechnologylab.annotation.semaf.isospace.SpatialEntity"],
     value: "null"      
    },
    "projective": {     
      display_name: "Projective",
      type: FeatureType.Select,
      value: "Projective",
      select_option: [{
        display_name: "True",
        value: true,
        value_name: "TRUE"
      },
      {
        display_name: "False",
        value: false,
        value_name: "FALSE"
      }
      ]     
    },

    }
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
  value: boolean | string | number | number[];

  /** Options for the Select should be Empty if type is not Select */
  select_option?: SelectOption[];

  /** Which Type is a valid reference [] or leaving it empty means all 
   * Should be empty if not FeatureType.Reference 
   * Example: ['org.texttechnologylab.annotation.semaf.isospace.OLink']
  */
  reference_option?: String[];


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