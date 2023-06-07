'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
// Modal Window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// btn scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(e.target.getBoundingClientRect());
  console.log('height/width', document.documentElement.clientHeight);
});

//scrolling
// window.scrollTo(
//   s1coords.left + window.pageXOffset,
//   s1coords.top + window.pageYOffset
// );

// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: 'smooth',
// });
// section1.scrollIntoView({ behavior: 'smooth' });
// });

// Page Navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event Listener to common parent element

document.querySelector('.nav__links').addEventListener('click', function (e) {
  //Matching strategy

  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
//2. Determine what element originated the event

//Tabbed COMPONENT
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  //Guard clause
  if (!clicked) return;

  //remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations_tab--active');
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// console.log(document.getElementsByClassName('btn'));

//Creating and Inserting elements

//.insertAdjacentHTML
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improved functionality and analytics';
// message.innerHTML =
//   'We use cookies for improved functionality and analytics <button class ="btn btn--close-cookie"> Got it! </button>';
// // header.prepend(message);
// header.append(message);

// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

// DELETE MESSAGE
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // message.remove();
//     message.parentElement.removeChild(message);
//   });

// //Styles

// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// console.log(getComputedStyle(message).color);
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height + 10) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// //Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.src);
// logo.alt = 'Beautiful minimalist logo';
// logo.setAttribute('company', 'Bankist');
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.twitter-link');
// console.log(link.href);

// //Data attributes
// console.log(logo.dataset.versionNumber);
// //Classes
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');
// logo.className = 'alona'; //dont use!! overwrite classes

// const h1 = document.querySelector('h1');
// const alerth1 = function (e) {
//   alert('addeventlistener');
//   h1.removeEventListener('mouseenter', alerth1);
// };
// h1.addEventListener('mouseenter', alerth1);

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alerth1);
// }, 3000);
// h1.onmouseenter = function (e) {
//   alert('addeventlistener');
// };

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => {
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)} )`;
// };
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target);

//   //STOP PROPAGATION
//   e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target);
// })

// const h1 = document.querySelector('h1');

//selecting child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstChild);
// h1.firstElementChild.style.color = 'white';
// //Going upwards: parents

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// //Selecting siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(el => {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
