console.log('funguju');

const buttonElm = document.querySelector('.objednat');
const whiteColor = document.querySelector('.bila');
const greyColor = document.querySelector('.seda');
const redColor = document.querySelector('.cervena');
const blueColor = document.querySelector('.modra');
let svgImage = document.querySelector('#product-image'); // přidána tečka před třídu

whiteColor.addEventListener('click', () => {
  svgImage.style.fill = '#ffffff';
});

greyColor.addEventListener('click', () => {
  svgImage.style.fill = 'grey';
});

redColor.addEventListener('click', () => {
  svgImage.style.fill = 'rgb(205, 67, 67)';
});

blueColor.addEventListener('click', () => {
  svgImage.style.fill = 'rgb(34, 116, 202)';
});

buttonElm.addEventListener('click', () => {
  const selectedColor = svgImage.style.fill;
  console.log('Vybraná barva:', selectedColor);
});
