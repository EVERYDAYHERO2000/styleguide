/*
const - константы
let - переменная в областе видимости внутри {}
var - старая хрень

let iterator - просто перменные (расходный материал)

let Iterator - классы
let BottonGroup - классы

const ITERATOR - важные костанты, входные данные..

let bottonGroup — объединение слов (способы)
let botton_group

let $body - элементы DOM 
*/

/*
render - отображение
     |
     -- css = stylsheet
     -- DOM = html
*/

/*
const myFunction = function(){
    console.log('Hello world!!!');
}
*/

/*
function myFunction(){
    console.log('Hello world!!!');
}
*/

/*
const myFunction = () => console.log('Hello world!!!');
*/

/*
const myFunction = new Function('console.log("Hello world!!!")');
*/

/*
//примитивы (коробочки) ( Приводимые типы данных )
const number = 121212;
const string = 'строка'; // '12'
const bool = true;
let undef = undefined; 

const fn = () => console.log('function'); 

//объекты (полка)
const arr = [1,2,3,'строка', number]; //массив

const arr1 = {
    0 : 1,
    1 : 2,
    3 : 3,
    4 : 'строка'
}

const obj = {
    name : 'Маша',
    age : [arr,31,16]
};

let nul = null; // === let nul;

//obj['name'] === obj.name - обращение к ключу объекта


let a = '1';
let b = 1;
let c = true // true == 1, false == 0
let d = ' ';
let f = {}; 
let e = {}; 

console.log( b );
*/

/*
function calc(a,b) {
    let result = Number(a) + Number(b);
    return result
}
*/

/*
const calc = (a,b) => {
    let result = a + b;
    result = result * 2;
    return result;
};


console.log(calc( 2,2 ));
*/

/*
const myColor = (function(a,b){
    return a + '-' + b;
})('зелёный','красный');

console.log(myColor)
*/

/*
const myColor = function(b){
    console.log(this)
    return this.name + ' ' + b;
};

function Color(name, covered) {
    this.name = name;
    this.mod = myColor;
    this.covered = covered || false;

    return this;
}

const green = new Color('Зеленый', true);
const blue = new Color('Голубой');

new myColor(121)
*/

/*
const Thing = function(){

    this.life = function(){
        console.log('Меня зовут ' + this.name)
        return this;
    }

    this.elder = function(){
        this.age +=1;
        return this;
    }

    this.rename = function(newname){
        this.name = newname;
        return this;
    }
    //((age) => age++ )(this.age) 

    return this
}


const People = function(name, age, sex){

    this.__proto__ = new Thing();
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.initials = name[0];
    
    return this;
}

const people1 = new People('Ilya', 34, 'm');
const people2 = new People('Maria', 32, 'f');

people1.elder().rename('Ilya').life()

console.log(people1)

//people1.age = 32

//console.log(people1, people2);

*/

/*
const age = 33;

if (age <= 32){


} else {


}

switch (color) {
    case 'green': 
        color = 'red'
        break;
    
    case 'red':
        color = 'green'
        break;    
}
*/
/*
let a = 1, 
    b = 2;

const color = (a > b) ? 'Зеленый' : (b > 10) ? 'Красный' : 'Желтый';

    if (a > b) {
        color = 'Зеленый'
    } else {

        if (b > 10) {
            color = 'Красный'
        } else {
            color = 'Желтый'
        }
    }

const color = a || 'Зеленый'    
*/

function Color(name, lead, sulfur, carbonate, stable) {
    this.name = name;
    this.lead = lead;
    this.sulfur = sulfur;
    this.carbonate = carbonate;
    this.stable = stable;

    return this;
} 

const colors = [
    new Color('lead white', true, false, true, false ),
    new Color('lead-tin-yellow', true, false, false, false),
    new Color('massicot', true, false, false, false),
    new Color('minium', true, false, false, false),
    new Color('azurite', false, true, true, false)
]

for (let i = 0; i < colors.length; i++) {
    if (colors[i].carbonate == true) {
        console.log(colors[i].name);
    }
}


//console.log(colors)

