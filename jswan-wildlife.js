// Create constants for DOM manipulation purposes

const InfoIcon = document.querySelector('.info__icon');
const sliderMan1 = document.querySelector('.anim1_footage');
const sliderMan2 = document.querySelector('.anim2_footage');
const sliderMan3 = document.querySelector('.anim3_footage');
const sliderMan4 = document.querySelector('.anim4_footage');
const sliderMan5 = document.querySelector('.anim5_footage');
const sliderB1 = document.getElementById('sBtn1');
const sliderB2 = document.getElementById('sBtn2');
const sliderB3 = document.getElementById('sBtn3');
const sliderB4 = document.getElementById('sBtn4');
const sliderB5 = document.getElementById('sBtn5');

// Code to toggle for overlay textfor te middle card on the summary page

InfoIcon.addEventListener('click', () => {
  document.querySelector('.original__information').classList.toggle('overlayText');
  document.querySelector('.more__information').classList.toggle('triggerInformation');
  document.querySelector('.card2').classList.toggle('card2BgColor');
  document.querySelector('.general').classList.toggle('card2BgColor');
});

// Code to provide for manual navigation of slides on the Home Page
// Remove classLists for animation perfomance and display from buttons not clicked / chosen

function removeProperties() {
  sliderMan1.classList.remove('perform_animation');
  sliderMan2.classList.remove('perform_animation');
  sliderMan3.classList.remove('perform_animation');
  sliderMan4.classList.remove('perform_animation');
  sliderMan5.classList.remove('perform_animation');
  sliderMan1.style.display = 'none';
  sliderMan2.style.display = 'none';
  sliderMan3.style.display = 'none';
  sliderMan4.style.display = 'none';
  sliderMan5.style.display = 'none';
}

// Code for click events on buttons on Home Page for manual navigation of slides
// Catering for all 5 buttons

// Check if Button One is Clicked

sliderB1.addEventListener('click', () => {
  removeProperties();
  setTimeout(() => {
    sliderMan1.classList.add('perform_animation');
    sliderMan1.style.display = 'block';
  }, 200);
});

// Check if Button Two is Clicked

sliderB2.addEventListener('click', () => {
  removeProperties();
  setTimeout(() => {
    sliderMan2.classList.add('perform_animation');
    sliderMan2.style.display = 'block';
  }, 200);
});

// Check if Button Three is Clicked

sliderB3.addEventListener('click', () => {
  removeProperties();
  setTimeout(() => {
    sliderMan3.classList.add('perform_animation');
    sliderMan3.style.display = 'block';
  }, 200);
});

// Check if Button Four is Clicked

sliderB4.addEventListener('click', () => {
  removeProperties();
  setTimeout(() => {
    sliderMan4.classList.add('perform_animation');
    sliderMan4.style.display = 'block';
  }, 200);
});

// Check if Button Five is Clicked

sliderB5.addEventListener('click', () => {
  removeProperties();
  setTimeout(() => {
    sliderMan5.classList.add('perform_animation');
    sliderMan5.style.display = 'block';
  }, 200);
});
