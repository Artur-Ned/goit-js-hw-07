import { galleryItems } from './gallery-items.js';
// Change code below this line
let url = "";
// console.log(galleryItems);
let itemOfgallery = galleryItems.map((image) => {
    // console.log(image.original);       
    let url = image.original;
    console.log(url);
});

console.log(url);
