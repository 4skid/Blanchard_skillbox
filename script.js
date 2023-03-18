// hero-swiper
const swiper = new Swiper('.hero__swiper', {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  effect: "fade",
});

// hero-select
document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 28,
  });
})

const btns = document.querySelectorAll(".hero__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function () {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})

// gallery-select
const gallerySelect = () => {
  const element = document.querySelector('.filter__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    allowHTML: true,
    duplicateItemsAllowed: true,
    position: 'bottom',
  });
  let ariaLabel = element.getAttribute('aria-label');
  element.closest('.choices').setAttribute('aria-label', ariaLabel);
};

gallerySelect();


// gallery-swiper
const swiperGalery = new Swiper('.gallery-slider__swiper', {
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  a11y: {
    nextSlideMessage: "Следующая страница",
    prevSlideMessage: "Предыдущая страница",
    slideLabelMessage: "Слайд {{index}} из {{slidesLength}}",
    slideRole: "none",
  },
  breakpoints: {
    1400: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },
    578: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
      speed: 250,
    }
  }
});

// gallery-modal
const modalOpen = document.querySelectorAll('.gallery-slider__slide');
const modalClose = document.querySelector('.modal-btn');

modalOpen.forEach(elem => {
  elem.addEventListener('click', () => {
    document.querySelector('.gallery-modal').classList.add('active');
    document.body.classList.add('hidden');
  });
});

modalClose.addEventListener('click', () => {
  document.querySelector('.gallery-modal').classList.remove('active');
  document.body.classList.remove('hidden');
});


// catalog-accordion
const accordion = new Accordion('.tabs-wrap__list', {
  elementClass: 'tabs-wrap__item',
  triggerClass: 'tabs-wrap__btn',
  panelClass: 'tabs-artists',
  duration: 400
});
accordion.open(0);


// tabs
const tabsArtist = document.querySelectorAll('.artist');
const tabsBtn = document.querySelectorAll('.tabs-artists__artist');

tabsBtn.forEach((el) => {
  el.addEventListener('click', (e) => {
    const acr = e.currentTarget.dataset.acr;

    tabsBtn.forEach((btn) => {
      btn.classList.remove('active');
    });
    e.currentTarget.classList.add('active');

    tabsArtist.forEach((el) => {
      el.classList.remove('active');
    })
    document.querySelector(`[data-artist="${acr}"]`).classList.add('active');
  });
});

// events-swiper
const eventsSwiper = new Swiper('.events__slider', {
  speed: 500,
  navigation: {
    nextEl: '.ev-swiper-button-next',
    prevEl: '.ev-swiper-button-prev',
  },
  breakpoints: {
    1400: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
    1023: {
      spaceBetween: 27,
      slidesPerView: 3,
      slidesPerGroup: 3,
      allowTouchMove: true,
      pagination: {
        el: '.ev-swiper-pagination',
        clickable: true,
      }
    },
    768: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
      pagination: {
        el: '.ev-swiper-pagination',
        clickable: true,
      }
    },
    577: {
      spaceBetween: 34,
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: '.ev-swiper-pagination',
        clickable: true,
      }
    },
    0: {
      spaceBetween: 10,
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: '.ev-swiper-pagination',
        clickable: true,
      }
    }
  }
})

//projects-swiper
const projectsSwiper = new Swiper('.pj-slider__swiper', {
  navigation: {
    nextEl: '.pj-slider-button-next',
    prevEl: '.pj-slider-button-prev',
  },
  breakpoints: {
    1400: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 1,
      allowTouchMove: false,
    },
    1024: {
      spaceBetween: 50,
      slidesPerView: 2,
      slidesPerGroup: 1,
      allowTouchMove: true,
    },
    768: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 1,
      allowTouchMove: true,
    },
    577: {
      spaceBetween: 20,
      slidesPerView: 2,
      slidesPerGroup: 1,
      allowTouchMove: true,
    },
    0: {
      spaceBetween: 10,
      slidesPerView: 1,
      slidesPerGroup: 1,
      allowTouchMove: true,
    }
  }
})

//tooltip
tippy('[data-tippy-content]');

// contacts input-mask
const selector = document.querySelector("input[type='tel']");
const form = document.querySelector('.contacts-middle__form');
const im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

const validation = new JustValidate(form, {
  errorLabelStyle: {
    color: '#D11616',
  }
});

validation
  .addField('#contactName', [
    {
      rule: 'required',
      errorMessage: 'Введите ваше имя',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Не короче 3 символов',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Слишком длинное имя',
    },
  ])
  .addField('#contactPhone', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Телефон обязателен',
    },
    {
      rule: 'function',
      validator: function () {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ])
  .onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено!');
          alert('Заявка отправлена');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();

  });

//yandex-map
ymaps.ready(init);
function init() {
  const geolocationControl = new ymaps.control.GeolocationControl({
    options: {
      float: 'right',
      position: {
        bottom: '300px',
        right: '10px'
      }
    }
  });

  const zoomControl = new ymaps.control.ZoomControl({
    options: {
      size: "small",
      float: 'right',
      position: {
        top: '300px',
        right: '10px'
      }
    }
  });

  const myMap = new ymaps.Map("map", {
    center: [55.758468, 37.601088],
    zoom: 14,
    controls: [geolocationControl, zoomControl],
  });

  myMap.behaviors.disable('scrollZoom');

  const myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/map-mark.png',
    iconImageSize: [20, 20]
  });
  myMap.geoObjects.add(myPlacemark);
}

// preloader

window.onload = function () {
  setTimeout(() => {
    document.querySelector('.preloader').classList.add("preloader-remove");
  }, 500);
};

//header-mobile
const burger = document.querySelectorAll('.burger');
const nav = document.querySelector('.header__nav')
const navItems = nav.querySelectorAll('a');
const searchBtn = document.querySelector('.header__form');


burger.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('hidden');
    searchBtn.classList.toggle('hidden');
  });
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    document.body.classList.remove('hidden');
    burger.forEach(btn => {
      btn.classList.remove('active');
    })
  });
});


const search = document.querySelector('.header-form__search-btn');
const closeSearch = document.querySelector('.header-form__close-btn');

search.addEventListener('click', () => {
  document.querySelector('.header-form').classList.add('active');
});
closeSearch.addEventListener('click', () => {
  document.querySelector('.header-form').classList.remove('active');
})