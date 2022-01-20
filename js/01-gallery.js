import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const wraper = document.querySelector('.gallery');
// console.log(wraper);



let itemOfgallery = galleryItems.map((image) => {
    console.log(image);
   
    return `<div class="gallery__item">
<a class="gallery__link" href="${image.original}">
<img
      class="gallery__image"
      src="${image.preview}"
      data-source="large-image.jpg"
      alt="Image description"
    />
</a>

</div>`
    

}).join('');

wraper.insertAdjacentHTML("afterbegin", itemOfgallery); 
// console.log(...itemOfgallrry);
/**
const getImages = document.querySelector('.gallery');
getImages.style.display = 'flex';
getImages.style.justifyContent = 'space-between';
getImages.style.listStyle = 'none';

let itemOfImage = images.map((image) => {
  return `<li><img src="${image.url}" alt="${image.alt}" width='400px' height='260px'/></li>`;
  
}).join('');
// console.log(itemOfImage);
getImages.insertAdjacentHTML("afterbegin", itemOfImage); 
*/ 