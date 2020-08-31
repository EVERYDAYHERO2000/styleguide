
import Calculator from './calculator.js';

const temp = {
    salary : 0,
    type : 'gross'
}

const calculator = new Calculator(temp.salary, temp.type);

const $body = document.querySelector('body');
const $form = document.createElement('div');
const $result = document.createElement('div');
const $salary = document.createElement('input');
const $switcher = document.createElement('select');

$salary.setAttribute('type', 'number');
$salary.classList.add('salary');

$salary.addEventListener('keyup', function(event){
    temp.salary = (this.value.length) ? +(this.value) : 0;

    updateResult(temp.salary, temp.type);
})

$switcher.classList.add('switcher');

const options = [
    {
        value : 'gross',
        title : 'Зарплата до вычета налогов (гросс)'
    },
    {
        value : 'net',
        title : 'Зарплата на руки (нетт)'
    }
];

for (let opt in options) {

    const $option = document.createElement('option');
    $option.value = options[opt].value;
    $option.innerText = options[opt].title;
    
    $switcher.append($option);

}

$switcher.addEventListener('change', function(event){
    temp.type = this.options[this.selectedIndex].value;

    updateResult(temp.salary, temp.type);
});

$form.classList.add('form');
$form.append($salary, $switcher);

$result.classList.add('result');

const resultKeys = {
    gross              : 'До вычета налогов',
    grossPerPeriod     : 'До вычета налогов за период',
    net                : 'После вычета налогов (на руки)',
    netPerPeriod       : 'После вычета налогов за период',
    ops                : 'Пенсионное страхование',
    opsPerPeriod       : 'Пенсионное за период',
    oms                : 'Медицинское страхование',
    omsPerPeriod       : 'Медицинское страхование за период',
    fss                : 'Социальное страхование' ,
    fssPerPeriod       : 'Социальное страхование за период',
    insurance          : 'Страховка',
    insurancePerPeriod : 'Страховка за период',
    ndfl               : 'НДФЛ',
    ndflPerPeriod      : 'НДФЛ за период',
    fot                : 'Страховая часть',
    fotPerPeriod       : 'Страховая часть за период',
    nalogAll           : 'Все налоги',
    nalogAllPerPeriod  : 'Все налоги за период',
    fullCost           : 'Вся стоимость',
    fullCostPerPeriod  : 'Вся стоимость за период'
}

for (let key in resultKeys) {
    const $resultItem = document.createElement('div');
    const $resultItem__title = document.createElement('div');
    const $resultItem__value = document.createElement('div');
    
    $resultItem.classList.add('result-item');
    $resultItem.setAttribute('data-name', key);

    $resultItem__title.classList.add('result-item__title');
    $resultItem__value.classList.add('result-item__value');

    $resultItem__title.innerText = resultKeys[key];
    $resultItem__value.innerText = calculator.result[key];

    $resultItem.append($resultItem__title, $resultItem__value);
    $result.append($resultItem);
}



function updateResult (salary, type) {

    const $resultItems = document.querySelectorAll('.result-item');

    for (let $el of $resultItems) {

        const $resultItem__value = $el.querySelector('.result-item__value');
        const dataName = $el.getAttribute('data-name');
        const value = calculator.calc(salary, type).result[dataName];

        $resultItem__value.innerHTML = formatUnit(value) + ' руб.';

    }

}

function formatUnit(value) {
    value = (/\.\d/.test(value)) ? value + '' : value + '.00';
    value = (/\.\d{2}/.test(value)) ? value : value + '0';
    value = (value).replace(/\d(?=(\d{3})+\.)/g, '$& ');

    var cost = value.split('.');
    value = `<span class="cost__first">${cost[0]}</span><span class="cost__last">.${cost[1]}</span>`;

    return value;
  }



$body.append($form, $result);
