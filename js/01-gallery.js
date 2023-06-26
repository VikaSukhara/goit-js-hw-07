import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listEl = document.querySelector(".gallery");

const arrGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
 `<li class="gallery__item">
     <a class="gallery__link" href-"${original}">
        <img 
            class="gallery__image  js-img" 
            src="${preview}" 
            alt="${description}"
            data-source="${original}"
        />
    </a>
</li>
`).join(" ");

listEl.insertAdjacentHTML("beforeend", arrGallery);



listEl.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  if (event.target.classList.contains("js-img")) {

    const instance = basicLightbox.create(
        `<img    
            class="gallery__image  js-img" 
            src="${event.target.dataset.source}" 
         />`);

    instance.show();

    function modalEsc(event) {
      if (event.code === "Escape") {
        console.log("code: ", event.code);
        instance.close();
      }
    }
    document.addEventListener("keydown", modalEsc);
  }
}

// instance.show()
// const visible = basicLightbox.visible()
// console.log(visible)

//   document.addEventListener("keydown", event => {
//     console.log("key: ", event.key);
//     console.log("code: ", event.code);

//     if(event.code === 'Escape')
//   });

// const gallery = document.querySelector('ul.gallery');

// const items = galleryItems.map(picture => `<li class="gallery__item gallery__link">
// <img class="gallery__image" src=${picture.preview}>
// </li>`).join('\n');

// // galleryItems.forEach(picture => {
//     // const item = document.createElement('li');
// //     item.classList.add('gallery__item');

// //     const img = document.createElement('img')
// //     img.classList.add('gallery__image');
// //     img.setAttribute('src', picture.preview);

// //     gallery.appendChild(item.appendChild(img));
// // })

// gallery.insertAdjacentHTML('beforeend', items)

// console.log(galleryItems);
