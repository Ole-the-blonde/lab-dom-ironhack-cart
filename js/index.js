// ITERATION 1

const { product } = require('puppeteer');

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  console.log(price.textContent, quantity.value);
  const subtotal = product.querySelector('.subtotal span');
  console.log(subtotal.textContent);
  subtotal.textContent = price.textContent * quantity.value;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  let sum = 0;
  let allProducts = document.getElementsByClassName('product');
  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
    sum += updateSubtotal(allProducts[i]);
  }
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
