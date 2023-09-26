import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector('.gallery');
ulEl.addEventListener('click', handleClick);

function galleryImg(arr) {
    return arr
    .map(
        ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
         <img
           class="gallery__image"
           src="${preview}"
          
           alt="${description}"
         />
        </a>
       </li>`
    )
    .join("");
}


// Автономный плагин
// При использовании автономного варианта (`simple-lightbox(.min).js`)

// var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
// При использовании автономного варианта (`simple-lightbox(.min).js`)

// var lightbox = $('.gallery a').simpleLightbox({ /* options */ });
// С помощью Webpack/Browserify/Parcel и т. д.
// Выберите файл модуля, который вы хотите импортировать или потребовать.

// Модуль с трансформацией Babel
// import SimpleLightbox from "simplelightbox";

// Обычный модуль ES без Babel
// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
// Разметка
// Для настройки по умолчанию вам просто нужны ссылки, указывающие на изображения.

// <div class="gallery">
//     <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
//     <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
// </div>
// Разметка внутри A-тегов может быть любой. В этом примере миниатюры больших изображений. Тег заголовка по умолчанию используется для отображения подписи. Для полного примера просто посмотрите папку demo.

// Разметка
{/* <li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img 
      class="gallery__image" 
      src="small-image.jpg" 
      alt="Image description" />
   </a>
</li> */}

//примері
// let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function () {
// 	// do something…
// });

// gallery.on('error.simplelightbox', function (e) {
// 	console.log(e); // some usefull information
// });

// // with jQuery nearly the same
// let gallery = $('.gallery a').simpleLightbox();
// gallery.on('show.simplelightbox', function () {
// 	// do something…
// });
