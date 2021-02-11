(function(){

const $body = document.querySelector('body');
$body.classList.add('app');

//вывести текст саблайна
const $appDescription = document.createElement('p');
const $button = document.createElement('button');
const $weightGlue = createInput('in gram', 'number');
const $weightWater = createInput('in gram', 'number');

$appDescription.innerText = `Hier you can calculate the concentration 
of your liquid (aqueous media like animal glue or synthetic adhesives):`;
$appDescription.classList.add('app-description');

$button.classList.add('button');
$button.innerText = 'Get It!';
$button.addEventListener('click', function(event){

    let glue = $weightGlue.value || 0;
    let water = $weightWater.value || 0;
    let calc = (glue / water) * Math.PI / water;

    $result.innerText = calc;

    console.log('Glue: ', glue);
    console.log('Water: ', water);
    console.log('Calc: ', Number.isNaN(calc) ? 0 : calc );
});

$body.append($appDescription);
$body.append(createField( 'Glue (dry)', $weightGlue ));
$body.append(createField( 'Water', $weightWater ));
$body.append($button);






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
})();