(function(){

const $body = document.querySelector('body');
$body.classList.add('app');

//вывести текст саблайна
const $appDescription = document.createElement('p');
const $button = document.createElement('button');
const $weightGlue = createInput('in gram', 'number');
const $weightWater = createInput('in gram', 'number');
const $result = document.createElement('p');


$appDescription.innerText = `Here you can calculate the concentration 
of your liquid (aqueous media like animal glue or synthetic adhesives):`;
$appDescription.classList.add('app-description');

$button.classList.add('button');
$button.innerText = 'Get It!';
$button.addEventListener('click', function(event){

    let glue = +$weightGlue.value || 0;
    let water = +$weightWater.value || 0;
    let calc = (water == 0 && glue == 0) ? 0 : (glue/ (glue + water) ) * 100;
    calc = calc.toFixed(2);
    $result.innerHTML = `<span>Your concentration is ${calc} %</span>`;
});
$result.classList.add('result');


$body.append($appDescription);
$body.append(createField( 'Glue (dry)', $weightGlue ));
$body.append(createField( 'Water', $weightWater ));
$body.append($button);
$body.append($result);



function createInput(placeholder, type){
    type = type || 'text';
    placeholder = placeholder || '';
    const $input = document.createElement('input');
    $input.setAttribute('type', type);
    $input.setAttribute('placeholder', placeholder);
    $input.classList.add('input');
    return $input;
}

function createField(name, $domElement){
    const $field = document.createElement('div');
    const $description = document.createElement('div');
    $description.classList.add('form-field__description');
    $description.innerText = name;
    $field.append($description);
    $field.append($domElement);
    $field.classList.add('form-field');
    return $field;
}


/*
function createField(name){
    const $field = document.createElement('div');
    $field.classList.add('form-field');
    $field.innerHTML = `<span>${name}</span>`;
    return $field;
}
*/

const tarnslation = {
    glue : {
        ru: 'Клей',
        de: 'Leim',
        eng: 'Glue'
    },
    water : {
        ru: 'Вода',
        de: 'Wasser',
        eng: 'Water'
    },
    button: {
        ru: 'Пиу!',
        de: 'Los!' ,
        eng: 'Get It!'
    },
    description: {
        ru: 'Здесь можно рассчитать концентрацию клеевого расствора на водной основе:',
        de: 'Hier können Sie die Konzentration Ihres Leimes ausrechnen:',
        eng: `Here you can calculate the concentration 
        of your liquid (aqueous media like animal glue or synthetic adhesives):`
    }
}


})();