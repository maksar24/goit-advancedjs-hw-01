// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryOfImages = document.querySelector('.gallery');

function markUp(arr) {
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
        .join('');
};

galleryOfImages.insertAdjacentHTML("afterbegin", markUp(galleryItems));

const lightboxOptions = {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250
};

new SimpleLightbox('.gallery__link', lightboxOptions);
