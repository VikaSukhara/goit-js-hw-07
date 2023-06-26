import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryList = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
<li class="gallery__item">
   <a class="gallery__link" href=${original}>
      <img class="gallery__image js__img" src=${preview} alt=${description}  />
   </a>
</li>

`
  )
  .join("");

const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("beforeend", galleryList);


galleryEl.addEventListener("click", handleClick);
function handleClick(event) {
  event.preventDefault();
  if (event.target.classList.contains("js__img")) {
    const lightbox = new SimpleLightbox(".gallery a", {
      captionsData: `alt`,
      captionDelay: 250,
    });
  }
}
