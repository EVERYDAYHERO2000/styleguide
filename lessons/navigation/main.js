(function(){

const $navigationItemHeader = document.querySelectorAll('.navigation__header');
const $adressHeader = document.querySelectorAll('.select-adress__input');
const $dotsMenu = document.querySelectorAll('.icon-button_dots');

for (let $i of $navigationItemHeader) {
    const $navigationItem = $i.closest('.navigation__item');

    $i.addEventListener('click',function(e){

        $navigationItem.classList.toggle('navigation__item_hide');

    });
}

for (let $i of $adressHeader) {
    const $adressSelect = $i.closest('.select-adress');

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

})()