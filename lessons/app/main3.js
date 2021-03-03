(function() {

    const $body = document.querySelector('body');
    $body.classList.add('app');

    // subline`s text
    const $appDescription = document.createElement('p');
    const $button = document.createElement('button');
    const $initialConcentration = createInput('%', 'number');
    const $needConcentration = createInput('%', 'number');
    const $result = document.createElement('p');


    $appDescription.innerHTML = `<span> In some situations you need to change your high 
    concentration of Glue to lower concentration. You can use the form below to
    calculate it: </span>`;
    // calculation in parts
    $appDescription.classList.add('app-description');

    $button.classList.add('button');
    $button.innerText = 'Get It!';
    $button.addEventListener('click', function(event){

        let initialConcentration = +$initialConcentration.value || 0;
        let needConcentration = +$needConcentration.value || 0;
        let needWater = initialConcentration - needConcentration ;
        let needGlue = needConcentration ;
        $result.innerHTML = `<span> You need to take ${needWater} parts of Water and ${needGlue} parts of Glue </span>`
    });
    $result.classList.add('result');


    $body.append($appDescription);
    $body.append(createField( 'Initial Concentration', $initialConcentration ));
    $body.append(createField( 'Need Concentration', $needConcentration ));
    $body.append($button);
    $body.append($result);



    function createInput(placeholder, type) {
        type = type || 'number';
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
}
) ();