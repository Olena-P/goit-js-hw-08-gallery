// - Создание и рендер разметки по массиву данных и предоставленному шаблону.
import images from './gallery-items.js';

const createGalleryItem = ({ preview, original, description}) => {
    return `<li class="gallery__item">
        <a
            class="gallery__link"
            href="${original}"
        >
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`
};    
 
const refs = {
    gallery: document.querySelector(".js-gallery"),
    modal: document.querySelector(".lightbox__content"),
    lightbox: document.querySelector(".lightbox"),
    button: document.querySelector('[data-action="close-lightbox"]'),
    lightbox__image: document.querySelector(".lightbox__image")
};
  
//перебрать и присоединить
const imagesTemplateStrings = images.map(createGalleryItem).join(" ");
console.log(imagesTemplateStrings)

// вставить в html
refs.gallery.insertAdjacentHTML('afterbegin', imagesTemplateStrings);


//добавление элементов галереи
refs.gallery.addEventListener('click', onOpenModal);
refs.modal.addEventListener('click', closeLightbox);
refs.button.addEventListener('click', onCloseModal);

// - Реализация делегирования на галерее `ul.js-gallery` 
// и получение`url` большого изображения.
//(вставить разметку в  ul)

// - Открытие модального окна по клику на элементе галереи.
// - Подмена значения атрибута `src` элемента `img.lightbox__image`.
function onOpenModal(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    };

    if (e.target.nodeName === 'IMG') {
        refs.lightbox.classList.add('is-open');
        refs.lightbox__image.src = e.target.getAttribute('data-source');
        refs.lightbox__image.alt = e.target.getAttribute('alt');
    }

    //неподвижный фон
    document.body.style.overflow = ('hidden'); 
    // setOriginalImageOnLightbox(e);
    // addOpenLightboxClass();

    // window.addEventListener('kaydown', onCloseModal);
    // window.addEventListener('keydown', onArrowPress);
}

// - Закрытие модального окна по клику на кнопку `button[data-action="close-lightbox"]`.

function onCloseModal(e) {
    
        refs.lightbox.classList.remove('is-open');
        refs.lightbox__image.src = e.target.getAttribute(' ');
        refs.lightbox__image.alt = e.target.getAttribute(' ');

        document.body.removeAttribute('Style');
        // window.removeEventListener('kaydown', onCloseModalEsc);
        // window.removeEventListener('keydown', onArrowPress);
   
}

// - Очистка значения атрибута `src` элемента `img.lightbox__image`. 
//Это необходимо для того, чтобы при следующем открытии модального окна, 
//пока грузится sизображение, мы не видели предыдущее.



// ## Дополнительно

// Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой
// по работе с событиями.

// - Закрытие модального окна по клику на `div.lightbox__overlay`.
//const isLightboxOverlayEl = e.target === refs.lightboxOverlay;

// - Закрытие модального окна по нажатию клавиши `ESC`.
function onCloseModalEsc(e) {
    if (e.code === 'Escape') {
        onCloseModal()
    }
}

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

