const people = {
    light : [
        'per1.png',
        'per2.png',
        'per3.png',
        'per4.png',
        'per5.png',
        'per6.png',
        'per7.png',
        'per8.png',
        'per9.png',
        'per10.png',
        'per11.png'
    ],
    gray : [
        'omo1.png',
        'omo2.png',
        'omo3.png',
        'omo4.png',
        'omo5.png'
    ],
    new : [
        'pers1.png',
        'pers2.png',
        'pers3.png',
        'pers4.png',
        'pers5.png'
    ]
}

const $app = document.querySelector('#app');
let appHeight = 5000;
let returnExist = false;
let interval;

let lightCounter = 1000;
let grayCounter = 1000;
let newCounter = 1;

render();
window.scrollTo( 0, window.innerHeight/2 );

window.addEventListener('scroll', function(e){
    if ( (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - window.innerHeight/2) 
    && returnExist == true) {
        returnExist = false;
        render();

        //$app.style.height = '10000px';

        clearInterval(interval);
        interval = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
        
    } else {
        returnExist = true;
    }
})

function render() {

$app.innerHTML = '';    

let $startIndent = document.createElement('div');
$startIndent.classList.add('indent');
$startIndent.style.paddingTop = window.innerHeight + 'px';
$app.append($startIndent);    

for (let i=0; i < lightCounter; i++){
    let $img = document.createElement('img');
    let imgUrl = `assets/${people.light[randomInteger(0, 10)]}`;

    if ( randomInteger(1, 10) == 3 || randomInteger(1, 10) == 10 ) {
        $img.style.marginLeft = `${randomInteger(-50, 50)}px`;
    }

    if ( randomInteger(1, 10) > 2 && randomInteger(1, 10) < 5 ) {
        $img.style.marginTop = `${randomInteger(-60, -200)}px`;
    }    

    $img.src = imgUrl;
    $img.classList.add('light');


    $app.append($img);
}

let $indent = document.createElement('div');
$indent.classList.add('indent');
$app.append($indent);

for (let i=0; i < grayCounter; i++) {
    let $img = document.createElement('img');
    let imgUrl = `assets/${people.gray[randomInteger(0, 4)]}`;
    let indent = (randomInteger(1, 10) == 3 || randomInteger(1, 10) == 10) ? true : false;

    if (indent) {
        $img.style.marginLeft = `${randomInteger(-50, 10)}px`;
    }

    $img.src = imgUrl;
    $img.classList.add('gray');    

    $app.append($img);
}

let $img = document.createElement('img');
let imgUrl = `assets/${people.new[0]}`;

$img.src = imgUrl;
$img.classList.add('new');

$app.append($img);

let $middleIndent = document.createElement('div');
$middleIndent.classList.add('indent');
$middleIndent.style.height = '300px';
$app.append($middleIndent);

for (let i=0; i < newCounter; i++){
    let $img = document.createElement('img');
    let imgUrl = `assets/${people.new[randomInteger(0, 4)]}`;

    if ( randomInteger(1, 10) == 3 || randomInteger(1, 10) == 10 ) {
        $img.style.marginLeft = `${randomInteger(-10, 80)}px`;
    }

    if ( randomInteger(1, 10) > 2 && randomInteger(1, 10) < 5 ) {
        let rnd = randomInteger(-60, -200);
        let rnd2 = rnd * -1;
        $img.style.marginTop = `${rnd}px`;
        $img.style.marginBottom = `${rnd2}px`;

    }  

    $img.src = imgUrl;
    $img.classList.add('light');
    $img.classList.add('light2');

    $app.append($img);
}

let $stopIndent = document.createElement('div');
$stopIndent.classList.add('indent');
$stopIndent.style.paddingTop = window.innerHeight + 'px';
$app.append($stopIndent);  

//lightCounter++
grayCounter--
newCounter++

};

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

