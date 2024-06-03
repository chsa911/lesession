const mongoose = require("mongoose");

const LesessionSchema = mongoose.Schema(
  {
  //Mindesteingabe pro Leseinstanz(Buch)
  {
      timestamps: true,
    },

    autor: {
      type: String,
      required: true,

    },

    keyword: {
      type: String,
      required: true,

    },

    kwp: {
      type: int,
      required: true,
    },

      verlag: {
        type: String,
        required: true,
      },

      seiten: {
        type: int,
        required: true,
      },

//Teil: Lesehistorie

    //Entdeckungsdatum

      entdat: {
              type: date,
              required: true,
             },

    //Datum der Veröffentlichung auf der Homepage

      verdat: {
        type: date,
        required: true,
      },

        // Datum zu dem das Buch beendet wurde

      enddat: {
        type: date,
        required: true,
      },

    //Teil: Content

       //Genre
//F= Fiktion, N=Nonfiktion
      genre: {
                type: String,
                required: false,
                default: F,
              },

       gengenau: {
                  type: String,
                  required: false,
                  default: Th.
                },
    //Handlungsort:
    // 0-9
       kontinent: {
                    type: int,
                    required: false,
                    default: 4,
                  },

         land: {
                        type: String,
                        required: false,
                        default: D,
                      },
         thema0: {
                         type: String,
                         required: false,

                              },
         thema1: {
                         type: String,
                         required: false,
                                       },
        thema2: {
                                               type: String,
                                               required: false,
                                             },
   zeit: {
                                               type: String,
                                               required: false,
                                               default: Gegenwart,
                                             },
    // Amazon Link
    amalin: {
                                               type: String,
                                               required: false,

  // Position der Markierung: oben, unten, rechts, links
    position: {
                                               type: String,
                                               required: false,
                                               default: unten,
                                             },
    //Teil Markierungen
    mark: {
                                                   type: String,
                                                   required: false,
                                                   default: empty,
                                                 },
    markrang: {
                                                   type: String,
                                                   required: false,
                                                   default: empty,
   //Topwert                                              },
   topw: {
                                                   type: int,
                                                   required: false,
                                                   default: empty,
                                                 },
    //Belegte Bereiche
    belber: {
                                                   type: int,
                                                   required: false,
                                                   default: empty,
                                                 },
    //Gesamtwert
    gesw: {
                                                   type: int,
                                                   required: false,
                                                   default: empty,
                                                 },
    //Markierung: x= verfügbar, v=vorzeitig beendet, w= wunsch
    zustand: {
                                                   type: String,
                                                   required: false,
                                                   default: empty,
                                                 },

    },
  },

);


const Lesession = mongoose.model("Lesesession", LesessionSchema);

module.exports = Lesession;