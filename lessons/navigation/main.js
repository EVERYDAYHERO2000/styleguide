(function(){

const $navigationItemHeader = document.querySelectorAll('.navigation__header');
const $adressHeader = document.querySelectorAll('.select-adress__input');
const $dotsMenu = document.querySelectorAll('.icon-button_dots');
const $addressItem = document.querySelectorAll('.select-adress__input-header_inside');
let $addressSelectRoot;

for (let $i of $addressItem) {
    const $selected = document.querySelector('.nav-text_selected');

    $i.addEventListener('click',function(e){
        
        $selected.innerText = e.target.innerText;
        $addressSelectRoot.classList.add('select-adress_hide');
        $addressSelectRoot.classList.remove('select-adress_open');

        for (let $s of $addressItem) {
            $s.classList.remove('select-adress__input-header_selected');
        }

        $i.classList.add('select-adress__input-header_selected');

    });
}

for (let $i of $navigationItemHeader) {
    const $navigationItem = $i.closest('.navigation__item');

    $i.addEventListener('click',function(e){

        $navigationItem.classList.toggle('navigation__item_hide');

    });
}

for (let $i of $adressHeader) {
    const $adressSelect = $addressSelectRoot = $i.closest('.select-adress');
    const $back = $adressSelect.querySelector('.select-adress__background');
    
    $back.addEventListener('click',function(e){
        $adressSelect.classList.add('select-adress_hide');
        $adressSelect.classList.remove('select-adress_open');
    });

    $i.addEventListener('click',function(e){

        $adressSelect.classList.toggle('select-adress_hide');
        $adressSelect.classList.toggle('select-adress_open');

    });
}

for (let $i of $dotsMenu) {

    const $dropDown = $i.nextElementSibling;
    const $back = $dropDown.querySelector('.dropdown__background');

    $i.addEventListener('click', function(e){
        $dropDown.classList.toggle('dropdown_hide');
    });

    $back.addEventListener('click',function(e){
        $dropDown.classList.add('dropdown_hide');
    });

}    

})();