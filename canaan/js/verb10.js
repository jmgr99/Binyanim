function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}
function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}
var type = 'firstgut';
var rad1 = 'ח';
var rad2 = 'ל';
var rad3 = 'ק';
var binyan = 'hofal';
var roott = 'חלק';
var meaning = 'to be slided';
var sheva = decode_utf8('\xD6\xB0');
var hatefsegol = decode_utf8('\xD6\xB1');
var hatefpataj = decode_utf8('\xD6\xB2\x20');
var hatefqamets = decode_utf8('\xD6\xB3\x20');
var hireq = decode_utf8('\xD6\xB4');
var tsere = decode_utf8('\xD6\xB5');
var segol = decode_utf8('\xD6\xB6');
var pataj = decode_utf8('\xD6\xB7');
var qamets = decode_utf8('\xD6\xB8');
var holem = decode_utf8('\xD6\xB9');
var qubuts = decode_utf8('\xD6\xBB\x20');
var daguesh = decode_utf8('\xD6\xBC');

var conjdict =
{'strongverb':
              {'qal':
			               {'perfect':
				             {"Isg":[rad1,qamets,rad2,pataj,rad3,sheva,"ת",daguesh,hireq,"י"],
                      "IIsgm":[rad1,qamets,rad2,pataj,rad3,sheva,"ת",daguesh,qamets],
                      "IIsgf":[rad1,qamets,rad2,pataj,rad3,sheva,"ת",daguesh,sheva],
                      "IIIsgm":[rad1,qamets,rad2,pataj,rad3],
                      "IIIsgf":[rad1,qamets,rad2,sheva,rad3,qamets,"ה"],
                      "Ipl":[rad1,qamets,rad2,pataj,rad3,sheva,"נו",daguesh],
                      "IIplm":[rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ם"],
                      "IIplf":[rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ן"],
                      "IIIplm":[rad1,qamets,rad2,sheva,rad3,"ו",daguesh],
                      "IIIplf":[rad1,qamets,rad2,sheva,rad3,"ו",daguesh]},
                  'imperfect':
                  	 {"Isg":["א",segol,rad1,sheva,rad2,holem,rad3],
                      "IIsgm":["ת",daguesh,hireq,rad1,sheva,rad2,holem,rad3],
                      "IIsgf":["ת",daguesh,hireq,rad1,sheva,rad2,sheva,rad3,hireq,"י"],
                      "IIIsgm":["י",hireq,rad1,sheva,rad2,holem,rad3,],
                      "IIIsgf":["ת",daguesh,hireq,rad1,sheva,rad2,holem,rad3],
                      "Ipl":["נ",hireq,rad1,sheva,rad2,holem,rad3],
                      "IIplm":["ת",daguesh,hireq,rad1,sheva,rad2,sheva,rad3,"ו",daguesh],
                      "IIplf":["ת",daguesh,hireq,rad1,sheva,rad2,holem,rad3,sheva,"נ",qamets,"ה"],
                      "IIIplm":["י",hireq,rad1,sheva,rad2,sheva,rad3,"ו",daguesh],
                      "IIIplf":["ת",daguesh,hireq,rad1,sheva,rad2,holem,rad3,sheva,"נ",qamets,"ה"]},
                  'imperative':
                     {"IIsgm":[rad1,sheva,rad2,holem,rad3],
                      "IIsgf":[rad1,hireq,rad2,sheva,rad3,hireq,"י"],
                      "IIplm":[rad1,hireq,rad2,sheva,rad3,"ו",daguesh],
                      "IIplf":[rad1,sheva,rad2,holem,rad3,sheva,"נ",qamets,"ה"]},
                  'participle':
                  		{'mascsg': [rad1,"ו",holem,rad2,tsere,rad3],
                       'femsg':  [rad1,"ו",holem,rad2,segol,rad3,segol,"ת"],
                       'mascpl': [rad1,"ו",holem,rad2,sheva,rad3,hireq,"ים"],
                       'fempl':  [rad1,"ו",holem,rad2,sheva,rad3,"ו",holem,"ת"]},
                  'infinitive':
                  		{'absolute':[rad1,qamets,rad2,"ו",holem,rad3],
                       'construct':["ל",hireq,rad1,sheva,rad2,holem,rad3]},
                     },
              'nifal':
                      {'perfect':{
                    "Isg":["נ",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,hireq,"י"],
                    "Ipl":["נ",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"נו",daguesh],
                    "IIsgm":["נ",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,qamets],
                    "IIsgf":["נ",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,sheva],
                    "IIplm":["נ",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ם"],
                    "IIplf":["נ",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ן"],
                    "IIIsgm":["נ",hireq,rad1,sheva,rad2,pataj,rad3],
                    "IIIsgf":["נ",hireq,rad1,sheva,rad2,sheva,rad3,qamets,"ה"],
                    "IIIplm":["נ",hireq,rad1,sheva,rad2,sheva,rad3,"ו",daguesh],
                    "IIIplf":["נ",hireq,rad1,sheva,rad2,sheva,rad3,"ו",daguesh]},
                'imperfect':{
                    "Isg":["א",segol,rad1,daguesh,qamets,rad2,tsere,rad3],
                    "Ipl":["נ",hireq,rad1,daguesh,qamets,rad2,tsere,rad3],
                    "IIsgm":["ת",daguesh,hireq,rad1,daguesh,qamets,rad2,tsere,rad3],
                    "IIsgf":["ת",daguesh,hireq,rad1,daguesh,qamets,rad2,sheva,rad3,hireq,"י"],
                    "IIplm":["ת",daguesh,hireq,rad1,daguesh,qamets,rad2,sheva,rad3,"ו",daguesh],
                    "IIplf":["ת",daguesh,hireq,rad1,daguesh,qamets,rad2,pataj,rad3,sheva,"נ",qamets,"ה"],
                    "IIIsgm":["י",hireq,rad1,daguesh,qamets,rad2,tsere,rad3],
                    "IIIsgf":["ת",daguesh,hireq,rad1,daguesh,qamets,rad2,tsere,rad3],
                    "IIIplm":["י",hireq,rad1,daguesh,qamets,rad2,sheva,rad3,"ו",daguesh],
                    "IIIplf":["ת",daguesh,hireq,rad1,daguesh,qamets,rad2,pataj,rad3,sheva,"נ",qamets,"ה"]},
                'imperative':{
                    "IIsgm":["ה",hireq,rad1,daguesh,qamets,rad2,tsere,rad3],
                    "IIsgf":["ה",hireq,rad1,daguesh,qamets,rad2,sheva,rad3,hireq,"י‏"],
                    "IIplm":["ה",hireq,rad1,daguesh,qamets,rad2,sheva,rad3,"ו",daguesh],
                    "IIplf":["ה",hireq,rad1,daguesh,qamets,rad2,pataj,rad3,sheva,"נ",qamets,"ה‏"]},
                'participle':{
                    "mascsg":["מ",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                    "femsg":["מ",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,segol,rad3,segol,"ת"],
                    "mascpl":["מ",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,hireq,"ים"],
                    "fempl":["מ",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,"ו",holem,"ת"]},
                'infinitive':{
                    'absolute':["ה",hireq,rad1,daguesh,qamets,rad2,holem,rad3],
                    'construct':["ל",sheva,"ה",hireq,rad1,daguesh,qamets,rad2,tsere,rad3]},},
              'piel':
                      {'perfect':
                    {"Isg":[rad1,hireq,rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,hireq,"י"],
                    "Ipl":[rad1,hireq,rad2,daguesh,pataj,rad3,sheva,"נו",daguesh],
                    "IIsgm":[rad1,hireq,rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,qamets],
                    "IIsgf":[rad1,hireq,rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,sheva],
                    "IIplm":[rad1,hireq,rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,segol,"ם"],
                    "IIplf":[rad1,hireq,rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,segol,"ן"],
                    "IIIsgm":[rad1,hireq,rad2,daguesh,tsere,rad3],
                    "IIIsgf":[rad1,hireq,rad2,daguesh,sheva,rad3,qamets,"ה"],
                    "IIIplm":[rad1,hireq,rad2,daguesh,sheva,rad3,"ו",daguesh],
                    "IIIplf":[rad1,hireq,rad2,daguesh,sheva,rad3,"ו",daguesh]},
              'imperfect':
                   {"Isg":["אֲ",rad1,pataj,rad2,daguesh,tsere,rad3],
                    "Ipl":["נ",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                    "IIsgm":["ת",daguesh,sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                    "IIsgf":["ת",daguesh,sheva,rad1,pataj,rad2,daguesh,sheva,rad3,hireq,"י"],
                    "IIplm":["ת",daguesh,sheva,rad1,pataj,rad2,daguesh,sheva,rad3,"ו",daguesh],
                    "IIplf":["ת",daguesh,sheva,rad1,pataj,rad2,daguesh,tsere,rad3,sheva,"נ",qamets,"ה"],
                    "IIIsgm":["י",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                    "IIIsgf":["ת",daguesh,sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                    "IIIplm":["י",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,"ו",daguesh],
                    "IIIplf":["ת",daguesh,sheva,rad1,pataj,rad2,daguesh,tsere,rad3,sheva,"נ",qamets,"ה"]},
              'imperative':
                  {"IIsgm":[rad1,pataj,rad2,daguesh,tsere,rad3],
                    "IIsgf":[rad1,pataj,rad2,daguesh,sheva,rad3,hireq,"י‏"],
                    "IIplm":[rad1,pataj,rad2,daguesh,sheva,rad3,"ו",daguesh],
                    "IIplf":[rad1,pataj,rad2,daguesh,tsere,rad3,sheva,"נ",qamets,"ה‏"]},
              'participle':
                  {"mascsg":["מ",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                    "femsg":["מ",sheva,rad1,pataj,rad2,daguesh,segol,rad3,segol,"ת"],
                    "mascpl":["מ",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,hireq,"ים"],
                    "fempl":["מ",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,"ו",holem,"ת"]},
              'infinitive':
                  {'absolute':[rad1,pataj,rad2,daguesh,holem,rad3],
                    'construct':["ל",sheva,rad1,pataj,rad2,daguesh,tsere,rad3]},
                  },
              'pual':
                      {'perfect':{
                  "Isg":[rad1,"ֻ",rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,hireq,"י"],
                  "Ipl":[rad1,"ֻ",rad2,daguesh,pataj,rad3,sheva,"נו",daguesh],
                  "IIsgm":[rad1,"ֻ",rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,qamets],
                  "IIsgf":[rad1,"ֻ",rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,sheva],
                  "IIplm":[rad1,"ֻ",rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,segol,"ם"],
                  "IIplf":[rad1,"ֻ",rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,segol,"ן"],
                  "IIIsgm":[rad1,"ֻ",rad2,daguesh,pataj,rad3],
                  "IIIsgf":[rad1,"ֻ",rad2,daguesh,sheva,rad3,qamets,"ה"],
                  "IIIplm":[rad1,"ֻ",rad2,daguesh,sheva,rad3,"ו",daguesh],
                  "IIIplf":[rad1,"ֻ",rad2,daguesh,sheva,rad3,"ו",daguesh]},
              'imperfect':{
                  "Isg":["אֲ",rad1,"ֻ",rad2,daguesh,pataj,rad3],
                  "Ipl":["נ",sheva,rad1,"ֻ",rad2,,daguesh,pataj,rad3],
                  "IIsgm":["ת",daguesh,sheva,rad1,"ֻ",rad2,,daguesh,pataj,rad3],
                  "IIsgf":["ת",daguesh,sheva,rad1,"ֻ",rad2,,daguesh,sheva,rad3,hireq,"י"],
                  "IIplm":["ת",daguesh,sheva,rad1,"ֻ",rad2,,daguesh,sheva,rad3,"ו",daguesh],
                  "IIplf":["ת",daguesh,sheva,rad1,"ֻ",rad2,,daguesh,pataj,rad3,sheva,"נ",qamets,"ה"],
                  "IIIsgm":["י",sheva,rad1,"ֻ",rad2,,daguesh,pataj,rad3],
                  "IIIsgf":["ת",daguesh,sheva,rad1,"ֻ",rad2,,daguesh,pataj,rad3],
                  "IIIplm":["י",sheva,rad1,"ֻ",rad2,,daguesh,sheva,rad3,"ו",daguesh],
                  "IIIplf":["ת",daguesh,sheva,rad1,"ֻ",rad2,,daguesh,pataj,rad3,sheva,"נ",qamets,"ה"]},
              'imperative':
                  {"IIsgm":'none',
                    "IIsgf":'none',
                    "IIplm":'none',
                    "IIplf":'none',},
              'participle':{
                  "mascsg":["מ",sheva,rad1,"ֻ",rad2,,daguesh,qamets,rad3],
                  "femsg":["מ",sheva,rad1,"ֻ",rad2,,daguesh,segol,rad3,segol,"ת"],
                  "mascpl":["מ",sheva,rad1,"ֻ",rad2,,daguesh,qamets,rad3,hireq,"ים"],
                  "fempl":["מ",sheva,rad1,"ֻ",rad2,,daguesh,qamets,rad3,"ו",holem,"ת"]},
              'infinitive':{
                  'absolute':[rad1,"ֻ",rad2,,daguesh,holem,rad3],
                  'construct':'none'},
          },
              'hifil':
                      {
          'perfect':
                {"Isg":["ה",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,hireq,"י"],
                 "Ipl":["ה",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"נו",daguesh],
                 "IIsgm":["ה",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,qamets],
                 "IIsgf":["ה",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,sheva],
                 "IIplm":["ה",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ם"],
                 "IIplf":["ה",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ן"],
                 "IIIsgm":["ה",hireq,rad1,sheva,rad2,hireq,"י",rad3],
                 "IIIsgf":["ה",hireq,rad1,sheva,rad2,hireq,"י",rad3,qamets,"ה"],
                 "IIIplm":["ה",hireq,rad1,sheva,rad2,hireq,"י",rad3,"ו",daguesh],
                 "IIIplf":["ה",hireq,rad1,sheva,rad2,hireq,"י",rad3,"ו",daguesh]},
            'imperfect':
                 {"Isg":["א",pataj,rad1,sheva,rad2,hireq,"י",rad3],
                 "Ipl":["נ",pataj,rad1,sheva,rad2,hireq,"י",rad3],
                 "IIsgm":["ת",daguesh,pataj,rad1,sheva,rad2,hireq,"י",rad3],
                 "IIsgf":["ת",daguesh,pataj,rad1,sheva,rad2,hireq,"י",rad3,hireq,"י"],
                 "IIplm":["ת",daguesh,pataj,rad1,sheva,rad2,hireq,"י",rad3,"ו",daguesh],
                 "IIplf":["ת",daguesh,pataj,rad1,sheva,rad2,tsere,rad3,sheva,"נ",qamets,"ה"],
                 "IIIsgm":["י",pataj,rad1,sheva,rad2,hireq,"י",rad3],
                 "IIIsgf":["ת",daguesh,pataj,rad1,sheva,rad2,hireq,"י",rad3],
                 "IIIplm":["י",pataj,rad1,sheva,rad2,hireq,"י",rad3,"ו",daguesh],
                 "IIIplf":["ת",daguesh,pataj,rad1,sheva,rad2,tsere,rad3,sheva,"נ",qamets,"ה"]},
          'imperative':
                {"IIsgm":["ה",pataj,rad1,sheva,rad2,tsere,rad3],
                "IIsgf":["ה",pataj,rad1,sheva,rad2,hireq,"י",rad3,hireq,"י‏"],
                "IIplm":["ה",pataj,rad1,sheva,rad2,hireq,"י",rad3,"ו",daguesh],
                "IIplf":["ה",pataj,rad1,sheva,rad2,tsere,rad3,sheva,"נ",qamets,"ה‏"],
                },
          'participle':
                {"mascsg":["מ",pataj,rad1,sheva,rad2,hireq,"י",rad3],
                "femsg":["מ",pataj,rad1,sheva,rad2,hireq,"י",rad3,qamets,"ה"],
                "mascpl":["מ",pataj,rad1,sheva,rad2,hireq,"י",rad3,hireq,"ים"],
                "fempl":["מ",pataj,rad1,sheva,rad2,hireq,"י",rad3,"ו",holem,"ת"],
          },
          'infinitive':
                {'absolute':["ה",pataj,rad1,sheva,rad2,tsere,rad3],
                'construct':["ל",sheva,"ה",pataj,rad1,sheva,rad2,hireq,"י",rad3]}
              },
              'hofal':
                    {'perfect':
                {"Isg":["הֻ",rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,hireq,"י"],
                "Ipl":["הֻ",rad1,sheva,rad2,pataj,rad3,sheva,"נו",daguesh],
                "IIsgm":["הֻ",rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,qamets],
                "IIsgf":["הֻ",rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,sheva],
                "IIplm":["הֻ",rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ם"],
                "IIplf":["הֻ",rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ן"],
                "IIIsgm":["הֻ",rad1,sheva,rad2,pataj,rad3],
                "IIIsgf":["הֻ",rad1,sheva,rad2,sheva,rad3,qamets,"ה"],
                "IIIplm":["הֻ",rad1,sheva,rad2,sheva,rad3,"ו",daguesh],
                "IIIplf":["הֻ",rad1,sheva,rad2,sheva,rad3,"ו",daguesh]},
          'imperfect':
                {"Isg":["אֻ",rad1,sheva,rad2,pataj,rad3],
                "Ipl":["נֻ",rad1,sheva,rad2,pataj,rad3],
                "IIsgm":["ת",daguesh,"ֻ",rad1,sheva,rad2,pataj,rad3],
                "IIsgf":["ת",daguesh,"ֻ",rad1,sheva,rad2,sheva,rad3,hireq,"י"],
                "IIplm":["ת",daguesh,"ֻ",rad1,sheva,rad2,sheva,rad3,"ו",daguesh],
                "IIplf":["ת",daguesh,"ֻ",rad1,sheva,rad2,pataj,rad3,sheva,"נ",qamets,"ה"],
                "IIIsgm":["יֻ",rad1,sheva,rad2,pataj,rad3],
                "IIIsgf":["ת",daguesh,"ֻ",rad1,sheva,rad2,pataj,rad3],
                "IIIplm":["יֻ",rad1,sheva,rad2,sheva,rad3,"ו",daguesh],
                "IIIplf":["ת",daguesh,"ֻ",rad1,sheva,rad2,pataj,rad3,sheva,"נ",qamets,"ה"]},
          'imperative':
              {"IIsgm":'none',
                "IIsgf":'none',
                "IIplm":'none',
                "IIplf":'none',},
        'participle':
                {"mascsg":["מֻ",rad1,sheva,rad2,qamets,rad3],
                "femsg":["מֻ",rad1,sheva,rad2,segol,rad3,segol,"ת"],
                "mascpl":["מֻ",rad1,sheva,rad2,qamets,rad3,hireq,"ים"],
                "fempl":["מֻ",rad1,sheva,rad2,qamets,rad3,"ו",holem,"ת"]},
        'infinitive':
                {'absolute':["הֻ",rad1,sheva,rad2,tsere,rad3],
                  'construct':'none',},},
              'hitpael':
                    {
        'perfect':{
                "Isg":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,hireq,"י"],
                "Ipl":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,pataj,rad3,sheva,"נו",daguesh],
                "IIsgm":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,qamets],
                "IIsgf":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,sheva],
                "IIplm":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,segol,"ם"],
                "IIplf":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,segol,"ן"],
                "IIIsgm":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                "IIIsgf":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,qamets,"ה"],
                "IIIplm":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,"ו",daguesh],
                "IIIplf":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,"ו",daguesh]},
        'imperfect':{
                "Isg":["א",segol,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                "Ipl":["נ",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                "IIsgm":["ת",daguesh,hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                "IIsgf":["ת",daguesh,hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,hireq,"י"],
                "IIplm":["ת",daguesh,hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,"ו",daguesh],
                "IIplf":["ת",daguesh,hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3,sheva,"נ",qamets,"ה"],
                "IIIsgm":["י",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                "IIIsgf":["ת",daguesh,hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                "IIIplm":["י",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,"ו",daguesh],
                "IIIplf":["ת",daguesh,hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3,sheva,"נ",qamets,"ה"]},
    'imperative':{
                "IIsgm":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                "IIsgf":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,hireq,"י‏"],
                "IIplm":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,"ו",daguesh],
                "IIplf":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3,sheva,"נ",qamets,"ה‏"]},
    'participle':{
                "mascsg":["מ",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                "femsg":["מ",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,segol,rad3,segol,"ת"],
                "mascpl":["מ",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,hireq,"ים"],
                "fempl":["מ",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,"ו",holem,"ת"]},

    'infinitive':{
                'absolute':["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                'construct':["ל",sheva,"ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3]},},},
'firstgut':
              {"qal":
                    {'perfect': {"Isg":
                [rad1,qamets,rad2,pataj,rad3,sheva,"ת",daguesh,hireq,"י",],
                "Ipl":
                [rad1,qamets,rad2,pataj,rad3,sheva,"נ","ו",daguesh,],
                "IIsgm":
                [rad1,qamets,rad2,pataj,rad3,sheva,"ת",daguesh,qamets,],
                "IIsgf":
                [rad1,qamets,rad2,pataj,rad3,sheva,"ת",daguesh,sheva,],
                "IIplm":
                [rad1,"ֲ",rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ם",],
                "IIplf":
                [rad1,"ֲ",rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ן",],
                "IIIsgm":
                [rad1,qamets,rad2,pataj,rad3,],
                "IIIsgf":
                [rad1,qamets,rad2,sheva,rad3,qamets,"ה",],
                "IIIplm":
                [rad1,qamets,rad2,sheva,rad3,"ו",daguesh,],
                "IIIplf":
                [rad1,qamets,rad2,sheva,rad3,"ו",daguesh,],
                },
          'imperfect':
                {"Isg":
                ["א",segol,rad1,hatefsegol,rad2,holem,rad3,],
                "Ipl":
                ["נ",pataj,rad1,"ֲ",rad2,holem,rad3,],
                "IIsgm":
                ["ת",daguesh,pataj,rad1,"ֲ",rad2,holem,rad3,],
                "IIsgf":
                ["ת",daguesh,pataj,rad1,pataj,rad2,sheva,rad3,hireq,"י",],
                "IIplm":
                ["ת",daguesh,pataj,rad1,pataj,rad2,sheva,rad3,"ו",daguesh,],
                "IIplf":
                ["ת",daguesh,pataj,rad1,"ֲ",rad2,holem,rad3,sheva,"נ",qamets,"ה",],
                "IIIsgm":
                ["י",pataj,rad1,"ֲ",rad2,holem,rad3,],
                "IIIsgf":
                ["ת",daguesh,pataj,rad1,"ֲ",rad2,holem,rad3,],
                "IIIplm":
                ["י",pataj,rad1,pataj,rad2,sheva,rad3,"ו",daguesh,],
                "IIIplf":
                ["ת",daguesh,pataj,rad1,"ֲ",rad2,holem,rad3,sheva,"נ",qamets,"ה",],
                },
          'imperative':
                {"IIsgm":
                [rad1,"ֲ",rad2,holem,rad3,],
                "IIsgf":
                [rad1,hireq,rad2,sheva,rad3,hireq,"י",],
                "IIplm":
                [rad1,hireq,rad2,sheva,rad3,"ו",daguesh,],
                "IIplf":
                [rad1,"ֲ",rad2,holem,rad3,sheva,"נ",qamets,"ה",],
                },
          'participle':
                {"mascsg":
                [rad1,"ו",holem,rad2,tsere,rad3,],
                "femsg":
                [rad1,"ו",holem,rad2,segol,rad3,segol,"ת",],
                "mascpl":
                [rad1,"ו",holem,rad2,sheva,rad3,hireq,"י","ם",],
                "fempl":
                [rad1,"ו",holem,rad2,sheva,rad3,"ו",holem,"ת",],
                },
          'infinitive':
                {'absolute':'none',
                  "construct":["ל",pataj,rad1,"ֲ",rad2,holem,rad3,],
                },},
              "nifal":
                    {'perfect':
                {"Isg":
                ["נ",segol,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,hireq,"י",],
                "Ipl":
                ["נ",segol,rad1,sheva,rad2,pataj,rad3,sheva,"נ","ו",daguesh,],
                "IIsgm":
                ["נ",segol,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,qamets,],
                "IIsgf":
                ["נ",segol,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,sheva,],
                "IIplm":
                ["נ",segol,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ם",],
                "IIplf":
                ["נ",segol,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ן",],
                "IIIsgm":
                ["נ",segol,rad1,sheva,rad2,pataj,rad3,],
                "IIIsgf":
                ["נ",segol,rad1,sheva,rad2,sheva,rad3,qamets,"ה",],
                "IIIplm":
                ["נ",segol,rad1,sheva,rad2,sheva,rad3,"ו",daguesh,],
                "IIIplf":
                ["נ",segol,rad1,sheva,rad2,sheva,rad3,"ו",daguesh,],
                },
        'imperfect':
               {"Isg":
                ["א",tsere,rad1,qamets,rad2,tsere,rad3,],
                "Ipl":
                ["נ",tsere,rad1,qamets,rad2,tsere,rad3,],
                "IIsgm":
                ["ת",daguesh,tsere,rad1,qamets,rad2,tsere,rad3,],
                "IIsgf":
                ["ת",daguesh,tsere,rad1,qamets,rad2,sheva,rad3,hireq,"י",],
                "IIplm":
                ["ת",daguesh,tsere,rad1,qamets,rad2,sheva,rad3,"ו",daguesh,],
                "IIplf":
                ["ת",daguesh,tsere,rad1,qamets,rad2,pataj,rad3,sheva,"נ",qamets,"ה",],
                "IIIsgm":
                ["י",tsere,rad1,qamets,rad2,tsere,rad3,],
                "IIIsgf":
                ["ת",daguesh,tsere,rad1,qamets,rad2,tsere,rad3,],
                "IIIplm":
                ["י",tsere,rad1,qamets,rad2,sheva,rad3,"ו",daguesh,],
                "IIIplf":["ת",daguesh,tsere,rad1,qamets,rad2,pataj,rad3,sheva,"נ",qamets,"ה",],
                },
  'imperative': {"IIsgm":
                ["ה",tsere,rad1,qamets,rad2,tsere,rad3,"!","‏",],
                "IIsgf":
                ["ה",tsere,rad1,qamets,rad2,sheva,rad3,hireq,"י","!","‏",],
                "IIplm":
                ["ה",tsere,rad1,qamets,rad2,sheva,rad3,"ו",daguesh,"!","‏",],
                "IIplf":
                ["ה",tsere,rad1,qamets,rad2,pataj,rad3,sheva,"נ",qamets,"ה","!","‏",],
                },'participle': {"mascsg":
                ["נ",segol,rad1,sheva,rad2,qamets,rad3,],
                "femsg":
                ["נ",segol,rad1,sheva,rad2,segol,rad3,segol,"ת",],
                "mascpl":
                ["נ",segol,rad1,sheva,rad2,qamets,rad3,hireq,"י","ם",],
                "fempl":
                ["נ",segol,rad1,sheva,rad2,qamets,rad3,"ו",holem,"ת",],
                },
    'infinitive':{'absolute':'none',
                  "construct":["ל",sheva,"ה",tsere,rad1,qamets,rad2,tsere,rad3,],
                },},
              "hifil":
                    {'perfect':
              {"Isg":
              ["ה",segol,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,hireq,"י",],
              "Ipl":
              ["ה",segol,rad1,sheva,rad2,pataj,rad3,sheva,"נ","ו",daguesh,],
              "IIsgm":
              ["ה",segol,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,qamets,],
              "IIsgf":
              ["ה",segol,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,sheva,],
              "IIplm":
              ["ה",segol,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ם",],
              "IIplf":
              ["ה",segol,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ן",],
              "IIIsgm":
              ["ה",segol,rad1,sheva,rad2,hireq,"י",rad3,],
              "IIIsgf":
              ["ה",segol,rad1,sheva,rad2,hireq,"י",rad3,qamets,"ה",],
              "IIIplm":
              ["ה",segol,rad1,sheva,rad2,hireq,"י",rad3,"ו",daguesh,],
              "IIIplf":
              ["ה",segol,rad1,sheva,rad2,hireq,"י",rad3,"ו",daguesh,],
              },
      'imperfect':
              {"Isg":
              ["א",pataj,rad1,sheva,rad2,hireq,"י",rad3,],
              "Ipl":
              ["נ",pataj,rad1,sheva,rad2,hireq,"י",rad3,],
              "IIsgm":
              ["ת",daguesh,pataj,rad1,sheva,rad2,hireq,"י",rad3,],
              "IIsgf":
              ["ת",daguesh,pataj,rad1,sheva,rad2,hireq,"י",rad3,hireq,"י",],
              "IIplm":
              ["ת",daguesh,pataj,rad1,sheva,rad2,hireq,"י",rad3,"ו",daguesh,],
              "IIplf":
              ["ת",daguesh,pataj,rad1,sheva,rad2,tsere,rad3,sheva,"נ",qamets,"ה",],
              "IIIsgm":
              ["י",pataj,rad1,sheva,rad2,hireq,"י",rad3,],
              "IIIsgf":
              ["ת",daguesh,pataj,rad1,sheva,rad2,hireq,"י",rad3,],
              "IIIplm":
              ["י",pataj,rad1,sheva,rad2,hireq,"י",rad3,"ו",daguesh,],
              "IIIplf":
              ["ת",daguesh,pataj,rad1,sheva,rad2,tsere,rad3,sheva,"נ",qamets,"ה",],
              },
      'imperative': {"IIsgm":
              ["ה",pataj,rad1,sheva,rad2,tsere,rad3,],
              "IIsgf":
              ["ה",pataj,rad1,sheva,rad2,hireq,"י",rad3,hireq,"י",],
              "IIplm":
              ["ה",pataj,rad1,sheva,rad2,hireq,"י",rad3,"ו",daguesh,],
              "IIplf":
              ["ה",pataj,rad1,sheva,rad2,tsere,rad3,sheva,"נ",qamets,"ה",],
              },
      'participle': {"mascsg":
              ["מ",pataj,rad1,sheva,rad2,hireq,"י",rad3,],
              "femsg":
              ["מ",pataj,rad1,sheva,rad2,hireq,"י",rad3,qamets,"ה",],
              "mascpl":
              ["מ",pataj,rad1,sheva,rad2,hireq,"י",rad3,hireq,"י","ם",],
              "fempl":
              ["מ",pataj,rad1,sheva,rad2,hireq,"י",rad3,"ו",holem,"ת",],
              },
      'infinitive':
              {'absolute':'none',
              "construct":["ל",sheva,"ה",pataj,rad1,sheva,rad2,hireq,"י",rad3,],
            },},
              "hofal":
                    {'perfect':
                                {"Isg":
                                ["ה",qamets,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,hireq,"י",],
                                "Ipl":
                                ["ה",qamets,rad1,sheva,rad2,pataj,rad3,sheva,"נ","ו",daguesh,],
                                "IIsgm":
                                ["ה",qamets,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,qamets,],
                                "IIsgf":
                                ["ה",qamets,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,sheva,],
                                "IIplm":
                                ["ה",qamets,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ם",],
                                "IIplf":
                                ["ה",qamets,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ן",],
                                "IIIsgm":
                                ["ה",qamets,rad1,sheva,rad2,pataj,rad3,],
                                "IIIsgf":
                                ["ה",qamets,rad1,sheva,rad2,sheva,rad3,qamets,"ה",],
                                "IIIplm":
                                ["ה",qamets,rad1,sheva,rad2,sheva,rad3,"ו",daguesh,],
                                "IIIplf":
                                ["ה",qamets,rad1,sheva,rad2,sheva,rad3,"ו",daguesh,],},
                    'imperfect':
                                {"Isg":
                                ["א",qamets,rad1,sheva,rad2,pataj,rad3,],
                                "Ipl":
                                ["נ",qamets,rad1,sheva,rad2,pataj,rad3,],
                                "IIsgm":
                                ["ת",daguesh,qamets,rad1,sheva,rad2,pataj,rad3,],
                                "IIsgf":
                                ["ת",daguesh,qamets,rad1,sheva,rad2,sheva,rad3,hireq,"י",],
                                "IIplm":
                                ["ת",daguesh,qamets,rad1,sheva,rad2,sheva,rad3,"ו",daguesh,],
                                "IIplf":
                                ["ת",daguesh,qamets,rad1,sheva,rad2,pataj,rad3,sheva,"נ",qamets,"ה",],
                                "IIIsgm":
                                ["י",qamets,rad1,sheva,rad2,pataj,rad3,],
                                "IIIsgf":
                                ["ת",daguesh,qamets,rad1,sheva,rad2,pataj,rad3,],
                                "IIIplm":
                                ["י",qamets,rad1,sheva,rad2,sheva,rad3,"ו",daguesh,],
                                "IIIplf":
                                ["ת",daguesh,qamets,rad1,sheva,rad2,pataj,rad3,sheva,"נ",qamets,"ה",],},
                    'imperative':
                                {"IIsgm":
                                ["n","o","n","e",],
                                "IIsgf":
                                'none',
                                "IIplm":
                                'none',
                                "IIplf":
                                'none',},
                    'participle':
                                {"mascsg":
                                ["מ",qamets,rad1,sheva,rad2,qamets,rad3,],
                                "femsg":
                                ["מ",qamets,rad1,sheva,rad2,segol,rad3,segol,"ת",],
                                "mascpl":
                                ["מ",qamets,rad1,sheva,rad2,qamets,rad3,hireq,"י","ם",],
                                "fempl":
                                ["מ",qamets,rad1,sheva,rad2,qamets,rad3,"ו",holem,"ת",],},
                    'infinitive':
                                {"construct":
                                ["n","o","n","e",],
                                "absolute":
                                'none',},},
                                },};

function conjugate (type, verbform, time, person){
                  try {var x = conjdict[type][verbform][time][person].join('');}
                  catch {var x = conjdict[type][verbform][time][person];}
                  return x};

window.onload = function() {
document.getElementById("root").innerHTML = roott;
document.getElementById("form").innerHTML = binyan;
document.getElementById("meaning").innerHTML = meaning;
document.getElementById("enunciar").innerHTML = conjugate(type,binyan,'perfect','IIIsgm');
document.getElementById("a4").innerHTML = conjugate(type,binyan,'perfect','IIIsgm');
document.getElementById("a1").innerHTML = conjugate(type,binyan,'perfect','Isg');
document.getElementById("a2").innerHTML = conjugate(type,binyan,'perfect','IIsgm');
document.getElementById("a3").innerHTML = conjugate(type,binyan,'perfect','IIsgf');
document.getElementById("a5").innerHTML = conjugate(type,binyan,'perfect','IIIsgf');
document.getElementById("a6").innerHTML = conjugate(type,binyan,'perfect','Ipl');
document.getElementById("a7").innerHTML = conjugate(type,binyan,'perfect','IIplm');
document.getElementById("a8").innerHTML = conjugate(type,binyan,'perfect','IIplf');
document.getElementById("a9").innerHTML = conjugate(type,binyan,'perfect','IIIplm');
document.getElementById("a10").innerHTML = conjugate(type,binyan,'perfect','IIIplf');
document.getElementById("b1").innerHTML = conjugate(type,binyan,'imperfect','Isg');
document.getElementById("b2").innerHTML = conjugate(type,binyan,'imperfect','IIsgm');
document.getElementById("b3").innerHTML = conjugate(type,binyan,'imperfect','IIsgf');
document.getElementById("b4").innerHTML = conjugate(type,binyan,'imperfect','IIIsgm');
document.getElementById("b5").innerHTML = conjugate(type,binyan,'imperfect','IIIsgf');
document.getElementById("b6").innerHTML = conjugate(type,binyan,'imperfect','Ipl');
document.getElementById("b7").innerHTML = conjugate(type,binyan,'imperfect','IIplm');
document.getElementById("b8").innerHTML = conjugate(type,binyan,'imperfect','IIplf');
document.getElementById("b9").innerHTML = conjugate(type,binyan,'imperfect','IIIplm');
document.getElementById("b10").innerHTML = conjugate(type,binyan,'imperfect','IIIplf');
document.getElementById("c1").innerHTML = conjugate(type,binyan,'imperative','IIsgm');
document.getElementById("c2").innerHTML = conjugate(type,binyan,'imperative','IIsgf');
document.getElementById("c3").innerHTML = conjugate(type,binyan,'imperative','IIplm');
document.getElementById("c4").innerHTML = conjugate(type,binyan,'imperative','IIplf');
document.getElementById("d1").innerHTML = conjugate(type,binyan,'participle','mascsg');
document.getElementById("d2").innerHTML = conjugate(type,binyan,'participle','femsg');
document.getElementById("d3").innerHTML = conjugate(type,binyan,'participle','mascpl');
document.getElementById("d4").innerHTML = conjugate(type,binyan,'participle','fempl');
document.getElementById("e1").innerHTML = conjugate(type,binyan,'infinitive','absolute');
document.getElementById("e2").innerHTML = conjugate(type,binyan,'infinitive','construct');
};
