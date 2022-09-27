// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = Number(product.querySelector(".price span").innerText);
  let quantity = Number(product.querySelector(".quantity input").value);
  let subtotal = price*quantity;

  product.querySelector(".subtotal span").innerText = subtotal;
  
  return subtotal;
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 
  // end of test

  // ITERATION 2
  
   // let allProducts = Number(document.querySelectorAll(".subtotal span").innerText);
  // let totalPrice = document.querySelector("#total-value")
  // let total =0;

  //   for(let i=0; i<allProducts.length;i++){
  //     total = total + allProducts[i]
        
  //     } 
  //     totalPrice.innerText = total
      

} 

  // ITERATION 3
  //... your code goes here

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
