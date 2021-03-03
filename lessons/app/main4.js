    (function() {

    const $body = document.querySelector('body');
    $body.classList.add('app');    

    // subline´s text
    const $appDescription = document.createElement('p');
    const $button = document.createElement('button');
    const $initialConcentration = createInput('%', 'number');
    const $needConcentration = createInput('%', 'number');
    const $weightGlue = createInput('in gram', 'number')
    const $result = document.createElement('p');  

    $appDescription.innerHTML = ` <span> If you want to make the concentration 
    of your Glue lower, you can calculate it below: </span>`;
    //calculation in grams
    $appDescription.classList.add('app-description')

    $button.classList.add('button');
    $button.innerText = 'Get It!';
    $button.addEventListener('click', function(event){

        let initialConcentration = +$initialConcentration.value || 0;
        let needConcentration = +$needConcentration.value || 0;
        let needWater = initialConcentration - needConcentration ;
        let needGlue = needConcentration ;
        let weightGlue = +$weightGlue.value || 0;
        let weightWater = weightGlue/needGlue*needWater;
        $result.innerHTML = `<span> You need to take ${weightWater} grams of Water ` 
    });
    $result.classList.add('result');


    $body.append($appDescription);    
    $body.append(createField( 'Initial Concentration', $initialConcentration));
    $body.append(createField( 'Need Concentration', $needConcentration));
    $body.append(createField('Weight of initial Liquid', $weightGlue));
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
    

    })();
    
