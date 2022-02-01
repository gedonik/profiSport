//power-equip select
const selects = document.querySelectorAll('.power-equip__select');
selects.forEach((el) => {
  new Choices(el, {
    shouldSort: false,
    position: 'bottom',
    searchEnabled: false,
    itemSelectText: '',
  });
});

// main-page slide
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    450: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    850: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const productImages = document.querySelector('.product-images-slider');

if (productImages) {
  const productSlider = new Swiper('.product-images-nav', {
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const productSlidesNav = new Swiper(productImages, {
    spaceBetween: 20,
    slidesPerView: 1,
    thumbs: {
      swiper: productSlider,
    },
  });
}

('use strict');

//realise block
const realiseInner = document.querySelector('.realise__inner');
const swipers = document.querySelectorAll('.realise__swiper');
const buttons = document.querySelectorAll('.realise__btn');

function getItems(className) {
  swipers.forEach((item) => {
    if (item.classList.contains(className)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function filter() {
  if (realiseInner) {
    realiseInner.addEventListener('click', (event) => {
      const targetId = event.target.dataset.id;
      const target = event.target;

      buttons.forEach((button) =>
        button.classList.remove('realise__btn--active')
      );
      target.classList.add('realise__btn--active');

      switch (targetId) {
        case 'clubs':
          getItems(targetId);
          break;
        case 'gyms':
          getItems(targetId);
          break;
        case 'centers':
          getItems(targetId);
          break;
      }
    });
  }
}

filter();

('use strict');

//burger
const burgerMenu = document.querySelector('.header__menu-btn');
const headerInner = document.querySelector('.header__inner');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  headerInner.classList.toggle('header__inner--active');
});

('use strict');

//scroll by id
$(function () {
  $('.header__list a').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
        scrollTop: top,
      },
      1500
    );
  });
});

document.addEventListener('change', function () {
  let chk = event.target;

  if (chk.tagName === 'INPUT' && chk.name === 'main-cat-wholesale') {
    document.getElementById('radio-1').checked = false;
    document.getElementById('radio-2.1').disabled = false;
    document.getElementById('radio-2.2').disabled = false;
    document.getElementById('radio-3').checked = false;
    document.getElementById('radio-3.1').disabled = true;
    document.getElementById('radio-3.2').disabled = true;
    document.getElementById('radio-3.1').checked = false;
    document.getElementById('radio-3.2').checked = false;
  } else if (chk.tagName === 'INPUT' && chk.name === 'main-cat-retail') {
    document.getElementById('radio-1').checked = false;
    document.getElementById('radio-2').checked = false;
    document.getElementById('radio-2.1').disabled = true;
    document.getElementById('radio-2.2').disabled = true;
    document.getElementById('radio-2.1').checked = false;
    document.getElementById('radio-2.2').checked = false;
    document.getElementById('radio-3.1').disabled = false;
    document.getElementById('radio-3.2').disabled = false;
  } else if (chk.tagName === 'INPUT' && chk.name === 'main-cat') {
    document.getElementById('radio-2').checked = false;
    document.getElementById('radio-2.1').checked = false;
    document.getElementById('radio-2.2').checked = false;
    document.getElementById('radio-3').checked = false;
    document.getElementById('radio-3.1').checked = false;
    document.getElementById('radio-3.2').checked = false;
  }
});

//cart-stepper
const btns = document.querySelectorAll('.stepper__btn');

btns.forEach(btn => {
  btn.addEventListener('click', function () {
    const direction = this.dataset.direction;
    const inp = this.parentElement.querySelector('.stepper__input');
    const currentValue = +inp.value;
    let newValue;

    if (direction === 'plus') {
      newValue = currentValue + 1;
    } else {
      newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
    }

    inp.value = newValue;
  })
})

//cart-delete
const deleteBtns = document.querySelectorAll('.cart-product__btn');

deleteBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    const cartItems = document.querySelectorAll('.cart-product__item');

    for (item of cartItems) {
      item.style.display = 'none';
      console.log(item);
    }
  })
})

//tabs
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.tabs');
  const tabsBtn = document.querySelectorAll('.tabs__btn');
  const tabsContent = document.querySelectorAll('.tabs__content');

  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('tabs__btn')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach(el => {
          el.classList.remove('tabs__btn--active')
        });
        document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');
        tabsHandler(tabsPath);
      }
    });
  }

  const tabsHandler = (path) => {
    tabsContent.forEach(el => {
      el.classList.remove('tabs__content--active')
    });
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
  };
});