// Exercise 11
// Move this variable to a json file and load the data in this js
var products = [
  {
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
  },
  {
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
  },
  {
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
var cartList = [];
var cart = [];
var subtotal = {
  grocery: {
    value: 0,
    discount: 0,
  },
  beauty: {
    value: 0,
    discount: 0,
  },
  clothes: {
    value: 0,
    discount: 0,
  },
};
var total = 0;

// Exercise 1
let addToCartList = (id) => {
  // 1. Loop for to the array products to get the item to add to cart
  // Instead of looping, i will search for the product directly in the array (i have zero-indexed the function)
  add_product = products[id];

  // 2. Add found product to the cartList array
  cartList.push(add_product);
  console.log(cartList);
};

// Exercise 2
let cleanCart = (id) => {
  delete_product = products[id];

  // First some error handling, where we will check that in the cart it is the object
  if (cartList.includes(delete_product)) {
    // Now we will get the index in which the cart element is stored
    for (let i = 0; i < cartList.length; i++) {
      if (delete_product == cartList[i]) {
        // Gonna delete 1 object in the position of the array
        cartList.splice(i, 1);
        console.log(cartList);
      }
    }
  } else {
    console.log("You have not choosen this object");
  }
};

// Exercise 3
function calculateSubtotals() {
  // For loop for each element in the cart list
  for (let i = 0; i < cartList.length; i++) {
    // Doing a switch case for the types of each element of the cart list array elements
    switch (cartList[i].type) {
      case "grocery":
        subtotal.grocery.value += cartList[i].price;

        break;
      case "beauty":
        subtotal.beauty.value += cartList[i].price;
        break;
      case "clothes":
        subtotal.clothes.value += cartList[i].price;
        break;
    }
  }

  //Create the variables of subtotal of each category
  subtotalGrocery = subtotal.grocery.value;
  subtotalBeauty = subtotal.beauty.value;
  subtotalClothes = subtotal.clothes.value;

  console.log(subtotal);
}

// Exercise 4
function calculateTotal() {
  total = 0;

  // Going to loop for the elements inside of the array, and going to sum for each cart value
  Object.values(subtotal).forEach((cart) => {
    console.log(cart);
    total += cart.value;
    total -= cart.discount; // If discount is 0, it is not going to affect
  });

  // Print the price in dollars
  console.log("The price is", total, "$");
}

// Exercise 5
function applyPromotionsSubtotals() {
  let sumOil = 0;
  let sumCake = 0;

  for (let i = 0; i < cartList.length; i++) {
    console.log(cartList[i].name);
    switch (cartList[i].name) {
      default:
        console.log("This is neither oil or cake");

      // In the case that the item is a cooking oil
      case "cooking oil":
        // Will sum to the total
        sumOil++;

      case "Instant cupcake mixture":
        sumCake++;
    }
  }

  // Going to apply the discounts
  if (sumOil > 3) {
    subtotal.grocery.discount = 0.5 * sumOil;
    console.log("Disconut of oil product is", 0.5 * sumOil);
  }

  // Going to apply the discounts
  if (sumCake > 10) {
    subtotal.grocery.discount = 1.67 * sumCake;
    console.log("Disconut of cake product is", 1.67 * sumCake);
  }
}

// Exercise 6
function generateCart() {
    
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
}

// Exercise 7
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
}

// Exercise 8
function addToCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

// Exercise 9
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

// Exercise 10
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}
