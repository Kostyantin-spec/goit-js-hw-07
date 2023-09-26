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
           data-source="${original}"
           alt="${description}"
         />
        </a>
       </li>`
    )
    .join("");
}









{/* <li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img 
      class="gallery__image" 
      src="small-image.jpg" 
      alt="Image description" />
   </a>
</li> */}