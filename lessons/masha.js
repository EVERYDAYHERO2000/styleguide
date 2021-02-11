/* //first opportunity
const needWater = function () {
    let weightOfWater;

    if (document.getElementById("needWater")) {
        const a = document.getElementById("glueWeightId").value;
        const b = document.getElementById("concentrationId").value;
        weightOfWater = ((+a*100)/ +b) - +a;
        weightOfWater=weightOfWater.toFixed(2);
        document.getElementById(" ").innerText= `You need to take ${weightOfWater} grams of water`
    } else {
        console.log(`Something goes wrong. weightOfWater = ${weightOfWater}`);
    }

    return weightOfWater;

};

//second opportunity
function needWater () {
//same like the first inside the {}
};

//third opportynity
const needWater = () => {
//same like the first inside the {}    
};

//fourth opportunity  
/* а как здесь? это вот вообще не понятно. Есть два аргумента, но с ними, получается, нельзя больше,
чем одну математическую операцию проводить? */

/*
const needWater = new Function (a,b) {
    return  (+a*100) / +b - +a ;
};

const needWater = new Function ('return  (+a*100) / +b - +a ;', a, b);

needWater (document.getElementById("glueWeightId").value, document.getElementById("concentrationId").value);

console.log (needWater)

// Objects:

//вредители
const VARMENT= {
    type: ['insect', 'gnawer']
    };
    
    const insects = {
    subspecies: ['silverfish', 'paperfish', 'anobiidae'],
    struggle: ['nitrogen fumigation', 'freezing', 'heat', 'pesticides', 'poison']
    };
    
    const gnawers = {
    subspecies: ['mouse', 'rat'],
    struggle: ['nitrogen fumigation', 'freezing', 'heat', 'pesticides', 'poison']
    };
    
//краски по цветам
const COLORS = {
    white: [ 'lead white', 'zinc white', 'titan white', 'lithopone', 'chalk'],
    yellow: ['cadmium yellow', 'yellow citrone', 'lead tin yellow'],
    ochre: [ 'light ochre', 'dark ochre'],
    red: ['ironoxide', 'cadmium red'],
    purple: ['hematite', 'kaput-mortuum'],
    violet: ['fluorite', 'cobalt violet'] ,
    brown: ['vam dycke brown', 'umber'],
    black: ['peach black', 'blue black']
    }
    
    COLORS.violet

//Краски, другая организация, согласно химическому составу
    
function Color(name, lead, sulfur, carbonate, stable) {
    this.name = name;
    this.lead = lead;
    this.sulfur = sulfur;
    this.carbonate = carbonate;
    this.stable = stable;

    return this;
} 

const COLORS = {
    lead: [ 'lead white', 'lead-tin-yellow', 'massicot', 'minium'],
    sulfur: ['cadmium yellow', 'gypsum', 'orpiment', 'realgar', 'cinnabar', 'vermilion', 
            'ultramarine'],
    carbonate: ['azurite', 'malachite', 'chalk'],
    stable: [ 'ocher', 'sienna' ]
     }

const c = COLORS.lead;
const d = COLORS.sulfur;
const e = COLORS.carbonate; //reaction with acids
const f = 'alkali'; //reaction with dif. alkali -> degradation (Pigments are not good for Wall-paintings)
const g = 'acid';  //reaction with dif. acids -> degradation (Not good to use with Oils?)
const l = 'light'; // lightening under UV-Rays

function Mixcolors() {
    if (c + d) {
    console.log ('Blackening');
    } else {
    return ('You can use it!');
} };

Mixcolors();

*/

// DE Variante
// Конструктор
function Farbe (name, type, blei, schwefel, karbonat, stabil, modern, giftig) {
    this.type = type;
    this.name = name;
    this.blei = blei;
    this.schwefel = schwefel;
    this.karbonat = karbonat;
    this.stabil = stabil;
    this.modern = modern;
    this.giftig = giftig;
    //organisch hinzufügen? Siehe ab Gelb
    //Kupfer? -> +Schwefel = verschwärzung
    //Lichtbeständig?

    return this;
}

let currentLang = 'de'

const words = {
    chalk : {
        ru: 'Мел',
        de: 'Kreide',
        eng: 'Chalk'
    },
    gypsum : {
        ru: 'Гипс',
        de: 'Gips',
        eng: 'Gypsum'
    }
}

// Массив
const farben = [
    new Farbe (words.chalk[currentLang] , 'white', false, false, true, true, false, false),
    new Farbe (words.gypsum[currentLang], 'white', false, true, false, false, false, false),
    new Farbe ('Bleiweiß', 'white', true, false, true, false, false, true),
    new Farbe ('Lithopone', 'white', false, true, false, false, true, false),
    new Farbe ('Zinkweiß', 'white', false, false, false, true, true, false),
    new Farbe ('Chinesischweiß', 'white', false, false, false, true, true, false),
    new Farbe ('Titanweiß', 'white', false, false, false, true, true, false),

    new Farbe ('Auripigment', 'yellow', false, true, false, false, false, true),
    new Farbe ('Massicot', 'yellow', true, false, false, false, false, true),
    new Farbe ('Bleizinngelb', 'yellow', true, false, false, false, false, true),
    new Farbe ('Gelber Ocker', 'yellow', false, false, false, true, false, false),
    new Farbe ('Sienna', 'yellow', false, false,false, true, false, false),
    new Farbe ('Marsgelb', 'yellow', false, false, false, true, true, false),
    new Farbe ('Kadmiumgelb', 'yellow', false, true, false, false, true, false),
    new Farbe ('Chromgelb', 'yellow', true, true, false, false, true, true),
    new Farbe ('Zinkgelb', 'yellow', false, false, false, false, true, false),
    new Farbe ('Strontiumgelb', 'yellow', false, false, false, false, true, false),
    new Farbe ('Quercitron', 'yellow', false, false, false, false, true, false),
    new Farbe ('Gelbkraut', 'yellow', false, false, false, false, false, false),
    new Farbe ('Gelbbeeren', 'yellow', false, false, false, false, false, false),
    new Farbe ('Echter Saffran', 'yellow', false, false, false, false, false, false),
    new Farbe ('Gummigut', 'yellow', false, false, false, false, true, false),

    new Farbe ('Zinnober', 'red', false, true, false, false, false, true),
    new Farbe ('Mennige', 'red', true, false, false, false, false, true),
    new Farbe ('Roter Ocker', 'red', false, false, false, true, false, false),
    new Farbe ('Caput Mortuum', 'red', false, false, false, true, false,  false),
    new Farbe ('Realgar', 'red', false, true, false, false, false, true),
    new Farbe ('Kadmiumrot', 'red', false, false, false, false, true, false),
    new Farbe ('Chromrot', 'red', true, false, false, false, true, false),
    new Farbe ('Rotholz', 'red', false, false, false, false, false, false),
    new Farbe ('Kermes', 'red', false, false, false, false, false, false),
    new Farbe ('Koschenille', 'red', false, false, false, true, false, false),
    new Farbe ('Karminlack', 'red', false, false, false, true, false, false),
    new Farbe ('Drachenblut', 'red', false, false, false, true, false, false),
    new Farbe ('Gummilack', 'red', false, false, false, true, false, false),
    new Farbe ('Krapplack', 'red', false, false, false, false, false, false),
    new Farbe ('Alizarin', 'red', false, false, false, false, true, false),

    new Farbe ('Malachit', 'green', false, false, true, false, false, true),
    new Farbe ('Grünspan', 'green', false, false, false, false, false, false),
    new Farbe ('Grüne Erde', 'green', false, false, false, true, false, false),
    new Farbe ('Schweinfurter Grün', 'green', false, false, false, false, true, true),
    new Farbe ('Chromgrün', 'green', true, false, false, false, true, true),
    new Farbe ('Chromoxidgrün', 'green', false, false, false, true, true, false),

    new Farbe ('Azurit', 'blue', false, false, true, false, false, true),
    new Farbe ('Naturliches Ultramarin', 'blue', false, true, false, false, false, false),
    new Farbe ('Smalte', 'blue', false, false, false, false, false, false),
    new Farbe ('Indigo', 'blue', false, false, false, true, false, false),
    new Farbe ('Synthetisches Ultramarin', 'blue', false, true, false, true, false),
    new Farbe ('Preusisch Blau', 'blue', false, false, false, false, true, false),
    new Farbe ('Ägyptisch Blau', 'blue', false, false, false, true, false, false),

    new Farbe ('Han Purpur', 'violet', false, false, false, true, false, false),
    new Farbe ('Violett-braun Ocker', 'violet'),
    new Farbe ('Fluorit', 'violet', false, false, false, true, false, false),
    new Farbe ('Schneckenpurpur', 'violet', false, false, false, false, false, false),

    new Farbe ('Umbra Natur', 'brown', false, false, false, true, false, false),
    new Farbe ('Sienna', 'brown', false, false, false, true, false, false),
    new Farbe ('Van Dyck Braun', 'brown', false, false, false, false, false, false),
    new Farbe ('Asphalt', 'brown', false, true, true, false, true, false),
    new Farbe ('Bitumen', 'brown', false, true, true, false, true, false),
    new Farbe ('Bister', 'brown', false, false, false, true, false, false),
    new Farbe ('Sepia', 'brown', false, false, false, true, true, false),

    new Farbe ('Knochen Schwarz', 'black', false, false, true, true, false, false),
    new Farbe ('Rebenschwarz', 'black', false, false, false, true, false, false),
    new Farbe ('Kohle', 'black', false, true, false, true, false, false),
    new Farbe ('Graphit', 'black', false, false, false, true, false, false),
    new Farbe ('Schwarze Kreide', 'black', false, false, false, true, false, false),
    new Farbe ('Lampenschwarz', 'black', false, false, false, true, false, false),
    new Farbe ('Eisenoxidschwarz', 'black', false, false, false, true, true, false),
    new Farbe ('Marsschwarz', 'black', false, false, false, true, true, false),
    new Farbe ('Anilinschwarz', 'black', false, false, false, true, true, true),
    new Farbe ('Vantablack', 'black', false, false, false, true, true, false)

]

console.log(farben);

// Konstruktor: Suche nach der Erstfassungsphase
function Probe (name, stein, grundierungdunkel, grundierunghell, azurit, malachite, bleiweiß) {
    this.name = name;
    this.stein = stein;
    this.grundierungdunkel = grundierungdunkel;
    this.grundierunghell = grundierunghell;
    //Zinnober?
    this.azurit = azurit;
    this.malachite = malachite;
    this.bleiweiß = bleiweiß;

    return this;
}

//Massiv
const Proben = [
   //Proben 2019
    new Probe ('775/19', true, true, true, true, false, true),
    new Probe ('776/19', true, true, true, true, false, true),
    new Probe ('777/19', true, false, false, false, false, false),
    new Probe ('778/19 A', false, false, false, false, false, false),
    new Probe ('778/19 B', false, false, false, false, false, false),
    new Probe ('779/19', false, true, false, false, true, true),
    new Probe ('780/19', false, true, false, true, true, true),
    new Probe ('781/19', false, false, false, false, false, false),
    new Probe ('782/19', false, true, false, false, false, false),
    new Probe ('783/19', false, false, false, false, false, false),
    new Probe ('784/19', true, true, true, false, false, true),
    new Probe ('785/19', false, true, false, true, false, false),
    new Probe ('786/19', false, true, false, false, false, false),
    new Probe ('787/19', true, false, false, false, false, false),
    new Probe ('788/19', true, true, true, true, false, true),
    new Probe ('789/19', false, false, false, false, false, false),
    new Probe ('800/19', true, true, true, true, false, true),
    new Probe ('801/19', true, true, false, false, false, false),
    new Probe ('802/19', false, true, false, false, false, true)
]    

for (let i = 0; i < Proben.length; i++) {
    if (Proben[i].malachite == true) {
        console.log(Proben[i].name);
    }
};

