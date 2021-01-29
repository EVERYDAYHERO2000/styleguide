//first opportunity
const needWater = function () {
    if (document.getElementById("needWater")) {
        const a = document.getElementById("glueWeightId").value;
        const b = document.getElementById("concentrationId").value;
        let weightOfWater = ((+a*100)/ +b) - +a;
        weightOfWater=weightOfWater.toFixed(2);
        console.log(weightOfWater);
        document.getElementById(" ").innerText= `You need to take ${weightOfWater} grams of water`
    } else {
        alert('Something goes wrong');
    }
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

const needWater = new Function ('a','b'), {
    return  (+a*100) / +b - +a ;
};

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
    
    const COLORS = {
    lead: [ 'lead white', 'lead-tin-yellow', 'massicot'],
    sulfur: [ 'cadmium yellow', 'gipsum', 'oripigment', 'realgar'],
    carbonate: ['azurite', 'malachite', 'chalk']
     }

const c = COLORS.lead;
const d = COLORS.sulfur;

function Mixcolors() {
    if (c + d) {
    console.log ('Blackening');
    } else {
    return ('You can use it!');
} };

Mixcolors();