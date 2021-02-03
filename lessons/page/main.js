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
        'pers.png'
    ]
}

const $app = document.querySelector('#app');
let appHeight = 5000;
let returnExist = false;
let interval

render();
window.scrollTo( 0, window.innerHeight/2 );

window.addEventListener('scroll', function(e){
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && returnExist == true) {
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

for (let i=0; i < 1000; i++){
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

for (let i=0; i < 1000; i++){
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

let $stopIndent = document.createElement('div');
$stopIndent.classList.add('indent');
$stopIndent.style.paddingTop = window.innerHeight + 'px';
$app.append($stopIndent);  


};

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

