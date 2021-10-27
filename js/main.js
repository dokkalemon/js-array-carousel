/**
 * JS CAROUSEL
 *
 * Dati tre array contenenti
 * una lista ordinata di 5 immagini e
 * una lista ordinata dei relativi 5 luoghi,
 * e una lista di 5 testi.
 * creare un carosello come nella foto alegata
 *
 * Al click dell'utente sulle frecce l'immagine attiva diventa
 * visibile in formato grande a sinistra e
 * nel suo angolo in basso a destra dovranno essere aggiunti i relativi titolo e il testo.
 * Aggiorniamo anche la thumbnail attiva.
 */

// Immagini
const imageCollection = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

// Titoli
const titleCollection = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise',
];

// Testi
const textCollection = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];


//ref
const imagesReference = document.querySelector('.images');
const thumbsReference = document.querySelector('.thumbs');

//creare elenchi foto sia per images che per thumb
for (let i = 0; i < imageCollection.length; i++) {

    //image
    imagesReference.innerHTML += `
        <div class="image-container">
            <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
            <div class="text">
                <h3>${titleCollection[i]}</h3>
                <p>${textCollection[i]}</p>
            </div>
        </div>`;


    //thumbnails
    thumbsReference.innerHTML += `
        <div class="thumb">
            <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
        </div>`;
};

//individuare l'elemento active;
let elementActive = 0;

document.getElementsByClassName('image-container')[elementActive].classList.add('active');
document.getElementsByClassName('thumb')[elementActive].classList.add('active');

//reference prev and next
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


//NEXT: azione al click
next.addEventListener('click', function(){


        if (elementActive === imageCollection.length - 1) {
            elementActive = 0
        } else {
            elementActive++;
        }


    //image
    document.querySelector('.image-container.active').classList.remove('active');
    document.getElementsByClassName('image-container')[elementActive].classList.add('active');
    //thumbs
    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[elementActive].classList.add('active');
});

//PREV: azione al click
prev.addEventListener('click', function() {


    if (elementActive <= 0) {
        elementActive = 4;
    } else {
        elementActive--
    }

    //image
    document.querySelector('.image-container.active').classList.remove('active');
    document.getElementsByClassName('image-container')[elementActive].classList.add('active');

    //thumb
    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[elementActive].classList.add('active');
})


//BONUS: click su ogni immagine
//refs
const image1 = document.getElementsByClassName('thumb')[0];
const image2 = document.getElementsByClassName('thumb')[1];
const image3 = document.getElementsByClassName('thumb')[2];
const image4 = document.getElementsByClassName('thumb')[3];
const image5 = document.getElementsByClassName('thumb')[4];


//click sulla prima immagine
image1.addEventListener('click', function() {
    //image
    document.querySelector('.image-container.active').classList.remove('active');
    document.getElementsByClassName('image-container')[0].classList.add('active');

    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[0].classList.add('active');

    //aggiorniamo il numero active
    elementActive = 0;
})

//click sulla seconda immagine
image2.addEventListener('click', function() {
    //image
    document.querySelector('.image-container.active').classList.remove('active');
    document.getElementsByClassName('image-container')[1].classList.add('active');

    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[1].classList.add('active');

    //aggiorniamo il numero active
    elementActive = 1;
})

//click sulla terza immagine
image3.addEventListener('click', function() {
    //image
    document.querySelector('.image-container.active').classList.remove('active');
    document.getElementsByClassName('image-container')[2].classList.add('active');

    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[2].classList.add('active');

    //aggiorniamo il numero active
    elementActive = 2;
})

//click sulla quarta immagine
image4.addEventListener('click', function() {
    //image
    document.querySelector('.image-container.active').classList.remove('active');
    document.getElementsByClassName('image-container')[3].classList.add('active');

    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[3].classList.add('active');

    //aggiorniamo il numero active
    elementActive = 3;
})

//click sulla quinta immagine
image5.addEventListener('click', function() {
    //image
    document.querySelector('.image-container.active').classList.remove('active');
    document.getElementsByClassName('image-container')[4].classList.add('active');

    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[4].classList.add('active');

    //aggiorniamo il numero active
    elementActive = 4;
})