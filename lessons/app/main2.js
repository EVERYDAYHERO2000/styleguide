(function(){

const $body = document.querySelector('body');
$body.classList.add('app');

// subline´s text
const $appDescription = document.createElement('p');
const $button = document.createElement('button');
const $weightGlue = createInput('in gram', 'number');
const $concentration = createInput('%', 'number');
const $result = document.createElement('p');


$appDescription.textContent = `Here you can calculate the weight of 
water, if you know the weight of dry glue
and the concentration that you need: `;
$appDescription.classList.add('app-description');

$button.classList.add('button');
$button.innerText = 'Get It!'
$button.addEventListener('click', function(event){

    let glue = +$weightGlue.value || 0;
    let concentration = +$concentration.value || 0;
    let calc = ( glue == 0 && concentration == 0) ? 0 : (glue*100)/concentration - glue;
    calc = calc.toFixed(2);
    $result.innerHTML = `<span> Your need to take ${calc} grams of water </span>`;
});
$result.classList.add('result');

$body.append($appDescription);
$body.append(createField( 'Glue (dry) ', $weightGlue));
$body.append(createField( 'Concentration ', $concentration));
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
    $description.classList.add('form-field__decription');
    $description.innerText = name;
    $field.append($description);
    $field.append($domElement);
    $field.classList.add('form-field');
    return $field;
}

})();
