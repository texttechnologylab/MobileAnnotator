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
  /*COMPLETE spatial entity 'non-consuming tag'*/
  {
    rgb: 'rgb(242,187,5)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.SpatialEntity',
    name: 'Spatial Entity',
    css_class: 'I-Spatial-Entity',
    has_shapenet: true,
    features: {
      "spatial_entitiy_type": {
        display_name: "Type(req)",
        type: FeatureType.Select,
        value: "Type(req)",
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
        display_name: "Form(req)",
        type: FeatureType.Select,
        value: "form",
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
      "cardinality": {
        display_name: 'Cardinality',
        type: FeatureType.Text,
        value: [],
        /*only number allowed*/
      },
      "countable": {
        display_name: "Countable(req)",
        type: FeatureType.Select,
        value: 'countable',
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
      "comment": {
        display_name: "Comment",
        type: FeatureType.Text,
        value: ""
      },     
    }
  },
  /*place complete*/
  {
    rgb: 'rgb(177,89,40)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Place',
    name: 'Place',
    css_class: 'I-Place',
    has_shapenet: true,
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
        display_name: "Type(req)",
        type: FeatureType.Select,
        value: "type",
        select_option: [{
          display_name: "Water",
          value: "WATER",
          value_name: "WATER"
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
        {
          display_name: "MTN",
          value: "MTN",
          value_name: "MTN"
        },
        {
          display_name: "MTS",
          value: "MTS",
          value_name: "MTS"
        },
        {
          display_name: "PostalCode",
          value: "POSTALCODE",
          value_name: "POSTALCODE"
        }, 
        {
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
      "continent": {
        display_name: "Continent",
        type: FeatureType.Select,
        value: "",
        select_option: [{
          display_name: "AF",
          value: "AF",
          value_name: "AF"
        },
        {
          display_name: "AN",
          value: "AN",
          value_name: "AN"
        },
        {
          display_name: "AI",
          value: "AI",
          value_name: "AI"
        },
        {
          display_name: "AU",
          value: "AU",
          value_name: "AU"
        },
        {
          display_name: "GO",
          value: "GO",
          value_name: "GO"
        },  {
          display_name: "GO",
          value: "GO",
          value_name: "GO"
        },  {
          display_name: "LA",
          value: "LA",
          value_name: "LA"
        },  {
          display_name: "NA",
          value: "NA",
          value_name: "NA"
        },
        {
          display_name: "PA",
          value: "PA",
          value_name: "PA"
        },  {
          display_name: "SA",
          value: "SA",
          value_name: "SA"
        }
        ]
      },
      "country": {
        display_name: "Country",
        type: FeatureType.Text,
        value: ""
      },
      "state": {
        display_name: "State",
        type: FeatureType.Text,
        value: ""
      },

      "county": {
        display_name: "County",
        type: FeatureType.Text,
        value: ""
      },
      "ctv": {
        display_name: "CTV",
        type: FeatureType.Select,
        value: "",
        select_option: [{
          display_name: "City",
          value: "CITY",
          value_name: "CITY"
        },
        {
          display_name: "Town",
          value: "TOWN",
          value_name: "TOWN"
        },
        {
          display_name: "Village",
          value: "VILLAGE",
          value_name: "VILLAGE"
        },
        ]
      },
      "gazref": {
        display_name: "Gazref",
        type: FeatureType.Text,
        value: ""
      },
      "lat": {
        display_name: 'Latitude',
        type: FeatureType.Text,
        value: "",
      },
      "long": {
        display_name: 'Longitude',
        type: FeatureType.Text,
        value: "",
      },
      "elevation": {
        display_name: 'Elevation',
        type: FeatureType.Reference,
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Measure"],
        value: "null",
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
    }
  },  
  /*nonmotion event<-->event path  */
  {
    rgb: 'rgb(218,247,220)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.EventPath',
    name: 'Event-Path',
    css_class: 'I-eventpath',
    has_shapenet: true,
    features: {
      "trigger": {
        display_name: "TRIGGER",
        type: FeatureType.Reference,
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Motion"],
        value: ""      
      },
      'startID': {
        display_name: 'Start',
        type: FeatureType.Reference,
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.SpatialEntity"],
        value: "null",        
      },
      'endID': {
        display_name: 'End',
        type: FeatureType.Reference,
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.SpatialEntity"],
        value: "null",
      },
      'midID_array': {/*Should add a list of midpoint locations*/
        display_name: 'Mids',
        type: FeatureType.ReferenceMulti,
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Place"],
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
      'long': {
        display_name: 'Longitude',
        type: FeatureType.Text,
        value: "",
      },
      'lat': {
        display_name: 'Latitude',
        type: FeatureType.Text,
        value: "",
      }, 
       "elevation": {/*option attribute*/
        display_name: "elevation",
        type: FeatureType.Reference,
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Measure"],
        value: ""
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
  /*path complete */
  {
    rgb: 'rgb(68,207,108)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Path',
    name: 'Path',
    css_class: 'I-Path',
    has_shapenet: true,
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
      'comment': {
        display_name: 'Comment',
        type: FeatureType.Text,
        value: "",
      },   
      'beginID': {
        display_name: 'Start',
        type: FeatureType.Reference,
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.SpatialEntity"],
        value: "null",        
      },
      'endID': {
        display_name: 'End',
        type: FeatureType.Reference,
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.SpatialEntity"],
        value: "null",
      },
      'midID_array': {/*Should add a list of midpoint locations*/
        display_name: 'Mids',
        type: FeatureType.ReferenceMulti,
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Place"],
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
        type: FeatureType.Reference,
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Measure"],
        value: ""
      },
      'mod': {/*a spatially relevant modifier*/
        display_name: 'mod',
        type: FeatureType.Text,
        value: "",
      },
      "gazref": {
        display_name: "Gazref",
        type: FeatureType.Text,
        value: ""
      },
      'lat': {
        display_name: 'Latitude',
        type: FeatureType.Text,
        value: "",
      },
      'long': {
        display_name: 'Longitude',
        type: FeatureType.Text,
        value: "",
      },
      
    }
  },
  /*event complete*/
  {
    rgb: 'rgb(28,202,216)',
    type: 'org.texttechnologylab.annotation.semaf.isobase.Event',
    name: 'Event',
    css_class: 'I-Event',
    has_shapenet: true,
    features: {
      'mod': {/*a spatially relevant modifier*/
        display_name: 'mod',
        type: FeatureType.Text,
        value: "",
      },
      "elevation": {/*option attribute*/
        display_name: "Elevation",
        type: FeatureType.Reference,
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Measure"],
        value: ""
      },
      'comment': {
        display_name: 'Comment',
        type: FeatureType.Text,
        value: "",
      },
      'long': {
        display_name: 'Longitude',
        type: FeatureType.Text,
        value: "",
      },
      'lat': {
        display_name: 'Latitude',
        type: FeatureType.Text,
        value: "",
      }
    }
  },
  /*motion complete*/
  {
    rgb: 'rgb(252,68,15)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Motion',
    name: 'Motion',
    css_class: 'I-Motion',
    has_shapenet: true,
    features: {
      "motion_type": {
        display_name: "Montion type(req)",
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
      "manner": {
        display_name: "MOTION_MANNER",
        type: FeatureType.Reference,
        reference_option: ["org.texttechnologylab.annotation.semaf.isobase.Entity"],        
        value: ""
      },

      "motion_goal": {
        display_name: "MOTION_GOAL",
        type: FeatureType.Reference,
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.SpatialEntity"],
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
  /*measure complete*/
  {
    rgb: 'rgb(187,172,193)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.Measure',
    name: 'Measure',
    css_class: 'I-Measure',
    has_shapenet: true,
    features: {      
      "value": {
        display_name: 'Value(req)',
        type: FeatureType.Text,
        value: "",
      },     
       "unit": {
        display_name: 'Unit',
        type: FeatureType.Text,
        value: "",
      },
      "mod": {
        display_name: 'Mod',
        type: FeatureType.Text,
        value: "",
      },
      "comment": {
        display_name: 'Comment',
        type: FeatureType.Text,
        value: "",
      },

    }
  },
  /*spatial signal<-->sRelation complete */
  {
    rgb: 'rgb(27,153,139)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.SRelation',
    name: 'sRelation',
    css_class: 'I-sRelation',
    has_shapenet: true,
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
      "relation_type": {
        display_name: "Type(req)",
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
  /*motion signal<-->mRelation complete */
  {
    rgb: 'rgb(234,215,219)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.MRelation',
    name: 'mRelation',
    css_class: 'I-mRelation',
    has_shapenet: true,
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
      }
    }
  }
];

  /*spatial relationships class*/

export const defaultLinkClasses: IAnnotationClass[] = [
  /*QS link complete*/
  {      
    rgb: 'rgb(60,150,204)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.QsLink',
    name: 'QSLink',
    css_class: 'I-QsLink',
    has_shapenet: false,
    features: {
      "trigger": {
        display_name: "Trigger",
        /*refer to spatial signal*/
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.SRelation"],
        value: "null",
      },      
      "figure": {
        display_name: "Figure(req)",
        type: FeatureType.Reference,      
        reference_option: [],
        value: "null",
      },      
      "ground": {
        display_name: "Ground(req)",              
        type: FeatureType.Reference,      
        reference_option: [],
        value: "null",
      },
      /** 
      "trajector": {
        display_name: "Trajector",
       
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Location","org.texttechnologylab.annotation.semaf.isospace.SpatialEntity","org.texttechnologylab.annotation.semaf.isobase.Event"],
        value: "null",
      },
      "landmark": {
        display_name: "Landmark",
       
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Location","org.texttechnologylab.annotation.semaf.isospace.SpatialEntity","org.texttechnologylab.annotation.semaf.isobase.Event"],
        value: "null",
      },**/
      "rel_type": {
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
  /*mlink complete*/
  {     
    rgb: 'rgb(100,100,100)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.MLink',
    /*type: 'org.texttechnologylab.annotation.semaf.isospace.MLink',*/
    name: 'MLink',
    css_class: 'I-MLink',
    has_shapenet: false,
    features: {
      'comment': {
        display_name: 'Comment',
        type: FeatureType.Text,
        value: "",
      },  
      "trigger": {
        display_name: "Trigger",
        /*refer to spatial signal*/
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isobase.Entity"],
        value: "null",
      },      
      "figure": {
        display_name: "Figure(req)",
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isobase.Entity"],
        value: "null",
      },      
      "ground": {
        display_name: "Ground(req)",              
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isobase.Entity"],
        value: "null",
      },
      "end_point1": {
        display_name: "endpoint1",      
         type: FeatureType.Reference,      
         reference_option: ["org.texttechnologylab.annotation.semaf.isobase.Entity"],
         value: "null",
      },
      "end_point2": {
        display_name: "endpoint2",      
         type: FeatureType.Reference,      
         reference_option: ["org.texttechnologylab.annotation.semaf.isobase.Entity"],
         value: "null",
      },
      "val": {
        display_name: "Val",      
         type: FeatureType.Reference,      
         reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Measure"],
         value: "null",
      },
      "bounds_array": {
        display_name: "Bounds",
         type: FeatureType.ReferenceMulti,      
         reference_option: ["org.texttechnologylab.annotation.semaf.isobase.Entity"],
         value: "null",
      },
      "rel_type": {
        display_name: "relation type",
        type: FeatureType.Select,
        value: "",
        select_option: [{
          display_name: "Coreference",
          value: "COREFERENCE",
          value_name: "COREFERENCE"
        },
        {
          display_name: "Subcoreference",
          value: "SUBCOREFFERENCE",
          value_name: "SUBCOREFFERENCE"
        },
        {
          display_name: " In Front Of",
          value: "IN FRONT OF",
          value_name: "IN FRONT OF"
        },]}
    }
  },
  /*metalink complete*/
  {     
    rgb: 'rgb(204,60,100)',
    type: 'org.texttechnologylab.annotation.semaf.meta.MetaLink',
    name: 'MetaLink',
    css_class: 'I-MetaLink',
    has_shapenet: false,
    features: {
      'comment': {
        display_name: 'Comment',
        type: FeatureType.Text,
        value: "",
      },  
      "trigger": {
        display_name: "Trigger",
        /*refer to spatial signal*/
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isobase.Entity"],
        value: "null",
      },      
      "figure": {
        display_name: "Figure(req)",
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isobase.Entity"],
        value: "null",
      },      
      "ground": {
        display_name: "Ground(req)",              
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isobase.Entity"],
        value: "null",
      },
      
  
      "rel_type": {
        display_name: "relation type",
        type: FeatureType.Select,
        value: "",
        select_option: [{
          display_name: "Coreference",
          value: "COREFERENCE",
          value_name: "COREFERENCE"
        },
        {
          display_name: "Subcoreference",
          value: "SUBCOREFFERENCE",
          value_name: "SUBCOREFFERENCE"
        },
        {
          display_name: " In Front Of",
          value: "IN FRONT OF",
          value_name: "IN FRONT OF"
        },]}
    }
  },
  /*srlink complete but what to annotate?*/
  {     
    rgb: 'rgb(50,50,123)',
    type: 'org.texttechnologylab.annotation.semaf.semafsr.SrLink',
    name: 'SrLink',
    css_class: 'I-SrLink',
    has_shapenet: false,
    features: {
      'comment': {
        display_name: 'Comment',
        type: FeatureType.Text,
        value: "",
      },  
      "trigger": {
        display_name: "Trigger",
        /*refer to spatial signal*/
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isobase.Entity"],
        value: "null",
      },      
      "figure": {
        display_name: "Figure(req)",
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isobase.Entity"],
        value: "null",
      },      
      "ground": {
        display_name: "Ground(req)",              
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isobase.Entity"],
        value: "null",
      },
      "rel_type": {
        display_name: "relation type",
        type: FeatureType.Select,
        value: "",
        select_option: [{
          display_name: "Coreference",
          value: "COREFERENCE",
          value_name: "COREFERENCE"
        },
        {
          display_name: "Subcoreference",
          value: "SUBCOREFFERENCE",
          value_name: "SUBCOREFFERENCE"
        },
        {
          display_name: " In Front Of",
          value: "IN FRONT OF",
          value_name: "IN FRONT OF"
        },]}
    }
  },
  /* measure link not exist
  {
    rgb: 'rgb(204,204,204)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.MeasureLink',
    name: 'Measure Link',
    css_class: 'I-MeasureLink',
    has_shapenet: false,
    features: {
      "trajector": {
        display_name: "Trajector",
    
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Location","org.texttechnologylab.annotation.semaf.isospace.SpatialEntity","org.texttechnologylab.annotation.semaf.isobase.Event"],
        value: "null",
      },
      "landmark": {
        display_name: "Landmark",
       
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Location","org.texttechnologylab.annotation.semaf.isospace.SpatialEntity","org.texttechnologylab.annotation.semaf.isobase.Event"],
        value: "null",
      },
      
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
        ]},
     
        "val": {
          display_name: "Val",
          type: FeatureType.Select,
          value: "",
          select_option: [{
            display_name: "Near",
            value: "NEAR",
            value_name: "NEAR"
          },
          {
            display_name: "Far",
            value: "FAR",
            value_name: "FAR"
          },
          {
            display_name: "Shorter",
            value: "SHORTER",
            value_name: "SHORTER"
          },
          {
            display_name: "Taller",
            value: "TALLER",
            value_name: "TALLER"
          },
          {
            display_name: "Others Refer to Text",
            value: "OTHERS",
            value_name: "OTHERS"
          },
        ]},
        "Val_refer_to_Text": {
          display_name: "Val refer to Text",
        
          type: FeatureType.Reference,      
          reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Measure"],
          value: "null",
        },
        "endPoint1": {
          display_name: "endPoint1",
      
          type: FeatureType.Reference,      
          reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Location","org.texttechnologylab.annotation.semaf.isospace.SpatialEntity","org.texttechnologylab.annotation.semaf.isobase.Event"],
          value: "null",
        },
        "endPoint2": {
          display_name: "endPoint2",
         
          type: FeatureType.Reference,      
          reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Location","org.texttechnologylab.annotation.semaf.isospace.SpatialEntity","org.texttechnologylab.annotation.semaf.isobase.Event"],
          value: "null",
        },
    }
  },*/
   /* move link complete */
  {
    rgb: 'rgb(30,120,10)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.MoveLink',
    name: 'Move Link',
    css_class: 'I-MoveLink',
    has_shapenet: false,
    features: {
      'comment': {
        display_name: 'Comment',
        type: FeatureType.Text,
        value: "",
      },   
      "figure": {
        display_name: "Figure(req)",
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isobase.Entity"],
        value: "null",
      }, 
      "ground": {
        display_name: "Ground(req)",              
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isobase.Entity"],
        value: "null",
      }, 
      "trigger": {
        display_name: "Trigger",
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isobase.Entity"],
        /*no restrict to select */
        value: "null",
      },      
      "rel_type": {
        display_name: "Relation Type(req)",
        type: FeatureType.Select,
        value: "",
        select_option: [{
          display_name: "traverse",
          value: "TRAVERSE",
          value_name: "TRAVERSE"
        }]},
        "source": {
          display_name: "Source",
          type: FeatureType.Reference,      
          reference_option: ["org.texttechnologylab.annotation.semaf.isobase.Entity"],
          /*no restrict to select */
          value: "null",
        }, 
        "goal": {
          display_name: "Goal",
          type: FeatureType.Reference,      
          reference_option: ["org.texttechnologylab.annotation.semaf.isobase.Entity"],
          /*no restrict to select */
          value: "null",
        }, 
        'mid_point_array': {
          display_name: 'Mids',
          type: FeatureType.ReferenceMulti,
          reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Place"],
          value: "null",
        },
        /*"mover": {
          display_name: "Mover",              
          type: FeatureType.Reference,      
          reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Location","org.texttechnologylab.annotation.semaf.isospace.SpatialEntity","org.texttechnologylab.annotation.semaf.isobase.Event"],
          value: "null",
        }, */         
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
          }]},

        "path_id": {
          display_name: "Path ID",              
          type: FeatureType.Reference,      
          reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Path"],
          value: "null",
        },
        "adjunct_id": {
          display_name: "Adjunct ID",              
          type: FeatureType.Reference,      
          reference_option: ["org.texttechnologylab.annotation.semaf.isospace.SpatialSignal"],
          value: "null",
        },
        "motionsignal_id": {
          display_name: "ground",              
          type: FeatureType.Reference,      
          reference_option: ["org.texttechnologylab.annotation.semaf.isospace.MotionSignal"],
          value: "null",
    

       
            
    }
    
  },
},
   /*orientation link complete  */
  {
    
    rgb: 'rgb(90,40,10)',
    type: 'org.texttechnologylab.annotation.semaf.isospace.OLink',
    name: 'OLink',
    css_class: 'I-OLink',
    has_shapenet: false,
    features: {
      'comment': {
        display_name: 'Comment',
        type: FeatureType.Text,
        value: "",
      },   
      "figure": {
        display_name: "Figure(req)",
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isobase.Entity"],
        value: "null",
      }, 
      "ground": {
        display_name: "Ground(req)",              
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isobase.Entity"],
        value: "null",
      }, 
      "trigger": {
        display_name: "Trigger",
        /*refer to spatial signal*/
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isobase.Entity"],
        value: "null",
      },
      /*relation type*/
      "rel_type": {
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
      /* frame type */
      "frame_type": {     
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
       /* 
      "trajector": {
        display_name: "Trajector",
        
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Location","org.texttechnologylab.annotation.semaf.isospace.SpatialEntity","org.texttechnologylab.annotation.semaf.isobase.Event"],
        value: "null",
      },
      "landmark": {
        display_name: "Landmark",
       
        type: FeatureType.Reference,      
        reference_option: ["org.texttechnologylab.annotation.semaf.isospace.Location","org.texttechnologylab.annotation.semaf.isospace.SpatialEntity","org.texttechnologylab.annotation.semaf.isobase.Event"],
        value: "null",
      },
      */
   
    /* referencePt_cardinal_direction after selecting frametype "Absolute" */
    "reference_pt_str": {
      display_name: "reference Pt str",
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
      },
      {display_name: "Viewer",
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
    /* referencePt_ground_entity after selecting frametype "Intrinsic" */
    "reference_pt": {
      display_name: "referencePt ground entity",     
      type: FeatureType.Reference,      
      reference_option: [],
      value: "null",
    }
    }
  }
]


import {allowed_uima_types} from 'src/app/components/tools/sem-af/uima.types'

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
  reference_option?: allowed_uima_types[];


  /** There are Attributes like DCL where it can only be true or false, 
   * null or empty is not option for these set this to true (only matters for Select)*/
  not_nullable?: boolean;
}



export interface IAnnotationClass {
  name: string;
  /** should be the same as in Uima, a list of most can be found in ./uima.json */
  type: allowed_uima_types;
  /** Can be any css color, i think */
  rgb: string;
  css_class: string;
  has_shapenet: boolean
  /** Should only contain features which are editable by the user like a comment for example  */
  features: { [name: string]: Feature };
}
/*location NOT EXIST 
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
        select_option: [{
          display_name: "NOM",
          value: "NOM",
          value_name: "NOM"
        },
        {
          display_name: "NAM",
          value: "NAM",
          value_name: "NAM"
        }
        ]
      },
      "dcl": {
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
      "elevation": {
        display_name: "elevation",
        type: FeatureType.Text,
        value: ""
      }
    }
  },*/