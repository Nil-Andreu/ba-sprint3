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

  /*In the case we have not changed the id number, we would make a for loop like the following:
    for (let i = 1; i < products.length + 1; i++) {
      if (i == id) {
        cartList.push(products[id-1])
      }
    }
  */
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
  // We loop for every element of the cartlist
  console.log("This is the cartList before the first loop", cartList);
  for (let i = 0; i < cartList.length; i++) {
    console.log(
      "For in cartList, where cartlist is",
      cartList,
      "in the number",
      i,
      "loop"
    );

    // There is a pretty method for arrays that will make our lives a lot easier
    // We will search for the index
    index = cart.indexOf(cartList[i]);
    if (index == -1) {
      // If returns -1, means the item is not in the array
      new_item = cartList[i];
      cart.push(new_item);

      // And now we add the quantity field, which is the element las pushed (so is in position length - 1)
      cart[cart.length - 1].quantity = 1;

      // We will apply the discounts in the next function
      cart[cart.length - 1].subtotalWithDiscount = 0;

      // We will have that the subtotal is the price of this product
      cart[cart.length - 1].subtotal = cart[cart.length - 1].price;
    } else {
      // We will go to the index, and increment the quantity
      cart[index].quantity += 1;

      // As we add a new quantity, the subtotal will be added by 1 the price
      cart[index].subtotal += cart[index].price;
    }
  }
}

// Exercise 7
function applyPromotionsCart() {
  // Will loop for each item in the cart
  for (let i = 0; i < cart.length; i++) {
    console.log(cart[i]);
    // And for each item we will check which is the type and quantity
    cartName = cart[i].name;
    console.log(cartName);

    switch (cartName) {
      case "cooking oil":
        if (cart[i].quantity > 3) {
          discount = cart[i].quantity * 0.5;
          console.log(discount);
          cart[i].subtotalWithDiscount = cart[i].subtotal - discount;
        }

      case "Instant cupcake mixture":
        if (cart[i].quantity > 10) {
          discount = cart[i].quantity * 1.67;
          cart[i].subtotalWithDiscount = cart[i].subtotal - discount;
        }
    }
  }
}

// Exercise 8
function addToCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  for (let i = 0; i < products.length; i++) {
    // 2. Add found product to the cart array
    if (i == id) {
      new_product = products[i];
      console.log(new_product)

      index = cart.indexOf(new_product);
      console.log(index)
      if (index == -1) {
        cart.push(new_product);
        index = cart.length-1
        cart[index].quantity = 1;
      } else {
        cart[index].quantity += 1;
      }
    }
  }
}

// Exercise 9
function removeFromCart(id) {
  // I can also use indexof
  index = cart.indexOf(products[id])
  if (index == -1) {
    window.alert("Error, this product was not chosen")
  }
  quantity = cart[index].quantity

  if (quantity > 1){
    // Will substract one to the quantity
    cart[index].quantity -= 1
  } else {
    // Will delete one element in the position of the index
    cart.splice(index, 1)
  }
}

// Exercise 10
function printCart() {
  // Will create the list in the JS
  let list = "<ul>"

  // Will loop for the elements of the cart
  for (let i of cart) {

    // will print the name of each element of the cart
    list += `<li>${i.name} with quantity ${i.quantity}</li>`
  }
  list += "</ul>"
  console.log(list)

  // And add the unordered list to the div of the html
  document.querySelector('.list').innerHTML = list
}
