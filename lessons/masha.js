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
function Farbe (name, blei, schwefel, karbonat, stabil, modern, giftig) {
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

// Массив
const farben = [
    new Farbe ('Kreide', false, false, true, true, false, false),
    new Farbe ('Gips', false, true, false, false, false, false),
    new Farbe ('Bleiweiß', true, false, true, false, false, true),
    new Farbe ('Lithopone', false, true, false, false, true, false),
    new Farbe ('Zinkweiß', false, false, false, true, true, false),
    new Farbe ('Chinesischweiß', false, false, false, true, true, false),
    new Farbe ('Titanweiß', false, false, false, true, true, false),

    new Farbe ('Auripigment', false, true, false, false, false, true),
    new Farbe ('Massicot', true, false, false, false, false, true),
    new Farbe ('Bleizinngelb', true, false, false, false, false, true),
    new Farbe ('Gelber Ocker', false, false, false, true, false, false),
    new Farbe ('Sienna', false, false,false, true, false, false),
    new Farbe ('Marsgelb', false, false, false, true, true, false),
    new Farbe ('Kadmiumgelb', false, true, false, false, true, false),
    new Farbe ('Chromgelb', true, true, false, false, true, true),
    new Farbe ('Zinkgelb', false, false, false, false, true, false),
    new Farbe ('Strontiumgelb', false, false, false, false, true, false),
    new Farbe ('Quercitron', false, false, false, false, true, false),
    new Farbe ('Gelbkraut', false, false, false, false, false, false),
    new Farbe ('Gelbbeeren', false, false, false, false, false, false),
    new Farbe ('Echter Saffran', false, false, false, false, false, false),
    new Farbe ('Gummigut', false, false, false, false, true, false),

    new Farbe ('Zinnober', false, true, false, false, false, true),
    new Farbe ('Mennige', true, false, false, false, false, true),
    new Farbe ('Roter Ocker', false, false, false, true, false, false),
    new Farbe ('Caput Mortuum',  false, false, false, true, false,  false),
    new Farbe ('Realgar', false, true, false, false, false, true),
    new Farbe ('Kadmiumrot', false, false, false, false, true, false),
    new Farbe ('Chromrot', true, false, false, false, true, false),
    new Farbe ('Rotholz', false, false, false, false, false, false),
    new Farbe ('Kermes', false, false, false, false, false, false),
    new Farbe ('Koschenille', false, false, false, true, false, false),
    new Farbe ('Karminlack', false, false, false, true, false, false),
    new Farbe ('Drachenblut', false, false, false, true, false, false),
    new Farbe ('Gummilack', false, false, false, true, false, false),
    new Farbe ('Krapplack', false, false, false, false, false, false),
    new Farbe ('Alizarin', false, false, false, false, true, false),

    new Farbe ('Malachit', false, false, true, false, false, true),
    new Farbe ('Grünspan', false, false, false, false, false, false),
    new Farbe ('Grüne Erde', false, false, false, true, false, false),
    new Farbe ('Schweinfurter Grün', false, false, false, false, true, true),
    new Farbe ('Chromgrün', true, false, false, false, true, true),
    new Farbe ('Chromoxidgrün', false, false, false, true, true, false),

    new Farbe ('Azurit', false, false, true, false, false, true),
    new Farbe ('Naturliches Ultramarin', false, true, false, false, false, false),
    new Farbe ('Smalte', false, false, false, false, false, false),
    new Farbe ('Indigo', false, false, false, true, false, false),
    new Farbe ('Synthetisches Ultramarin', false, true, false, true, false),
    new Farbe ('Preusisch Blau', false, false, false, false, true, false),
    new Farbe ('Ägyptisch Blau', false, false, false, true, false, false),

    new Farbe ('Han Purpur', false, false, false, true, false, false),
    new Farbe ('Violett-braun Ocker'),
    new Farbe ('Fluorit', false, false, false, true, false, false),
    new Farbe ('Schneckenpurpur', false, false, false, false, false, false),

    new Farbe ('Umbra Natur', false, false, false, true, false, false),
    new Farbe ('Sienna', false, false, false, true, false, false),
    new Farbe ('Van Dyck Braun', false, false, false, false, false, false),
    new Farbe ('Asphalt', false, true, true, false, true, false),
    new Farbe ('Bitumen', false, true, true, false, true, false),
    new Farbe ('Bister', false, false, false, true, false, false),
    new Farbe ('Sepia', false, false, false, true, true, false),

    new Farbe ('Knochen Schwarz', false, false, true, true, false, false),
    new Farbe ('Rebenschwarz', false, false, false, true, false, false),
    new Farbe ('Kohle', false, true, false, true, false, false),
    new Farbe ('Graphit', false, false, false, true, false, false),
    new Farbe ('Schwarze Kreide', false, false, false, true, false, false),
    new Farbe ('Lampenschwarz', false, false, false, true, false, false),
    new Farbe ('Eisenoxidschwarz', false, false, false, true, true, false),
    new Farbe ('Marsschwarz', false, false, false, true, true, false),
    new Farbe ('Anilinschwarz', false, false, false, true, true, true),
    new Farbe ('Vantablack', false, false, false, true, true, false)

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

