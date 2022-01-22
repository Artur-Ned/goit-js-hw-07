import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const wraperRef = document.querySelector('.gallery');
const linkRef = document.querySelector('.gallery__link');
const imageRef = document.querySelector('.gallery__image');





let itemOfgallery = galleryItems.map((image) => {
       
    return `<div class="gallery__item">
<a class="gallery__link" href="${image.original}">
<img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
</a>

</div>`
}).join('');

wraperRef.insertAdjacentHTML("afterbegin", itemOfgallery); 

wraperRef.addEventListener('click', onLinkClick);
function onLinkClick(event) {
    event.preventDefault()
  if (event.target.nodeName !== 'IMG') {
    return;
  } 
   
  console.log(event.target.nodeName); 
  // console.log(event.target.dataset.source);


}


/**
ОБРАЗЕЦ
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