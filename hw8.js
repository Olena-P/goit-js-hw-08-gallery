// - Создание 
import images from './gallery-items.js';

//и рендер разметки по массиву данных и предоставленному шаблону.
const createGalleryItem = ({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a
            class="gallery__link"
            href="${original}"
        >
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="Tulips"
            />
        </a>
    </li>`
};    

const refs = {
    gallery: document.querySelector(".js-gallery"),
    modal: document.querySelector(".lightbox__content"),
    image: document.createElement("img"), 
    lightbox: document.querySelector(".lightbox"),
    button: document.querySelector('[data-action="close-lightbox"]'),
    lightbox__image: document.querySelector(".lightbox__image")
};
  
//перебрать
const imagesTemplateStrings = images.map(createGalleryItem).join(" ");
console.log(imagesTemplateStrings)

// вставить в html
refs.gallery.insertAdjacentHTML('afterbegin', imagesTemplateStrings);


//добавление элементов галереи

// ulRef.innerHTML = newStringEl;
const imgEl = document.querySelector('.gallery__image');
// ulRef.addEventListener('click', e); 


// - Реализация делегирования на галерее `ul.js-gallery` и получение `url` большого
//   изображения.

images.addEventListener('click', onClick);
function onClick(e) {
    if (e.target.nodeName !== 'image') {
        return
    }
    console.log(e.target);
}
///////////////////// 


// - Открытие модального окна по клику на элементе галереи.
refs.openModalBtn





// - Подмена значения атрибута `src` элемента `img.lightbox__image`.







// - Закрытие модального окна по клику на кнопку `button[data-action="close-lightbox"]`.

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();


let element;
function e(eve) {
  eve.preventDefault();
  if (eve.target.className !== imgEl.className) {
    return;
  }
  const bigImgEl = eve.target.alt;
  for (let i = 0; i < defaultEl.length; i++) {
    if (defaultEl[i].description === bigImgEl) {
      element = defaultEl[i].original;
    }
  }

  divEl.classList.add('is-open');
  divModalEl.innerHTML = `<img class="lightbox__image"
    src="${element}"
    alt="${bigImgEl}"
  />`;
  
}


btnEl.addEventListener('click', () => {
  divEl.classList.remove('is-open');
});






// - Очистка значения атрибута `src` элемента `img.lightbox__image`. Это необходимо
//   для того, чтобы при следующем открытии модального окна, пока грузится
//   изображение, мы не видели предыдущее.

function isOpen() {
  const divCloseModal = document.querySelector('.lightbox__image');
  divEl.classList.remove('is-open');
  divCloseModal.alt = '';
  divCloseModal.src = '';
}
const closeModalEl = document.querySelector('[data-action="close-lightbox"]');
closeModalEl.addEventListener('click', isOpen);

overEl.addEventListener('click', isOpen);






// ## Дополнительно

// Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой
// по работе с событиями.

// - Закрытие модального окна по клику на `div.lightbox__overlay`.
// - Закрытие модального окна по нажатию клавиши `ESC`.
// - Пролистывание изображений галереи в открытом модальном окне клавишами "влево"
//   и "вправо".



// Управление кнопками //

document.addEventListener('keydown', eve => {
  const divCloseModal = document.querySelector('.lightbox__image');

  // Кнопка Esc //
  if (eve.code === 'Escape') {
    isOpen()
  }
  if (divEl.className.includes('is-open')) {
    const mapDefEl = defaultEl.map(value => value.original);
    const indElNum = Number(mapDefEl.indexOf(divCloseModal.src));

    // Кнопка влево, вверх //
    const mapDelLight = Number(mapDefEl.length) - 1;
    if (eve.code === 'ArrowLeft' || eve.code === 'ArrowUp') {
      if (eve.target.className === imgEl.className) {
        return;
      }
      const indLeftEl = indElNum - 1;
      divCloseModal.src = mapDefEl[indLeftEl];
      if (indElNum === 0) {
        divCloseModal.src = mapDefEl[mapDelLight];
      }
    }
    // Кнопка вправо, вниз //
    if (
      eve.code === 'ArrowRight' ||
      eve.code === 'ArrowDown' ||
      eve.code === 'Space'
    ) {
      if (eve.target.className === imgEl.className) {
        return;
      }
      const indEl = indElNum + 1;
      divCloseModal.src = mapDefEl[indEl];
      if (indEl === mapDefEl.length) {
        divCloseModal.src = mapDefEl[0];
      }
    }
  }
});

