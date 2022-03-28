const product = document.getElementById("product");
let productList = [
  {
    id: 1,
    img: "Deals of the day/deal2.jpg",
    title: "Hammock And Swings",
    discount: "Up to 60% off",
    deal: "Grab or Gone",
    quantity: 5,
  },
  {
    id: 2,
    img: "Deals of the day/deal3.jpeg",
    title: "Hammock And Swings",
    discount: "Up to 60% off",
    deal: "Grab or Gone",
    quantity: 5,
  },
  {
    id: 3,
    img: "Deals of the day/deal4.jpeg",
    title: "Hammock And Swings",
    discount: "Up to 60% off",
    deal: "Grab or Gone",
    quantity: 5,
  },
  {
    id: 4,
    img: "Deals of the day/deal5.jpeg",
    title: "Hammock And Swings",
    discount: "Up to 60% off",
    deal: "Grab or Gone",
    quantity: 5,
  },
  {
    id: 5,
    img: "Deals of the day/deal1.jpg",
    title: "Hammock And Swings",
    discount: "Up to 60% off",
    deal: "Grab or Gone",
    quantity: 5,
  },
];
init();
function init() {
  if (localStorage.getItem("product") === null) {
    localStorage.setItem("product", JSON.stringify(productList));
  } else {
    productList = JSON.parse(localStorage.getItem("product"));
  }
}
function displayProducts() {
  product.innerHTML = "";
  for (let item in productList) {
    let outerBox = document.createElement("a");
    console.log(productList[item].id);
    outerBox.href = `product.html?id=${productList[item].id}`;
    let image = document.createElement("img");
    image.src = productList[item].img;
    let discount = document.createElement("p");
    discount.innerText = productList[item].discount;
    let quantity = document.createElement("p");
    quantity.innerText = productList[item].quantity;
    outerBox.append(image, discount, quantity);
    product.appendChild(outerBox);
  }
}

displayProducts();
