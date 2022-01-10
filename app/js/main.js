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

const select = document.querySelector('.form__result-select');

('use strict');

// main-page slide
const swiper = new Swiper('.swiper', {
	slidesPerView: 3,
	spaceBetween: 30,

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
		1: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		650: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});

('use strict');

// realise block
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
		$('body,html').animate(
			{
				scrollTop: top,
			},
			1500
		);
	});
});
