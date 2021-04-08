import './assets/css/app.css';


/*
 * Swiper
 */
let swiperBlock = document.querySelector('.slider__block');
if (swiperBlock) {
  const swiper = new Swiper('.slider__block', {
    slideClass: "slider__item",
    spaceBetween: 30,
    centeredSlides: true,
    centeredSlidesBounds: true,
    navigation: {
      nextEl: '.slider__nav.--next',
      prevEl: '.slider__nav.--prev',
    },
  });
}

/* 
 * Open / closing menu
 */
let menuBtn = document.querySelector('.menu__button');
menuBtn.onclick = () => {
  // just toggle a class ;)
  let menuElem = document.querySelector('.nav__block');
  menuElem.classList.toggle('box-hide');
}


/* 
  Fetch data! 
*/
const url = `https://staging.says.com/my/api/stories/tags?tags=test,no-ads`;

async function fetchStoriesByTag() {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

const populate = async () => {
  let stories = await fetchStoriesByTag();
  const storiesContainerElem = document.querySelector('.story__listing');

  /* Check if it is a story mode...? */
  if (storiesContainerElem.attributes['data-style'].value === 'story-mode') {
    stories.forEach((story) => {
      const { url, cover_image, title } = story;
      let storyHTML = `
          <a href="${url}" class="story__block">
            <img class="story__image" src="${cover_image}" alt="">
            <div class="story__meta">
              <h5 class="story__title line-clamp text-400 color-light">${title}</h5>
            </div>
          </a>
        `;
      storiesContainerElem.insertAdjacentHTML('beforeend', storyHTML);
    });
  }

  stories.forEach((story, index) => {
    const { url, cover_image, title } = story;
    let storyHTML;
    if (index === 8) {
      storyHTML = `
        <a href="${url}" class="story__block" data-style="big-image">
          <img class="story__image" src="${cover_image}" alt="">
          <div class="story__meta">
            <h5 class="story__title line-clamp text-300 color-blue-1">${title}</h5>
            <span class="story__info color-light text-300">
              28 mins ago by <span class="color-blue-1 text-underline">Writer Name</span>
            </span>
          </div>
        </a>
      `;
    } else {
      storyHTML = `
        <a href="${url}" class="story__block">
          <img class="story__image" src="${cover_image}" alt="">
          <div class="story__meta">
            <h5 class="story__title line-clamp text-300 color-blue-1">${title}</h5>
            <span class="story__info color-light text-300">
              28 mins ago by <span class="color-blue-1 text-underline">Writer Name</span>
            </span>
          </div>
        </a>
      `;
    }
    storiesContainerElem.insertAdjacentHTML('beforeend', storyHTML);
  });
}

populate();


/*
  Tags Used:
    1.  #seismikmakan (seismik makan Youtube vids & articles)
    2.  #pasarrayaseismik (Shopping/sapot lokal)
    3.  #surauseismik (Religious)
    4.  #warunglepak (Raya feel-good)
    5.  #jalanhiburan (Entertainment - seismik Tv vids & articles)
 */