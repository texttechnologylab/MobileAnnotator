 export const data = {
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.APPOS": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.orientation.type.Infront": {
    "parent": "org.texttechnologylab.annotation.OrientationEdge",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "source",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "target",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "edgetype",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.Game": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.tweet.POS_NNV": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_NOUN",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.PRT": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.Chunk",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.Chunk",
        "name": "chunkValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Sentence": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Sentence",
        "name": "id",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.TBODY": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.iaa.AgreementContainer": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.iaa.AgreementContainer",
        "name": "overallAgreementValue",
        "range": "uima.cas.Double"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.iaa.AgreementContainer",
        "name": "agreementMeasure",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.iaa.AgreementContainer",
        "name": "categoryNames",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.iaa.AgreementContainer",
        "name": "categoryAgreementValues",
        "range": "uima.cas.DoubleArray"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.iaa.AgreementContainer",
        "name": "categoryCounts",
        "range": "uima.cas.LongArray"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.iaa.AgreementContainer",
        "name": "categorySpecificAgreementValues",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Time": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.structure.type.Field": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.structure.type.Field",
        "name": "name",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.hucompute.textimager.uima.type.wikidata.WikiDataHyponym": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.hucompute.textimager.uima.type.wikidata.WikiDataHyponym",
        "name": "id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.hucompute.textimager.uima.type.wikidata.WikiDataHyponym",
        "name": "typ",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.hucompute.textimager.uima.type.wikidata.WikiDataHyponym",
        "name": "depth",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.semantics.type.SemPred": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.semantics.type.SemPred",
        "name": "arguments",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.semantics.type.SemArgLink[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.semantics.type.SemPred",
        "name": "category",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.NamedEntity": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.Orientation": {
    "parent": "org.texttechnologylab.annotation.type.AnnotationNode",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.Product": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Society": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.SQ": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Location_Place": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isotimeml.time.Date": {
    "parent": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "mod",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_id",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "position",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "rotation",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec4"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "scale",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature_array",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
        "name": "function_in_document",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
        "name": "temporal_function",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
        "name": "anchor_time_id",
        "range": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Other": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.ArgTextSegment": {
    "parent": "org.texttechnologylab.annotation.type.ArgNode",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "graphId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "nodeId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "text",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "x",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "y",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "reference",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "begin",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "end",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "color",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity": {
    "parent": "org.texttechnologylab.annotation.semaf.isobase.Entity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "mod",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_id",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "position",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "rotation",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec4"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "scale",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature_array",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "spatial_entitiy_type",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "dimensionality",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "form",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "dcl",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "domain",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "lat",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "long",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "elevation",
        "range": "org.texttechnologylab.annotation.semaf.isospace.Measure"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "countable",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "gquant",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "scopes",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "scopes_array",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "cardinality",
        "range": "uima.cas.Double"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.tweet.AT": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.O",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.V": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Fungi": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isospace.Motion": {
    "parent": "org.texttechnologylab.annotation.semaf.isobase.Event",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "mod",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_id",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "position",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "rotation",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec4"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "scale",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature_array",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "event_class",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "polarity",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "mood",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "pos",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "tense",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "aspect",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "vform",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "domain",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "lat",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "long",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "elevation",
        "range": "org.texttechnologylab.annotation.semaf.isospace.Measure"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "countable",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "gquant",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "scopes",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "scopes_array",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "event_frame",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "event_type",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.Motion",
        "name": "motion_type",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.Motion",
        "name": "motion_class",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.Motion",
        "name": "motion_sense",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.Motion",
        "name": "manner",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.Motion",
        "name": "motion_goal",
        "range": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.tweet.NPV": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.N",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.tweet.POS_HASH": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_X",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.OrgDesc": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.N": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.O": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Edge": {
    "parent": "org.texttechnologylab.annotation.type.GraphBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "source",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "target",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "edgetype",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.EM": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isospace.Measure": {
    "parent": "org.texttechnologylab.annotation.semaf.isobase.Signal",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "mod",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_id",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "position",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "rotation",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec4"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "scale",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature_array",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.Measure",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.Measure",
        "name": "unit",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.POBJ": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Div": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Div",
        "name": "divType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Div",
        "name": "id",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.PURPCL": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.Law": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.Room.TimeChain": {
    "parent": "uima.cas.AnnotationBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.Room.TimeChain",
        "name": "next",
        "range": "org.texttechnologylab.annotation.Room.TimeChain"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.Room.TimeChain",
        "name": "prev",
        "range": "org.texttechnologylab.annotation.Room.TimeChain"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.ADVP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.ArticleInfo": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.ArticleInfo",
        "name": "Authors",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.ArticleInfo",
        "name": "Revisions",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.ArticleInfo",
        "name": "FirstAppearance",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.ArticleInfo",
        "name": "LastAppearance",
        "range": "uima.cas.Long"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.semantics.type.SemanticField": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.semantics.type.SemanticField",
        "name": "value",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.TABLE": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.FRAG": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.Norp": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.CompoundPart": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Split",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Split",
        "name": "splits",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Split[]"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.semantics.type.SemArgLink": {
    "parent": "uima.cas.TOP",
    "features": [
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.semantics.type.SemArgLink",
        "name": "role",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.semantics.type.SemArgLink",
        "name": "target",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.semantics.type.SemArg"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.MARK": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.transform.type.SofaChangeAnnotation": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.transform.type.SofaChangeAnnotation",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.transform.type.SofaChangeAnnotation",
        "name": "operation",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.transform.type.SofaChangeAnnotation",
        "name": "reason",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Habitat": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.unihd.dbs.uima.types.heideltime.Timex3Interval": {
    "parent": "de.unihd.dbs.uima.types.heideltime.Timex3",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "filename",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "sentId",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "firstTokId",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "allTokIds",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "timexId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "timexInstance",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "timexType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "timexValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "foundByRule",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "timexQuant",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "timexFreq",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "timexMod",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "emptyValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3Interval",
        "name": "TimexValueEB",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3Interval",
        "name": "TimexValueLE",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3Interval",
        "name": "TimexValueEE",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3Interval",
        "name": "TimexValueLB",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3Interval",
        "name": "beginTimex",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3Interval",
        "name": "endTimex",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.SEMICOLON": {
    "parent": "org.apache.uima.ruta.type.PM",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.PropTextNode": {
    "parent": "org.texttechnologylab.annotation.type.PropNode",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "graphId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "nodeId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "lemma",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "pos",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "text",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "x",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "y",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "reference",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "x2",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "y2",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "begin",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "end",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "color",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Group_Collection": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.Coreference": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.Coreference",
        "name": "link",
        "range": "org.texttechnologylab.annotation.Coreference"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.Cardinal": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.NPADVMOD": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.Room.Object": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.Room.Object",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.Room.Object",
        "name": "fatherObject",
        "range": "org.texttechnologylab.annotation.Room.Object"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.Room.Object",
        "name": "nextTimeObject",
        "range": "org.texttechnologylab.annotation.Room.Object"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.Room.Object",
        "name": "prevTimeObject",
        "range": "org.texttechnologylab.annotation.Room.Object"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.Room.Object",
        "name": "timeReference",
        "range": "org.texttechnologylab.annotation.Room.TimeChain"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.Room.Object",
        "name": "shapeNetID",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.Room.Object",
        "name": "scale",
        "range": "uima.cas.Double"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.Room.Object",
        "name": "location",
        "range": "org.texttechnologylab.annotation.Vector"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.Room.Object",
        "name": "rotation",
        "range": "org.texttechnologylab.annotation.Vector"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.Room.Object",
        "name": "objectFeature",
        "range": "org.texttechnologylab.annotation.Room.ObjectAttribute[]"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Body_Corpus": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Quantity_Amount": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.semantics.type.SemArg": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.Date": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.H6": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.ADJC": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.Chunk",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.Chunk",
        "name": "chunkValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.H5": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.H4": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.H3": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Node": {
    "parent": "org.texttechnologylab.annotation.type.GraphBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.DebugRuleElementMatches": {
    "parent": "uima.cas.TOP",
    "features": [
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.DebugRuleElementMatches",
        "name": "matches",
        "range": "org.apache.uima.ruta.type.DebugRuleElementMatch[]"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugRuleElementMatches",
        "name": "element",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugRuleElementMatches",
        "name": "ruleAnchor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.DebugRuleElementMatches",
        "name": "inlinedActionBlocks",
        "range": "org.apache.uima.ruta.type.DebugInlinedBlock[]"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.FalsePositive": {
    "parent": "org.apache.uima.ruta.type.EvalAnnotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.EvalAnnotation",
        "name": "original",
        "range": "uima.tcas.Annotation"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.BIG": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_CONJ": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Feeling_Emotion": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.NUMBER": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.H2": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.H1": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.VC": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.Chunk",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.Chunk",
        "name": "chunkValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.MARKUP": {
    "parent": "org.apache.uima.ruta.type.ALL",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.attribution.type.Smaler": {
    "parent": "org.texttechnologylab.annotation.Attribution",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.context.type.LocationContext": {
    "parent": "org.texttechnologylab.annotation.node.type.Context",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.Context",
        "name": "ReferencedID",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.Context",
        "name": "displayName",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.Context",
        "name": "wikiDataID",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.Context",
        "name": "image",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.context.type.LocationContext",
        "name": "markerPoint",
        "range": "uima.cas.FloatArray"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.context.type.LocationContext",
        "name": "geoJson",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.context.type.LocationContext",
        "name": "latLngs",
        "range": "uima.cas.FloatArray"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.context.type.LocationContext",
        "name": "contextInf",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.context.type.LocationContext",
        "name": "country",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.context.type.LocationContext",
        "name": "numberOfCitizen",
        "range": "uima.cas.Double"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.context.type.LocationContext",
        "name": "geoNamesID",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.context.type.LocationContext",
        "name": "areaSize",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.ABBREV": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.VP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.TextTechnologyKnowledgeEdge": {
    "parent": "org.texttechnologylab.annotation.type.Edge",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "source",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "target",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "edgetype",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TextTechnologyKnowledgeEdge",
        "name": "linktype",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isotimeml.TLink": {
    "parent": "org.texttechnologylab.annotation.semaf.isobase.Link",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "figure",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "ground",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "trigger",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "rel_type",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.TLink",
        "name": "syntax",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.TLink",
        "name": "origin",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.Vector": {
    "parent": "uima.cas.AnnotationBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.Vector",
        "name": "x",
        "range": "uima.cas.Double"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.Vector",
        "name": "y",
        "range": "uima.cas.Double"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.Vector",
        "name": "z",
        "range": "uima.cas.Double"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.Vector",
        "name": "w",
        "range": "uima.cas.Double"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Morphology": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.ArgTypeAnd": {
    "parent": "org.texttechnologylab.annotation.type.ArgType",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "graphId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "nodeId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "text",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "x",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "y",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "reference",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "begin",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "end",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "color",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.ArgType",
        "name": "conclusion",
        "range": "org.texttechnologylab.annotation.type.ArgTextSegment[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgType",
        "name": "mode",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.ArgType",
        "name": "data",
        "range": "org.texttechnologylab.annotation.type.ArgTextSegment[]"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.ArgTypeAnd",
        "name": "data2",
        "range": "org.texttechnologylab.annotation.type.ArgTextSegment[]"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_SCONJ": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Viruses": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Relation": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.sentence.Discourse": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.sentence.Discourse",
        "name": "value",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Person_HumanBeing": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.SBAR": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.dkpro.core.api.xml.type.XmlTextNode": {
    "parent": "org.dkpro.core.api.xml.type.XmlNode",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "org.dkpro.core.api.xml.type.XmlNode",
        "name": "parent",
        "range": "org.dkpro.core.api.xml.type.XmlElement"
      },
      {
        "primitive": true,
        "domain": "org.dkpro.core.api.xml.type.XmlTextNode",
        "name": "text",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.dkpro.core.api.xml.type.XmlTextNode",
        "name": "captured",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.ocr.OCRToken": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token",
        "name": "lemma",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Lemma"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token",
        "name": "stem",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Stem"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token",
        "name": "pos",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token",
        "name": "morph",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.MorphologicalFeatures"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token",
        "name": "id",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token",
        "name": "form",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.TokenForm"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token",
        "name": "order",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.ocr.OCRToken",
        "name": "subTokenList",
        "range": "uima.cas.StringList"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRToken",
        "name": "isWordFromDictionary",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRToken",
        "name": "isWordNormal",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRToken",
        "name": "isWordNumeric",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRToken",
        "name": "containsHyphen",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRToken",
        "name": "suspiciousChars",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.GpeDesc": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isospace.Location": {
    "parent": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "mod",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_id",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "position",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "rotation",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec4"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "scale",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature_array",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "spatial_entitiy_type",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "dimensionality",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "form",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "dcl",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "domain",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "lat",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "long",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "elevation",
        "range": "org.texttechnologylab.annotation.semaf.isospace.Measure"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "countable",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "gquant",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "scopes",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "scopes_array",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "cardinality",
        "range": "uima.cas.Double"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.Location",
        "name": "gazref",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.Chunk": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.Chunk",
        "name": "chunkValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.FacDesc": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.unihd.dbs.uima.types.heideltime.Event": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Event",
        "name": "filename",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Event",
        "name": "sentId",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Event",
        "name": "tokId",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Event",
        "name": "eventId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Event",
        "name": "eventInstanceId",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Event",
        "name": "aspect",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Event",
        "name": "modality",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Event",
        "name": "polarity",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Event",
        "name": "tense",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.unihd.dbs.uima.types.heideltime.Event",
        "name": "token",
        "range": "de.unihd.dbs.uima.types.heideltime.Token"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.Attribution": {
    "parent": "org.texttechnologylab.annotation.type.AnnotationNode",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isospace.OLink": {
    "parent": "org.texttechnologylab.annotation.semaf.isobase.Link",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "figure",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "ground",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "trigger",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "rel_type",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.OLink",
        "name": "projective",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.OLink",
        "name": "frame_type",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.OLink",
        "name": "reference_pt",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.OLink",
        "name": "reference_pt_str",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.COMPLM": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.CONJ": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.sentence.Endmarker": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.sentence.Endmarker",
        "name": "value",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.HTML": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Stem": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Stem",
        "name": "value",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isotimeml.MLink": {
    "parent": "org.texttechnologylab.annotation.semaf.isobase.Link",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "figure",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "ground",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "trigger",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "rel_type",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.MLink",
        "name": "event_id",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Event"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.MLink",
        "name": "related_to_time",
        "range": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3"
      }
    ],
    "primitive": false
  },
  "de.unihd.dbs.uima.types.heideltime.Dct": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Dct",
        "name": "filename",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Dct",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Dct",
        "name": "timexId",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.SINV": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_PRON": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.PropNode": {
    "parent": "org.texttechnologylab.annotation.type.Node",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "graphId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "nodeId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "lemma",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "pos",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "text",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "x",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "y",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "reference",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "x2",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "y2",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "begin",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "end",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "color",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.TimeNode": {
    "parent": "org.texttechnologylab.annotation.type.Node",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TimeNode",
        "name": "xPos",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TimeNode",
        "name": "depth",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TimeNode",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TimeNode",
        "name": "subvalue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TimeNode",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.TimeNode",
        "name": "nodes",
        "range": "uima.cas.FSArray"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.TimeNode",
        "name": "edges",
        "range": "uima.cas.FSArray"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TimeNode",
        "name": "end",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TimeNode",
        "name": "x",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TimeNode",
        "name": "y",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TimeNode",
        "name": "additionalvalue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.DebugBlockApply": {
    "parent": "org.apache.uima.ruta.type.DebugRuleApply",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.ProfiledAnnotation",
        "name": "time",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugScriptApply",
        "name": "element",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugScriptApply",
        "name": "timestamp",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugRuleApply",
        "name": "applied",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugRuleApply",
        "name": "tried",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.DebugRuleApply",
        "name": "rules",
        "range": "org.apache.uima.ruta.type.DebugRuleMatch[]"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugRuleApply",
        "name": "id",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugRuleApply",
        "name": "script",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.DebugBlockApply",
        "name": "innerApply",
        "range": "org.apache.uima.ruta.type.DebugScriptApply[]"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.orientation.type.Above": {
    "parent": "org.texttechnologylab.annotation.OrientationEdge",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "source",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "target",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "edgetype",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.AMOD": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.QuickTreeMultiSpanNode": {
    "parent": "org.texttechnologylab.annotation.type.QuickTreeNode",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.TreeNode",
        "name": "children",
        "range": "org.texttechnologylab.annotation.type.Node[]"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.TreeNode",
        "name": "parent",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TreeAnnotationNode",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TreeAnnotationNode",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Archaea": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.SCRIPT": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.typo.OCR": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.NaturalObject": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.NaturalPhenomenon": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.attribution.type.Louder": {
    "parent": "org.texttechnologylab.annotation.Attribution",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.QUANTMOD": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.score.TextScore": {
    "parent": "uima.cas.AnnotationBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.score.TextScore",
        "name": "elements",
        "range": "org.texttechnologylab.annotation.score.TextScoreEntry[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.score.TextScore",
        "name": "documentURI",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.score.TextScore",
        "name": "documentName",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.AUXPASS": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.node.type.EntityVis": {
    "parent": "org.texttechnologylab.annotation.type.Node",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.EntityVis",
        "name": "geonamesID",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.EntityVis",
        "name": "geoJson",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.EntityVis",
        "name": "displayName",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.EntityVis",
        "name": "ofClass",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.EntityVis",
        "name": "image",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.EntityVis",
        "name": "wikiDataID",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.LST": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Animal_Fauna": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.ContactInfo": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.Statistics": {
    "parent": "uima.cas.TOP",
    "features": [
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.Statistics",
        "name": "name",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.Statistics",
        "name": "total",
        "range": "uima.cas.DoubleArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.Statistics",
        "name": "amount",
        "range": "uima.cas.IntegerArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.Statistics",
        "name": "part",
        "range": "uima.cas.DoubleArray"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.orientation.type.Between": {
    "parent": "org.texttechnologylab.annotation.OrientationEdge",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "source",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "target",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "edgetype",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.DebugScriptApply": {
    "parent": "org.apache.uima.ruta.type.ProfiledAnnotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.ProfiledAnnotation",
        "name": "time",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugScriptApply",
        "name": "element",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugScriptApply",
        "name": "timestamp",
        "range": "uima.cas.Long"
      }
    ],
    "primitive": false
  },
  "de.unihd.dbs.uima.types.heideltime.SourceDocInfo": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.SourceDocInfo",
        "name": "uri",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.SourceDocInfo",
        "name": "offsetInSource",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.NaturalObject": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.AGENT": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.TagsetDescription": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.TagsetDescription",
        "name": "layer",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.TagsetDescription",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.TagsetDescription",
        "name": "tags",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.TagDescription[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.TagsetDescription",
        "name": "componentName",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.TagsetDescription",
        "name": "modelLocation",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.TagsetDescription",
        "name": "modelVariant",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.TagsetDescription",
        "name": "modelLanguage",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.TagsetDescription",
        "name": "modelVersion",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.TagsetDescription",
        "name": "input",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.hucompute.wikidragon.core.nlp.annotation.WikiTextSpan": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.hucompute.wikidragon.core.nlp.annotation.WikiTextSpan",
        "name": "uid",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.Event": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.AnnotationComment": {
    "parent": "uima.cas.AnnotationBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.AnnotationComment",
        "name": "reference",
        "range": "uima.cas.TOP"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AnnotationComment",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AnnotationComment",
        "name": "key",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.WorkOfArt": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token",
        "name": "lemma",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Lemma"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token",
        "name": "stem",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Stem"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token",
        "name": "pos",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token",
        "name": "morph",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.MorphologicalFeatures"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token",
        "name": "id",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token",
        "name": "form",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.TokenForm"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token",
        "name": "order",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.hucompute.wikidragon.core.nlp.annotation.HtmlTag": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.hucompute.wikidragon.core.nlp.annotation.HtmlTag",
        "name": "tag",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.hucompute.wikidragon.core.nlp.annotation.HtmlTag",
        "name": "attr",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.hucompute.wikidragon.core.nlp.annotation.HtmlTag",
        "name": "depth",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.hucompute.wikidragon.core.nlp.annotation.HtmlTag",
        "name": "order",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.WHADVP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.CAP": {
    "parent": "org.apache.uima.ruta.type.W",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Artifact": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.TimeEdge": {
    "parent": "org.texttechnologylab.annotation.type.Edge",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "source",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "target",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "edgetype",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TimeEdge",
        "name": "mode",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.PREDET": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.unihd.dbs.uima.types.heideltime.Sentence": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Sentence",
        "name": "filename",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Sentence",
        "name": "sentenceId",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.I": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Group_Collection": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Weight": {
    "parent": "org.texttechnologylab.annotation.type.Attribute",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Weight",
        "name": "value",
        "range": "uima.cas.Double"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.A": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.B": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.SpellingAnomaly": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.Anomaly",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.Anomaly",
        "name": "description",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.Anomaly",
        "name": "suggestions",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.SuggestedAction[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.Anomaly",
        "name": "category",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isospace.Place": {
    "parent": "org.texttechnologylab.annotation.semaf.isospace.Location",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "mod",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_id",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "position",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "rotation",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec4"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "scale",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature_array",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "spatial_entitiy_type",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "dimensionality",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "form",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "dcl",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "domain",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "lat",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "long",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "elevation",
        "range": "org.texttechnologylab.annotation.semaf.isospace.Measure"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "countable",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "gquant",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "scopes",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "scopes_array",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "cardinality",
        "range": "uima.cas.Double"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.Location",
        "name": "gazref",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.Place",
        "name": "country",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.Place",
        "name": "state",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.Place",
        "name": "ctv",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.Place",
        "name": "continent",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.Place",
        "name": "county",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.PropEdge": {
    "parent": "org.texttechnologylab.annotation.type.Edge",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "source",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "target",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "edgetype",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropEdge",
        "name": "mode",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropEdge",
        "name": "graphSource",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropEdge",
        "name": "graphTarget",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.ACOMP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.LI": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.SPAN": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.ArgTypeOr": {
    "parent": "org.texttechnologylab.annotation.type.ArgType",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "graphId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "nodeId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "text",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "x",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "y",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "reference",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "begin",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "end",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "color",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.ArgType",
        "name": "conclusion",
        "range": "org.texttechnologylab.annotation.type.ArgTextSegment[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgType",
        "name": "mode",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.ArgType",
        "name": "data",
        "range": "org.texttechnologylab.annotation.type.ArgTextSegment[]"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.ArgTypeOr",
        "name": "data2",
        "range": "org.texttechnologylab.annotation.type.ArgTextSegment[]"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.U": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isospace.MRelation": {
    "parent": "org.texttechnologylab.annotation.semaf.isobase.Signal",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "mod",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_id",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "position",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "rotation",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec4"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "scale",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature_array",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.MRelation",
        "name": "value",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isospace.Path": {
    "parent": "org.texttechnologylab.annotation.semaf.isospace.Location",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "mod",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_id",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "position",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "rotation",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec4"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "scale",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature_array",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "spatial_entitiy_type",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "dimensionality",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "form",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "dcl",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "domain",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "lat",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "long",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "elevation",
        "range": "org.texttechnologylab.annotation.semaf.isospace.Measure"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "countable",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "gquant",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "scopes",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "scopes_array",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "cardinality",
        "range": "uima.cas.Double"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.Location",
        "name": "gazref",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.Path",
        "name": "beginID",
        "range": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.Path",
        "name": "endID",
        "range": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.Path",
        "name": "midIDs",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.Path",
        "name": "midID_array",
        "range": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity[]"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.DebugMatchedRuleMatch": {
    "parent": "org.apache.uima.ruta.type.DebugRuleMatch",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.ProfiledAnnotation",
        "name": "time",
        "range": "uima.cas.Long"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.DebugRuleMatch",
        "name": "elements",
        "range": "org.apache.uima.ruta.type.DebugRuleElementMatches[]"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugRuleMatch",
        "name": "matched",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.DebugRuleMatch",
        "name": "delegates",
        "range": "org.apache.uima.ruta.type.DebugScriptApply[]"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.UCP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.BREAK": {
    "parent": "org.apache.uima.ruta.type.WS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.INTJ": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.Line": {
    "parent": "org.apache.uima.ruta.type.AnyLine",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.P": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "de.unihd.dbs.uima.types.heideltime.Token": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Token",
        "name": "filename",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Token",
        "name": "tokenId",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Token",
        "name": "sentId",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Token",
        "name": "pos",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.Plant": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.OrientationEdge": {
    "parent": "org.texttechnologylab.annotation.type.Edge",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "source",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "target",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "edgetype",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.LexicalPhrase": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.LexicalPhrase",
        "name": "text",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.hucompute.textimager.uima.type.Language": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.hucompute.textimager.uima.type.Language",
        "name": "language",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.administration.Recommendation": {
    "parent": "uima.cas.AnnotationBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.administration.Recommendation",
        "name": "reference",
        "range": "uima.tcas.Annotation"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Color": {
    "parent": "org.texttechnologylab.annotation.type.Attribute",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Color",
        "name": "value",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.Room.RoomWall": {
    "parent": "uima.cas.AnnotationBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.Room.RoomWall",
        "name": "vectorlist",
        "range": "org.texttechnologylab.annotation.Vector[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.Room.RoomWall",
        "name": "height",
        "range": "uima.cas.Double"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.Room.RoomWall",
        "name": "feature",
        "range": "org.texttechnologylab.annotation.Room.ObjectAttribute[]"
      }
    ],
    "primitive": false
  },
  "org.dkpro.core.api.xml.type.XmlAttribute": {
    "parent": "uima.cas.TOP",
    "features": [
      {
        "primitive": true,
        "domain": "org.dkpro.core.api.xml.type.XmlAttribute",
        "name": "uri",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.dkpro.core.api.xml.type.XmlAttribute",
        "name": "localName",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.dkpro.core.api.xml.type.XmlAttribute",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.dkpro.core.api.xml.type.XmlAttribute",
        "name": "qName",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.dkpro.core.api.xml.type.XmlAttribute",
        "name": "valueType",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.Organization": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Feeling_Emotion": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Endpoint": {
    "parent": "org.texttechnologylab.annotation.type.GraphBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Endpoint",
        "name": "node",
        "range": "org.texttechnologylab.annotation.type.Node"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isospace.NonMotionEvent": {
    "parent": "org.texttechnologylab.annotation.semaf.isobase.Event",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "mod",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_id",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "position",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "rotation",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec4"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "scale",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature_array",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "event_class",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "polarity",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "mood",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "pos",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "tense",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "aspect",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "vform",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "domain",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "lat",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "long",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "elevation",
        "range": "org.texttechnologylab.annotation.semaf.isospace.Measure"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "countable",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "gquant",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "scopes",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "scopes_array",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "event_frame",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "event_type",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.semantics.type.WordSense": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.semantics.type.WordSense",
        "name": "value",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.PARTMOD": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.NUM": {
    "parent": "org.apache.uima.ruta.type.ANY",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.RutaColoring": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.RutaColoring",
        "name": "bgColor",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.RutaColoring",
        "name": "targetType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.RutaColoring",
        "name": "fgColor",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.RutaColoring",
        "name": "selected",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.TagDescription": {
    "parent": "uima.cas.TOP",
    "features": [
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.TagDescription",
        "name": "name",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.tweet.INT": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.O",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Substance": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.PRT": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.META": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.score.TextScoreEntry": {
    "parent": "uima.cas.AnnotationBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.score.TextScoreEntry",
        "name": "value",
        "range": "uima.cas.Double"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.score.TextScoreEntry",
        "name": "key",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.score.TextScoreEntry",
        "name": "label",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.PropRootNode": {
    "parent": "org.texttechnologylab.annotation.type.PropNode",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "graphId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "nodeId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "lemma",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "pos",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "text",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "x",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "y",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "reference",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "x2",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "y2",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "begin",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "end",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "color",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.PropRootNode",
        "name": "arguments",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.ART": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.CSUBJ": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.token.Correction": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.token.Correction",
        "name": "value",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.SuggestedAction": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.SuggestedAction",
        "name": "replacement",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.SuggestedAction",
        "name": "certainty",
        "range": "uima.cas.Float"
      }
    ],
    "primitive": false
  },
  "org.dkpro.core.api.xml.type.XmlNode": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "org.dkpro.core.api.xml.type.XmlNode",
        "name": "parent",
        "range": "org.dkpro.core.api.xml.type.XmlElement"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.NN": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.RutaFrame": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.PRT": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.context.type.PersonContext": {
    "parent": "org.texttechnologylab.annotation.node.type.Context",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.Context",
        "name": "ReferencedID",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.Context",
        "name": "displayName",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.Context",
        "name": "wikiDataID",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.Context",
        "name": "image",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.context.type.PersonContext",
        "name": "birthDate",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.context.type.PersonContext",
        "name": "Name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.context.type.PersonContext",
        "name": "contextInf",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.context.type.PersonContext",
        "name": "gender",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.context.type.PersonContext",
        "name": "birthPlace",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.context.type.PersonContext",
        "name": "fieldOfWork",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.OL": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.GeoNamesEntity": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.GeoNamesEntity",
        "name": "id",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.GeoNamesEntity",
        "name": "mainclass",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.GeoNamesEntity",
        "name": "subclass",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.COLON": {
    "parent": "org.apache.uima.ruta.type.PM",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.DebugEvaluatedCondition": {
    "parent": "uima.cas.TOP",
    "features": [
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugEvaluatedCondition",
        "name": "element",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugEvaluatedCondition",
        "name": "value",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.DebugEvaluatedCondition",
        "name": "conditions",
        "range": "org.apache.uima.ruta.type.DebugEvaluatedCondition[]"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Morphology": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.Fac": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.PropGraphNode": {
    "parent": "org.texttechnologylab.annotation.type.PropNode",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "graphId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "nodeId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "lemma",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "pos",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "text",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "x",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "y",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "reference",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "x2",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "y2",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "begin",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "end",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.PropNode",
        "name": "color",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.DebugCreatedBy": {
    "parent": "uima.cas.TOP",
    "features": [
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugCreatedBy",
        "name": "rule",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.DebugCreatedBy",
        "name": "annotation",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugCreatedBy",
        "name": "script",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugCreatedBy",
        "name": "id",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.PR": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.dkpro.core.api.xml.type.XmlElement": {
    "parent": "org.dkpro.core.api.xml.type.XmlNode",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "org.dkpro.core.api.xml.type.XmlNode",
        "name": "parent",
        "range": "org.dkpro.core.api.xml.type.XmlElement"
      },
      {
        "primitive": true,
        "domain": "org.dkpro.core.api.xml.type.XmlElement",
        "name": "uri",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.dkpro.core.api.xml.type.XmlElement",
        "name": "localName",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.dkpro.core.api.xml.type.XmlElement",
        "name": "attributes",
        "range": "org.dkpro.core.api.xml.type.XmlAttribute[]"
      },
      {
        "primitive": false,
        "domain": "org.dkpro.core.api.xml.type.XmlElement",
        "name": "children",
        "range": "org.dkpro.core.api.xml.type.XmlNode[]"
      },
      {
        "primitive": true,
        "domain": "org.dkpro.core.api.xml.type.XmlElement",
        "name": "qName",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.PP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_AUX": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.TruePositive": {
    "parent": "org.apache.uima.ruta.type.EvalAnnotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.EvalAnnotation",
        "name": "original",
        "range": "uima.tcas.Annotation"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.Paragraph": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Plant_Flora": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.ROOT": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.AnyLine": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.PM": {
    "parent": "org.apache.uima.ruta.type.ANY",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.HEAD": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.orientation.type.After": {
    "parent": "org.texttechnologylab.annotation.OrientationEdge",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "source",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "target",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "edgetype",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.ArgType": {
    "parent": "org.texttechnologylab.annotation.type.ArgNode",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "graphId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "nodeId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "text",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "x",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "y",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "reference",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "begin",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "end",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "color",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.ArgType",
        "name": "conclusion",
        "range": "org.texttechnologylab.annotation.type.ArgTextSegment[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgType",
        "name": "mode",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.ArgType",
        "name": "data",
        "range": "org.texttechnologylab.annotation.type.ArgTextSegment[]"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.Time": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.tweet.POS_URL": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_X",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Relation": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.twitter.Tweet": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.twitter.Tweet",
        "name": "userName",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.twitter.Tweet",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.twitter.Tweet",
        "name": "language",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.twitter.Tweet",
        "name": "retweet",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.twitter.Tweet",
        "name": "twitterID",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.twitter.Tweet",
        "name": "geo",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.twitter.Tweet",
        "name": "hashTags",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.twitter.Tweet",
        "name": "urls",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.twitter.Tweet",
        "name": "userId",
        "range": "uima.cas.Long"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.PUNC": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.ocr.OCRParagraph": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRParagraph",
        "name": "leftIndent",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRParagraph",
        "name": "rightIndent",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRParagraph",
        "name": "startIndent",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRParagraph",
        "name": "lineSpacing",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRParagraph",
        "name": "align",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_SYM": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.RRC": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.orientation.type.Around": {
    "parent": "org.texttechnologylab.annotation.OrientationEdge",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "source",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "target",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "edgetype",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.NP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Protozoa": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Person_HumanBeing": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.hucompute.textimager.uima.type.Similarity": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.hucompute.textimager.uima.type.Similarity",
        "name": "value",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.DOBJ": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.NX": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Society": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3": {
    "parent": "uima.cas.AnnotationBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3",
        "name": "x",
        "range": "uima.cas.Double"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3",
        "name": "y",
        "range": "uima.cas.Double"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3",
        "name": "z",
        "range": "uima.cas.Double"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec4": {
    "parent": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3",
        "name": "x",
        "range": "uima.cas.Double"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3",
        "name": "y",
        "range": "uima.cas.Double"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3",
        "name": "z",
        "range": "uima.cas.Double"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec4",
        "name": "w",
        "range": "uima.cas.Double"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.AUX0": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.Person": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.TMOD": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.DBConfig": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.DBConfig",
        "name": "Host",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.DBConfig",
        "name": "DB",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.DBConfig",
        "name": "User",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.DBConfig",
        "name": "Password",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.DBConfig",
        "name": "Language",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Shape": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.PRED": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Taxon": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.orientation.type.Behind": {
    "parent": "org.texttechnologylab.annotation.OrientationEdge",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "source",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "target",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "edgetype",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.Percent": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.SurfaceForm": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.SurfaceForm",
        "name": "value",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.PUNCT": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.ATTR": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.AnnotationNode": {
    "parent": "org.texttechnologylab.annotation.type.Node",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.hucompute.textimager.uima.type.wikipedia.WikipediaLink": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.WikipediaLink",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.WikipediaLink",
        "name": "LinkType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.WikipediaLink",
        "name": "Target",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.WikipediaLink",
        "name": "Anchor",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.hucompute.textimager.uima.type.wikipedia.WikipediaLink",
        "name": "WikiData",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.hucompute.textimager.uima.type.wikipedia.WikipediaLink",
        "name": "WikiDataHyponyms",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": true,
        "domain": "org.hucompute.textimager.uima.type.wikipedia.WikipediaLink",
        "name": "isInstance",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.EXPL": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_INTJ": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.INPUT": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isospace.MLink": {
    "parent": "org.texttechnologylab.annotation.semaf.isobase.Link",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "figure",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "ground",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "trigger",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "rel_type",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.MLink",
        "name": "val",
        "range": "org.texttechnologylab.annotation.semaf.isospace.Measure"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.MLink",
        "name": "end_point1",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.MLink",
        "name": "end_point2",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.MLink",
        "name": "bounds",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.MLink",
        "name": "bounds_array",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity[]"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.PP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.CONCJ": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.Chunk",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.Chunk",
        "name": "chunkValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.WSLine": {
    "parent": "org.apache.uima.ruta.type.EmptyLine",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.context.type.OrganisationContext": {
    "parent": "org.texttechnologylab.annotation.node.type.Context",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.Context",
        "name": "ReferencedID",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.Context",
        "name": "displayName",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.Context",
        "name": "wikiDataID",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.Context",
        "name": "image",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.context.type.OrganisationContext",
        "name": "foundingDate",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.context.type.OrganisationContext",
        "name": "contextInf",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.context.type.OrganisationContext",
        "name": "website",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.context.type.OrganisationContext",
        "name": "headquarter",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.context.type.OrganisationContext",
        "name": "chiefExecutiveOfficer",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.context.type.OrganisationContext",
        "name": "setLabel",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Possession_Property": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.ArgTypeUnless": {
    "parent": "org.texttechnologylab.annotation.type.ArgType",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "graphId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "nodeId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "text",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "x",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "y",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "reference",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "begin",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "end",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "color",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.ArgType",
        "name": "conclusion",
        "range": "org.texttechnologylab.annotation.type.ArgTextSegment[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgType",
        "name": "mode",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.ArgType",
        "name": "data",
        "range": "org.texttechnologylab.annotation.type.ArgTextSegment[]"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.ArgTypeUnless",
        "name": "counterRebuttal",
        "range": "org.texttechnologylab.annotation.type.ArgTextSegment[]"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.ArgTypeUnless",
        "name": "rebuttal",
        "range": "org.texttechnologylab.annotation.type.ArgTextSegment[]"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.NUM": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.SW": {
    "parent": "org.apache.uima.ruta.type.W",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Artifact": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.attribution.type.Bigger": {
    "parent": "org.texttechnologylab.annotation.Attribution",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.TreeNode": {
    "parent": "org.texttechnologylab.annotation.type.Node",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.TreeNode",
        "name": "children",
        "range": "org.texttechnologylab.annotation.type.Node[]"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.TreeNode",
        "name": "parent",
        "range": "org.texttechnologylab.annotation.type.Node"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.Tag": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.Tag",
        "name": "value",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.PennTree": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.PennTree",
        "name": "PennTree",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.PennTree",
        "name": "TransformationNames",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.RelationDescription": {
    "parent": "org.texttechnologylab.annotation.type.Attribute",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.RelationDescription",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.RelationDescription",
        "name": "relationtype",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isobase.Event": {
    "parent": "org.texttechnologylab.annotation.semaf.isobase.Entity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "mod",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_id",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "position",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "rotation",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec4"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "scale",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature_array",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "event_class",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "polarity",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "mood",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "pos",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "tense",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "aspect",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "vform",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "domain",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "lat",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "long",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "elevation",
        "range": "org.texttechnologylab.annotation.semaf.isospace.Measure"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "countable",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "gquant",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "scopes",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "scopes_array",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "event_frame",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Event",
        "name": "event_type",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.QP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.FalseNegative": {
    "parent": "org.apache.uima.ruta.type.EvalAnnotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.EvalAnnotation",
        "name": "original",
        "range": "uima.tcas.Annotation"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3": {
    "parent": "org.texttechnologylab.annotation.semaf.isobase.Entity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "mod",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_id",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "position",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "rotation",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec4"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "scale",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature_array",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
        "name": "function_in_document",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
        "name": "temporal_function",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
        "name": "anchor_time_id",
        "range": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.SBARQ": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.TD": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Cognition_Ideation": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Substance": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.PRT": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.PREP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.LST": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.Chunk",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.Chunk",
        "name": "chunkValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.ocr.OCRPage": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRPage",
        "name": "width",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRPage",
        "name": "height",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRPage",
        "name": "resolution",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRPage",
        "name": "pageId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRPage",
        "name": "pageNumber",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRPage",
        "name": "uri",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.PRP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.TR": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.hucompute.textimager.uima.type.Summary": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.hucompute.textimager.uima.type.Summary",
        "name": "summary",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.iaa.Agreement": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.iaa.Agreement",
        "name": "agreementValue",
        "range": "uima.cas.Double"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.iaa.Agreement",
        "name": "agreementMeasure",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.NBSP": {
    "parent": "org.apache.uima.ruta.type.SPACE",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.EmptyLine": {
    "parent": "org.apache.uima.ruta.type.AnyLine",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.DIV": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "de.unihd.dbs.uima.types.heideltime.Timex3": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "filename",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "sentId",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "firstTokId",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "allTokIds",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "timexId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "timexInstance",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "timexType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "timexValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "foundByRule",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "timexQuant",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "timexFreq",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "timexMod",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Timex3",
        "name": "emptyValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.TH": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.tweet.EMO": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.O",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Habitat": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.Location": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.ocr.OCRFormat": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRFormat",
        "name": "lang",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRFormat",
        "name": "ff",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRFormat",
        "name": "fs",
        "range": "uima.cas.Float"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRFormat",
        "name": "bold",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRFormat",
        "name": "italic",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRFormat",
        "name": "subscript",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRFormat",
        "name": "superscript",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRFormat",
        "name": "smallcaps",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRFormat",
        "name": "underline",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRFormat",
        "name": "strikeout",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.RutaOptional": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isotimeml.ALink": {
    "parent": "org.texttechnologylab.annotation.semaf.isobase.Link",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "figure",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "ground",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "trigger",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "rel_type",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.ALink",
        "name": "syntax",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.PERIOD": {
    "parent": "org.apache.uima.ruta.type.SENTENCEEND",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.CorpusAnnotation": {
    "parent": "uima.cas.AnnotationBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.CorpusAnnotation",
        "name": "license",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.CorpusAnnotation",
        "name": "corpusUrl",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.CorpusAnnotation",
        "name": "corpusName",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.CorpusAnnotation",
        "name": "author",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.CorpusAnnotation",
        "name": "comment",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.tweet.POS_EMO": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_X",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.POSS": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Event_Happening": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.UL": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.administration.AnnotationStatus": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.administration.AnnotationStatus",
        "name": "status",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.administration.AnnotationStatus",
        "name": "tool",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.CCOMP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.orientation.type.Right": {
    "parent": "org.texttechnologylab.annotation.OrientationEdge",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "source",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "target",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "edgetype",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.QuickAnnoUnit": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.QuickAnnoUnit",
        "name": "combined",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.QuickAnnoUnit",
        "name": "pos",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.QuickAnnoUnit",
        "name": "origin",
        "range": "uima.tcas.Annotation"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_NUM": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.TextElement": {
    "parent": "org.texttechnologylab.annotation.type.Attribute",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.TextElement",
        "name": "value",
        "range": "uima.tcas.Annotation"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.orientation.type.Left": {
    "parent": "org.texttechnologylab.annotation.OrientationEdge",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "source",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "target",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "edgetype",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.EXCLAMATION": {
    "parent": "org.apache.uima.ruta.type.SENTENCEEND",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.SubcatMatch": {
    "parent": "uima.cas.AnnotationBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.SubcatMatch",
        "name": "status",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.SubcatMatch",
        "name": "context",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.SubcatMatch",
        "name": "elements",
        "range": "org.texttechnologylab.annotation.SemanticSource[]"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.ArgTypeDirect": {
    "parent": "org.texttechnologylab.annotation.type.ArgType",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "graphId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "nodeId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "text",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "x",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "y",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "reference",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "begin",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "end",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "color",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.ArgType",
        "name": "conclusion",
        "range": "org.texttechnologylab.annotation.type.ArgTextSegment[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgType",
        "name": "mode",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.ArgType",
        "name": "data",
        "range": "org.texttechnologylab.annotation.type.ArgTextSegment[]"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_X": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.Color": {
    "parent": "org.texttechnologylab.annotation.type.AnnotationNode",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.Color",
        "name": "rgb",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.RutaAnnotation": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.RutaAnnotation",
        "name": "score",
        "range": "uima.cas.Double"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.RutaAnnotation",
        "name": "annotation",
        "range": "uima.tcas.Annotation"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.orientation.type.In": {
    "parent": "org.texttechnologylab.annotation.OrientationEdge",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "source",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "target",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "edgetype",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.AnnotationBracket": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Chromista": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.node.type.DepthList": {
    "parent": "org.texttechnologylab.annotation.type.Node",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.DepthList",
        "name": "displayName",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.node.type.DepthList",
        "name": "hierarchie",
        "range": "uima.cas.IntegerArray"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.context.type.EventContext": {
    "parent": "org.texttechnologylab.annotation.node.type.Context",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.Context",
        "name": "ReferencedID",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.Context",
        "name": "displayName",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.Context",
        "name": "wikiDataID",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.Context",
        "name": "image",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.typo.Orthography": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isobase.Signal": {
    "parent": "org.texttechnologylab.annotation.semaf.isobase.Entity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "mod",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_id",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "position",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "rotation",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec4"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "scale",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature_array",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute[]"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.ROOT": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.LinkingMorpheme": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Split",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Split",
        "name": "splits",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Split[]"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.DebugFailedRuleMatch": {
    "parent": "org.apache.uima.ruta.type.DebugRuleMatch",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.ProfiledAnnotation",
        "name": "time",
        "range": "uima.cas.Long"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.DebugRuleMatch",
        "name": "elements",
        "range": "org.apache.uima.ruta.type.DebugRuleElementMatches[]"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugRuleMatch",
        "name": "matched",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.DebugRuleMatch",
        "name": "delegates",
        "range": "org.apache.uima.ruta.type.DebugScriptApply[]"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.WHADJP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.WS": {
    "parent": "org.apache.uima.ruta.type.ANY",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.MWE": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.S": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.DEP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.PARN": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_VERB": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.POSSESSIVE": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.DET": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Attribute_Property": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.hucompute.textimager.uima.type.semantics.WordSense": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.semantics.type.WordSense",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.semantics.type.WordSense",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.hucompute.textimager.uima.type.semantics.WordSense",
        "name": "confidence",
        "range": "uima.cas.Double"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.CONJP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.dkpro.core.api.xml.type.XmlDocument": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "org.dkpro.core.api.xml.type.XmlDocument",
        "name": "root",
        "range": "org.dkpro.core.api.xml.type.XmlElement"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.X": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.PARATAXIS": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.Morpheme": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.Morpheme",
        "name": "morphTag",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.NaturalPhenomenon": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.node.type.IndividualVis": {
    "parent": "org.texttechnologylab.annotation.type.Node",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.IndividualVis",
        "name": "geonamesID",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.node.type.IndividualVis",
        "name": "markerPoint",
        "range": "uima.cas.FloatArray"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.IndividualVis",
        "name": "areaSize",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.IndividualVis",
        "name": "geoJson",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.IndividualVis",
        "name": "displayName",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.IndividualVis",
        "name": "image",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.IndividualVis",
        "name": "URI",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.IndividualVis",
        "name": "ofClass",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.IndividualVis",
        "name": "wikiDataID",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.FORM": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.BioContext": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.QUESTION": {
    "parent": "org.apache.uima.ruta.type.SENTENCEEND",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.CONJP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.Room.ObjectAttribute": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.Room.ObjectAttribute",
        "name": "key",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.Room.ObjectAttribute",
        "name": "value",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.tweet.POS_AT": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_X",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.PerDesc": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.GraphBase": {
    "parent": "uima.cas.AnnotationBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Comment": {
    "parent": "org.texttechnologylab.annotation.type.AnnotationNode",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Comment",
        "name": "reference",
        "range": "uima.cas.AnnotationBase"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.ArgEdgeLeft": {
    "parent": "org.texttechnologylab.annotation.type.ArgEdge",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "source",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "target",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "edgetype",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.Disease": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.WikipediaRevision": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.WikipediaRevision",
        "name": "revisionId",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.WikipediaRevision",
        "name": "pageId",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.WikipediaRevision",
        "name": "contributorName",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.WikipediaRevision",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.WikipediaRevision",
        "name": "contributorId",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.WikipediaRevision",
        "name": "timestamp",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.WikipediaRevision",
        "name": "minor",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Food": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Animal_Fauna": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Event_Happening": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Shape": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.meta.MetaLink": {
    "parent": "org.texttechnologylab.annotation.semaf.isobase.Link",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "figure",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "ground",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "trigger",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "rel_type",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isospace.QsLink": {
    "parent": "org.texttechnologylab.annotation.semaf.isobase.Link",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "figure",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "ground",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "trigger",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "rel_type",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.TexttechnologyNamedEntity": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TexttechnologyNamedEntity",
        "name": "subvalue",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.TexttechnologyNamedEntity",
        "name": "belongsTo",
        "range": "org.texttechnologylab.annotation.type.TexttechnologyNamedEntity"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TexttechnologyNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.TexttechnologyNamedEntity",
        "name": "knowledgeEntries",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TexttechnologyNamedEntity",
        "name": "wikipediaID",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TexttechnologyNamedEntity",
        "name": "wikidataID",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "uima.tcas.DocumentAnnotation": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.DocumentAnnotation",
        "name": "language",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.coref.type.CoreferenceLink": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.coref.type.CoreferenceLink",
        "name": "next",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.coref.type.CoreferenceLink"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.coref.type.CoreferenceLink",
        "name": "referenceType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.coref.type.CoreferenceLink",
        "name": "referenceRelation",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.XCOMP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Food": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.CONJ": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.IMG": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.orientation.type.NotAt": {
    "parent": "org.texttechnologylab.annotation.OrientationEdge",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "source",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "target",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "edgetype",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.MorphologicalFeatures": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.MorphologicalFeatures",
        "name": "gender",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.MorphologicalFeatures",
        "name": "number",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.MorphologicalFeatures",
        "name": "case",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.MorphologicalFeatures",
        "name": "degree",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.MorphologicalFeatures",
        "name": "verbForm",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.MorphologicalFeatures",
        "name": "tense",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.MorphologicalFeatures",
        "name": "mood",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.MorphologicalFeatures",
        "name": "voice",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.MorphologicalFeatures",
        "name": "definiteness",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.MorphologicalFeatures",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.MorphologicalFeatures",
        "name": "person",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.MorphologicalFeatures",
        "name": "aspect",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.MorphologicalFeatures",
        "name": "animacy",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.MorphologicalFeatures",
        "name": "negative",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.MorphologicalFeatures",
        "name": "numType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.MorphologicalFeatures",
        "name": "possessive",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.MorphologicalFeatures",
        "name": "pronType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.MorphologicalFeatures",
        "name": "reflex",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.morph.MorphologicalFeatures",
        "name": "transitivity",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.NP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.N",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.NN": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.N",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.tweet.POS_DM": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_X",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.tweet.URL": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.O",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Motive": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.State_Condition": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.ArgNode": {
    "parent": "org.texttechnologylab.annotation.type.Node",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "graphId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "nodeId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "text",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "x",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "y",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "reference",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "begin",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "end",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.ArgNode",
        "name": "color",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.EvalAnnotation": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.EvalAnnotation",
        "name": "original",
        "range": "uima.tcas.Annotation"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.Nationality": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.BODY": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isobase.Entity": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "mod",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_id",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "position",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "rotation",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec4"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "scale",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature_array",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute[]"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.WHPP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_DET": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.ProductDesc": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.ocr.OCRDocument": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRDocument",
        "name": "documentname",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.ADJP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.COMMA": {
    "parent": "org.apache.uima.ruta.type.PM",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.DebugRuleApply": {
    "parent": "org.apache.uima.ruta.type.DebugScriptApply",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.ProfiledAnnotation",
        "name": "time",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugScriptApply",
        "name": "element",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugScriptApply",
        "name": "timestamp",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugRuleApply",
        "name": "applied",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugRuleApply",
        "name": "tried",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.DebugRuleApply",
        "name": "rules",
        "range": "org.apache.uima.ruta.type.DebugRuleMatch[]"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugRuleApply",
        "name": "id",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugRuleApply",
        "name": "script",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isobase.Link": {
    "parent": "uima.cas.AnnotationBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "figure",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "ground",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "trigger",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "rel_type",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.orientation.type.On": {
    "parent": "org.texttechnologylab.annotation.OrientationEdge",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "source",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "target",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "edgetype",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isospace.EventPath": {
    "parent": "org.texttechnologylab.annotation.semaf.isospace.Location",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "mod",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_id",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "position",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "rotation",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec4"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "scale",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature_array",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "spatial_entitiy_type",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "dimensionality",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "form",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "dcl",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "domain",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "lat",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "long",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "elevation",
        "range": "org.texttechnologylab.annotation.semaf.isospace.Measure"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "countable",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "gquant",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "scopes",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "scopes_array",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity",
        "name": "cardinality",
        "range": "uima.cas.Double"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.Location",
        "name": "gazref",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.EventPath",
        "name": "trigger",
        "range": "org.texttechnologylab.annotation.semaf.isospace.Motion"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.EventPath",
        "name": "startID",
        "range": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.EventPath",
        "name": "midIDs",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.EventPath",
        "name": "midID_array",
        "range": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity[]"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.EventPath",
        "name": "endID",
        "range": "org.texttechnologylab.annotation.semaf.isospace.SpatialEntity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.EventPath",
        "name": "spatial_relator",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.EventPath",
        "name": "spatial_relator_array",
        "range": "org.texttechnologylab.annotation.semaf.isospace.SpatialSignal[]"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isospace.MoveLink": {
    "parent": "org.texttechnologylab.annotation.semaf.isobase.Link",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "figure",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "ground",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "trigger",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "rel_type",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.MoveLink",
        "name": "source",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.MoveLink",
        "name": "goal",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.MoveLink",
        "name": "mid_point",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.MoveLink",
        "name": "mid_point_array",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity[]"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.MoveLink",
        "name": "path_id",
        "range": "org.texttechnologylab.annotation.semaf.isospace.Path"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.MoveLink",
        "name": "adjunct_id",
        "range": "org.texttechnologylab.annotation.semaf.isospace.SpatialSignal"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.MoveLink",
        "name": "motionsignal_id",
        "range": "org.texttechnologylab.annotation.semaf.isospace.MotionSignal"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.MoveLink",
        "name": "goal_reached",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.GrammarAnomaly": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.Anomaly",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.Anomaly",
        "name": "description",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.Anomaly",
        "name": "suggestions",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.SuggestedAction[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.Anomaly",
        "name": "category",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.node.type.RelationGroup": {
    "parent": "org.texttechnologylab.annotation.type.Node",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.node.type.RelationGroup",
        "name": "relation",
        "range": "org.texttechnologylab.annotation.node.type.RelationContext"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.RelationGroup",
        "name": "locationID",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.RelationGroup",
        "name": "sentence",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.hucompute.textimager.uima.type.category.CategoryCoveredTagged": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.hucompute.textimager.uima.type.category.CategoryCoveredTagged",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.hucompute.textimager.uima.type.category.CategoryCoveredTagged",
        "name": "score",
        "range": "uima.cas.Double"
      },
      {
        "primitive": true,
        "domain": "org.hucompute.textimager.uima.type.category.CategoryCoveredTagged",
        "name": "tags",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.hucompute.textimager.uima.type.category.CategoryCoveredTagged",
        "name": "ref",
        "range": "uima.tcas.Annotation"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Plant_Flora": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.DebugInlinedBlock": {
    "parent": "uima.cas.TOP",
    "features": [
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugInlinedBlock",
        "name": "element",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugInlinedBlock",
        "name": "asCondition",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugInlinedBlock",
        "name": "matched",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.DebugInlinedBlock",
        "name": "inlinedRules",
        "range": "org.apache.uima.ruta.type.DebugScriptApply[]"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.tweet.HASH": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.O",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.TITLE": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.Gpe": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Compound": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Compound",
        "name": "splits",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Split[]"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.semantics.type.SemanticPredicate": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.semantics.type.SemanticPredicate",
        "name": "category",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.semantics.type.SemanticPredicate",
        "name": "arguments",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.semantics.type.SemanticArgument[]"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.REF": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.coref.type.CoreferenceChain": {
    "parent": "uima.cas.AnnotationBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.coref.type.CoreferenceChain",
        "name": "first",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.coref.type.CoreferenceLink"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Lemma": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Lemma",
        "name": "value",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.iaa.AgreementValue": {
    "parent": "uima.cas.AnnotationBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.iaa.AgreementValue",
        "name": "agreementValue",
        "range": "uima.cas.Double"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.iaa.AgreementValue",
        "name": "agreementLabel",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.iaa.AgreementValue",
        "name": "agreementUnits",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.temporal.type.Before": {
    "parent": "org.texttechnologylab.annotation.Temporal",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isotimeml.time.Set": {
    "parent": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "mod",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_id",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "position",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "rotation",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec4"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "scale",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature_array",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
        "name": "function_in_document",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
        "name": "temporal_function",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
        "name": "anchor_time_id",
        "range": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.time.Set",
        "name": "quant",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.time.Set",
        "name": "freq",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.TokenForm": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.TokenForm",
        "name": "value",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Bacteria": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.ArgEdge": {
    "parent": "org.texttechnologylab.annotation.type.Edge",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "source",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "target",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "edgetype",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.administration.FinishAnnotation": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.DocumentMetaData",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.DocumentAnnotation",
        "name": "language",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.DocumentMetaData",
        "name": "documentTitle",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.DocumentMetaData",
        "name": "documentId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.DocumentMetaData",
        "name": "documentUri",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.DocumentMetaData",
        "name": "collectionId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.DocumentMetaData",
        "name": "documentBaseUri",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.DocumentMetaData",
        "name": "isLastSegment",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.administration.FinishAnnotation",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.administration.FinishAnnotation",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.administration.FinishAnnotation",
        "name": "tool",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.Quantity": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.ANY": {
    "parent": "org.apache.uima.ruta.type.ALL",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.tweet.POS_INT": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_X",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.QuickTreeNode": {
    "parent": "org.texttechnologylab.annotation.type.TreeAnnotationNode",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.TreeNode",
        "name": "children",
        "range": "org.texttechnologylab.annotation.type.Node[]"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.TreeNode",
        "name": "parent",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TreeAnnotationNode",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TreeAnnotationNode",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.CARD": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.WHNP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isotimeml.time.Duration": {
    "parent": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "mod",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_id",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "position",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "rotation",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec4"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "scale",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature_array",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
        "name": "function_in_document",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
        "name": "temporal_function",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
        "name": "anchor_time_id",
        "range": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.time.Duration",
        "name": "beginPoint",
        "range": "org.texttechnologylab.annotation.semaf.isotimeml.time.Date"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.time.Duration",
        "name": "endPoint",
        "range": "org.texttechnologylab.annotation.semaf.isotimeml.time.Date"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.TAG": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.SMALL": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.NGram": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.NGram",
        "name": "text",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.unihd.dbs.uima.types.heideltime.GoldEvent": {
    "parent": "de.unihd.dbs.uima.types.heideltime.Event",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Event",
        "name": "filename",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Event",
        "name": "sentId",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Event",
        "name": "tokId",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Event",
        "name": "eventId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Event",
        "name": "eventInstanceId",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Event",
        "name": "aspect",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Event",
        "name": "modality",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Event",
        "name": "polarity",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Event",
        "name": "tense",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.unihd.dbs.uima.types.heideltime.Event",
        "name": "token",
        "range": "de.unihd.dbs.uima.types.heideltime.Token"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.INFMOD": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Archaea": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_PROPN": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.ocr.OCRBlock": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRBlock",
        "name": "top",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRBlock",
        "name": "bottom",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRBlock",
        "name": "left",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRBlock",
        "name": "right",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRBlock",
        "name": "blockType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRBlock",
        "name": "blockName",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRBlock",
        "name": "valid",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Lichen": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.ALL": {
    "parent": "org.apache.uima.ruta.type.TokenSeed",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Act_Action_Activity": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.PCOMP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.attribution.type.Quieter": {
    "parent": "org.texttechnologylab.annotation.Attribution",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Unknown": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Unknown",
        "name": "value",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.Ordinal": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Viruses": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Quantity_Amount": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.WikipediaLink": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.WikipediaLink",
        "name": "LinkType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.WikipediaLink",
        "name": "Target",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.io.jwpl.type.WikipediaLink",
        "name": "Anchor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isotimeml.TimeSignal": {
    "parent": "org.texttechnologylab.annotation.semaf.isobase.Signal",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "mod",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_id",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "position",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "rotation",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec4"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "scale",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature_array",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute[]"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.State_Condition": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.SENTENCEEND": {
    "parent": "org.apache.uima.ruta.type.PM",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.DocumentModification": {
    "parent": "uima.cas.AnnotationBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.DocumentModification",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.DocumentModification",
        "name": "timestamp",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.DocumentModification",
        "name": "comment",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.TextTechnologyEntity": {
    "parent": "org.texttechnologylab.annotation.type.Node",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TextTechnologyEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TextTechnologyEntity",
        "name": "subvalue",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.TextTechnologyEntity",
        "name": "knowledgeEntries",
        "range": "org.texttechnologylab.annotation.type.KnowledgeEntry[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TextTechnologyEntity",
        "name": "begin",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TextTechnologyEntity",
        "name": "end",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TextTechnologyEntity",
        "name": "pos",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.REL": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.AMP": {
    "parent": "org.apache.uima.ruta.type.ANY",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.temporal.type.During": {
    "parent": "org.texttechnologylab.annotation.Temporal",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.orientation.type.Below": {
    "parent": "org.texttechnologylab.annotation.OrientationEdge",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "source",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "target",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "edgetype",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Attribute": {
    "parent": "org.texttechnologylab.annotation.type.GraphBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.hucompute.textimager.uima.type.Sentiment": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.hucompute.textimager.uima.type.Sentiment",
        "name": "sentiment",
        "range": "uima.cas.Double"
      },
      {
        "primitive": true,
        "domain": "org.hucompute.textimager.uima.type.Sentiment",
        "name": "subjectivity",
        "range": "uima.cas.Double"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.sentence.Anomaly": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.Anomaly",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.Anomaly",
        "name": "description",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.Anomaly",
        "name": "suggestions",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.SuggestedAction[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.Anomaly",
        "name": "category",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.sentence.Anomaly",
        "name": "value",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.TreeAnnotationNode": {
    "parent": "org.texttechnologylab.annotation.type.TreeNode",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.TreeNode",
        "name": "children",
        "range": "org.texttechnologylab.annotation.type.Node[]"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.TreeNode",
        "name": "parent",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TreeAnnotationNode",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TreeAnnotationNode",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.knowledge.KnowledgeEntry": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.knowledge.KnowledgeEntry",
        "name": "uri",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.knowledge.KnowledgeEntry",
        "name": "source",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.orientation.type.At": {
    "parent": "org.texttechnologylab.annotation.OrientationEdge",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "source",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "target",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "edgetype",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.temporal.type.After": {
    "parent": "org.texttechnologylab.annotation.Temporal",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Vehicle": {
    "parent": "org.texttechnologylab.annotation.type.concept.Artifact",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Body_Corpus": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.PREPC": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.DebugRuleElementMatch": {
    "parent": "org.apache.uima.ruta.type.ProfiledAnnotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.ProfiledAnnotation",
        "name": "time",
        "range": "uima.cas.Long"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.DebugRuleElementMatch",
        "name": "baseCondition",
        "range": "org.apache.uima.ruta.type.DebugEvaluatedCondition"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.DebugRuleElementMatch",
        "name": "conditions",
        "range": "org.apache.uima.ruta.type.DebugEvaluatedCondition[]"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.DebugRuleElementMatch",
        "name": "elements",
        "range": "org.apache.uima.ruta.type.DebugRuleElementMatches[]"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.DebugRuleElementMatch",
        "name": "inlinedConditionBlocks",
        "range": "org.apache.uima.ruta.type.DebugInlinedBlock[]"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Cognition_Ideation": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.MetaDataStringField": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.MetaDataStringField",
        "name": "key",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.MetaDataStringField",
        "name": "value",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.LINK": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isospace.SRelation": {
    "parent": "org.texttechnologylab.annotation.semaf.isobase.Signal",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "mod",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_id",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "position",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "rotation",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec4"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "scale",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature_array",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SRelation",
        "name": "relation_type",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SRelation",
        "name": "cluster",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SRelation",
        "name": "value",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.ocr.OCRLine": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRLine",
        "name": "baseline",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRLine",
        "name": "top",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRLine",
        "name": "bottom",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRLine",
        "name": "left",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRLine",
        "name": "right",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.ocr.OCRLine",
        "name": "format",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.ADV": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Graph": {
    "parent": "org.texttechnologylab.annotation.type.Node",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Graph",
        "name": "nodes",
        "range": "org.texttechnologylab.annotation.type.Node[]"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Graph",
        "name": "edges",
        "range": "org.texttechnologylab.annotation.type.Edge[]"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Process": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.DocumentAnnotation": {
    "parent": "uima.cas.AnnotationBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.DocumentAnnotation",
        "name": "author",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.DocumentAnnotation",
        "name": "publisher",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.DocumentAnnotation",
        "name": "dateDay",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.DocumentAnnotation",
        "name": "subtitle",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.DocumentAnnotation",
        "name": "dateMonth",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.DocumentAnnotation",
        "name": "dateYear",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.DocumentAnnotation",
        "name": "timestamp",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.DocumentAnnotation",
        "name": "place",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.semantics.type.SemanticArgument": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.semantics.type.SemanticArgument",
        "name": "role",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_ADV": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_PART": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.TimeInnerNode": {
    "parent": "org.texttechnologylab.annotation.type.Node",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TimeInnerNode",
        "name": "xPos",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TimeInnerNode",
        "name": "depth",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TimeInnerNode",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TimeInnerNode",
        "name": "subvalue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TimeInnerNode",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TimeInnerNode",
        "name": "end",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.TimeInnerNode",
        "name": "nodes",
        "range": "uima.cas.FSArray"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.TimeInnerNode",
        "name": "edges",
        "range": "uima.cas.FSArray"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TimeInnerNode",
        "name": "x",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TimeInnerNode",
        "name": "y",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.TimeInnerNode",
        "name": "additionalvalue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_ADJ": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Document": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Div",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Div",
        "name": "divType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Div",
        "name": "id",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Possession_Property": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Fungi": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_ADP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.Substance": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.Animal": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.StopWord": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.COMMENT": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Time": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.PRECONJ": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Motive": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Act_Action_Activity": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.NSUBJ": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.W": {
    "parent": "org.apache.uima.ruta.type.ANY",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.score.ScoreAnnotation": {
    "parent": "uima.cas.AnnotationBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.score.ScoreAnnotation",
        "name": "reference",
        "range": "uima.cas.TOP"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.score.ScoreAnnotation",
        "name": "value",
        "range": "uima.cas.Double"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.score.ScoreAnnotation",
        "name": "origin",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.ArgEdgeRight": {
    "parent": "org.texttechnologylab.annotation.type.ArgEdge",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "source",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "target",
        "range": "org.texttechnologylab.annotation.type.Node"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.Edge",
        "name": "edgetype",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.ADVCL": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_NOUN": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isospace.SpatialSignal": {
    "parent": "org.texttechnologylab.annotation.semaf.isobase.Signal",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "mod",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_id",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "position",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "rotation",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec4"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "scale",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature_array",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialSignal",
        "name": "cluster",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.SpatialSignal",
        "name": "semantic_type",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Taxon": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.ADJ": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.SemanticSource": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.semantics.type.WordSense",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.semantics.type.WordSense",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.SemanticSource",
        "name": "source",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.SemanticSource",
        "name": "searchResult",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.SemanticSource",
        "name": "comment",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.node.type.RelationContext": {
    "parent": "org.texttechnologylab.annotation.type.Node",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.RelationContext",
        "name": "relatesTo",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.RelationContext",
        "name": "ReferencedID",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.RelationContext",
        "name": "displayName",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.RelationContext",
        "name": "wikiDataID",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.ADVMOD": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isospace.MotionSignal": {
    "parent": "org.texttechnologylab.annotation.semaf.isobase.Signal",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "mod",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_id",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "position",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "rotation",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec4"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "scale",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature_array",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isospace.MotionSignal",
        "name": "motion_signal_type",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.Anomaly": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.Anomaly",
        "name": "description",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.Anomaly",
        "name": "suggestions",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.SuggestedAction[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.anomaly.type.Anomaly",
        "name": "category",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.MEASURE": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_PUNCT": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.O": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.Chunk",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.Chunk",
        "name": "chunkValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Location_Place": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Fingerprint": {
    "parent": "org.texttechnologylab.annotation.type.Node",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Fingerprint",
        "name": "reference",
        "range": "uima.cas.TOP"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Protozoa": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.Money": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.SPECIAL": {
    "parent": "org.apache.uima.ruta.type.ANY",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.NAC": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.NSUBJPASS": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.RCMOD": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.tweet.DM": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.O",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.unihd.dbs.uima.types.heideltime.IntervalCandidateSentence": {
    "parent": "de.unihd.dbs.uima.types.heideltime.Sentence",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Sentence",
        "name": "filename",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.unihd.dbs.uima.types.heideltime.Sentence",
        "name": "sentenceId",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Attribute_Property": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Vehicle": {
    "parent": "org.texttechnologylab.annotation.type.Artifact",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.DocumentMetaData": {
    "parent": "uima.tcas.DocumentAnnotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.DocumentAnnotation",
        "name": "language",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.DocumentMetaData",
        "name": "documentTitle",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.DocumentMetaData",
        "name": "documentId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.DocumentMetaData",
        "name": "documentUri",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.DocumentMetaData",
        "name": "collectionId",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.DocumentMetaData",
        "name": "documentBaseUri",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.metadata.type.DocumentMetaData",
        "name": "isLastSegment",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.NC": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.Chunk",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.Chunk",
        "name": "chunkValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.Temporal": {
    "parent": "org.texttechnologylab.annotation.type.AnnotationNode",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.AnnotationNode",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.REMARK": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.REMARK",
        "name": "comment",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.INTJ": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.Chunk",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.Chunk",
        "name": "chunkValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Reproduction": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Heading": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Div",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Div",
        "name": "divType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Div",
        "name": "id",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.IOBJ": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.CSUBJPASS": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.ProfiledAnnotation": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.ProfiledAnnotation",
        "name": "time",
        "range": "uima.cas.Long"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.DebugRuleMatch": {
    "parent": "org.apache.uima.ruta.type.ProfiledAnnotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.ProfiledAnnotation",
        "name": "time",
        "range": "uima.cas.Long"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.DebugRuleMatch",
        "name": "elements",
        "range": "org.apache.uima.ruta.type.DebugRuleElementMatches[]"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.DebugRuleMatch",
        "name": "matched",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.DebugRuleMatch",
        "name": "delegates",
        "range": "org.apache.uima.ruta.type.DebugScriptApply[]"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.node.type.Context": {
    "parent": "org.texttechnologylab.annotation.type.Node",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.Context",
        "name": "ReferencedID",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.Context",
        "name": "displayName",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.Context",
        "name": "wikiDataID",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.node.type.Context",
        "name": "image",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Hyperedge": {
    "parent": "org.texttechnologylab.annotation.type.GraphBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Hyperedge",
        "name": "endpoints",
        "range": "org.texttechnologylab.annotation.type.Endpoint[]"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.STYLE": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Process": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.TokenSeed": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.RutaBasic": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.RutaBasic",
        "name": "replacement",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.BR": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.COP": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.tweet.POS_NPV": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS_NOUN",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.knowledge.WikidataEntry": {
    "parent": "org.texttechnologylab.annotation.knowledge.KnowledgeEntry",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.knowledge.KnowledgeEntry",
        "name": "uri",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.knowledge.KnowledgeEntry",
        "name": "source",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.knowledge.WikidataEntry",
        "name": "P31",
        "range": "uima.cas.StringList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.knowledge.WikidataEntry",
        "name": "P279",
        "range": "uima.cas.StringList"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.AbstractNamedEntity": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "uima.tcas.Annotation": {
    "parent": "uima.cas.AnnotationBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.NEG": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.PC": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.Chunk",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.Chunk",
        "name": "chunkValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.ADVC": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.Chunk",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.chunk.Chunk",
        "name": "chunkValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.CW": {
    "parent": "org.apache.uima.ruta.type.W",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.ner.type.Language": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Paragraph": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Div",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Div",
        "name": "divType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Div",
        "name": "id",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.CONJ_YET": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.KnowledgeEntry": {
    "parent": "org.texttechnologylab.annotation.type.Node",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "Id",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "label",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "create",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "modified",
        "range": "uima.cas.Long"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.GraphBase",
        "name": "user",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.Node",
        "name": "attribute",
        "range": "org.texttechnologylab.annotation.type.Attribute"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.KnowledgeEntry",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.KnowledgeEntry",
        "name": "source",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.KnowledgeEntry",
        "name": "reference",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.type.KnowledgeEntry",
        "name": "parentEntity",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.typo.Historical": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.semafsr.SrLink": {
    "parent": "org.texttechnologylab.annotation.semaf.isobase.Link",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "figure",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "ground",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "trigger",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "rel_type",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.CC": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Communication": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.tweet.NNV": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.N",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "PosValue",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.lexmorph.type.pos.POS",
        "name": "coarseValue",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.RelationSet": {
    "parent": "uima.cas.AnnotationBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.type.RelationSet",
        "name": "relations",
        "range": "org.texttechnologylab.annotation.type.RelationDescription[]"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.SPACE": {
    "parent": "org.apache.uima.ruta.type.WS",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isotimeml.time.Time": {
    "parent": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "mod",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_id",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "position",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "rotation",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec4"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "scale",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.Vec3"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature",
        "range": "uima.cas.FSList"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Entity",
        "name": "object_feature_array",
        "range": "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute[]"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
        "name": "function_in_document",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
        "name": "temporal_function",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3",
        "name": "anchor_time_id",
        "range": "org.texttechnologylab.annotation.semaf.isotimeml.TimeX3"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Bacteria": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Reproduction": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.isotimeml.SLink": {
    "parent": "org.texttechnologylab.annotation.semaf.isobase.Link",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "comment",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "figure",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "ground",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": false,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "trigger",
        "range": "org.texttechnologylab.annotation.semaf.isobase.Entity"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isobase.Link",
        "name": "rel_type",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.isotimeml.SLink",
        "name": "origin",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.concept.Chromista": {
    "parent": "org.texttechnologylab.annotation.AbstractNamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.AbstractNamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.XSUBJ": {
    "parent": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Governor",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "Dependent",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Token"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "DependencyType",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.dependency.Dependency",
        "name": "flavor",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.type.Communication": {
    "parent": "org.texttechnologylab.annotation.NamedEntity",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "value",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.ner.type.NamedEntity",
        "name": "identifier",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metaphor",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "metonym",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.NamedEntity",
        "name": "specific",
        "range": "uima.cas.Boolean"
      }
    ],
    "primitive": false
  },
  "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute": {
    "parent": "uima.cas.AnnotationBase",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute",
        "name": "key",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.texttechnologylab.annotation.semaf.IsoSpatial.ObjectAttribute",
        "name": "value",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "constituentType",
        "range": "uima.cas.String"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "parent",
        "range": "uima.tcas.Annotation"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "children",
        "range": "uima.tcas.Annotation[]"
      },
      {
        "primitive": true,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.syntax.type.constituent.Constituent",
        "name": "syntacticFunction",
        "range": "uima.cas.String"
      }
    ],
    "primitive": false
  },
  "org.apache.uima.ruta.type.html.FONT": {
    "parent": "org.apache.uima.ruta.type.html.TAG",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "name",
        "range": "uima.cas.String"
      },
      {
        "primitive": true,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "expandedOffsets",
        "range": "uima.cas.Boolean"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeName",
        "range": "uima.cas.StringArray"
      },
      {
        "primitive": false,
        "domain": "org.apache.uima.ruta.type.html.TAG",
        "name": "attributeValue",
        "range": "uima.cas.StringArray"
      }
    ],
    "primitive": false
  },
  "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Split": {
    "parent": "uima.tcas.Annotation",
    "features": [
      {
        "primitive": false,
        "domain": "uima.cas.AnnotationBase",
        "name": "sofa",
        "range": "uima.cas.Sofa"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "begin",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": true,
        "domain": "uima.tcas.Annotation",
        "name": "end",
        "range": "uima.cas.Integer"
      },
      {
        "primitive": false,
        "domain": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Split",
        "name": "splits",
        "range": "de.tudarmstadt.ukp.dkpro.core.api.segmentation.type.Split[]"
      }
    ],
    "primitive": false
  }
}





function make_inhe(){
  const inhe = {}
  for (const [k,v] of Object.entries(data)) {
    let val: string[]  = inhe[v["parent"]]
    if(val === undefined) val = []
    val.push(k) 
    inhe[v["parent"]] = val
  }
  return inhe
}

export const inhe = make_inhe()

export function make_filter(filter: string[]){
  let filtercopy = [... filter]
  let i = 0;
  while (i < filtercopy.length) {
    if(inhe[filtercopy[i]] !== undefined)
      for (const elem of inhe[filtercopy[i]]) {
        if(!(elem in filtercopy)){
          filtercopy.push(elem)
        }
      }
    i+=1;
  }
  return new Set(filtercopy)
}



//Deno.writeTextFileSync("uima.types.ts", "export type allowed_uima_types = "+  Object.keys(data).map(x=>`"${x}"`).join(" | "))