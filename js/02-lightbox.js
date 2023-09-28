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


function handleClick(event) {
   event.preventDefault();
   if(event.target === event.currentTarget){ 
   return;
}

const img = event.target.closest(".gallery__image");
console.log(img);

}
ulEl.insertAdjacentHTML("beforeend", galleryImg(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250 });









