var shadow = document.querySelector(".shadow");
var pay = document.querySelector(".payment");
var modal = document.querySelector(".modal");
var modalToCart = document.querySelector(".modal-2");
var burgerMenu = document.querySelector(".burger-menu__nav");
var map = document.querySelector(".content-delivery__map");
var close = document.querySelector(".content-delivery__map-close");

// карта
function showMap() {
  shadow.classList.remove("hidden");
  map.classList.remove("hidden");
  close.classList.remove("hidden");
}

function closeMap() {
  shadow.classList.add("hidden");
  map.classList.add("hidden");
  close.classList.add("hidden");
}

// корзина
var qty = document.querySelectorAll(".item__qty-input");
var amount = document.querySelectorAll(".item__amount-sum");
var total = document.querySelector(".item__amount-sum_total");
var i;

var count = document.querySelector(".cart-count")
var cart = document.querySelector(".cart__wrapper")
var empty = document.querySelector(".cart_empty")

function increment(i) {
  ++qty[i].value;

  let a = parseFloat(amount[i].innerHTML);
  a += 55;
  amount[i].innerHTML = a;
}

function decrement(i) {
  
  if (qty[i].value <= 1) {
    return;
  } else {
    --qty[i].value;
  }

  let  a = parseFloat(amount[i].innerHTML);
  a -= 55;
  amount[i].innerHTML = a;
}

function sum() {
  let s = 0;
  parseFloat(total.innerHTML);
  for (i=0; i < amount.length; i++) {
    s += parseFloat(amount[i].innerHTML);
    total.innerHTML = s;

    document.querySelector(".total-to-pay").innerHTML = s;
  }
}

function openPaymentWindow() {
  shadow.classList.remove("hidden");
  pay.classList.remove("hidden");
}

function cancelPayment() {
  shadow.classList.add("hidden");
  pay.classList.add("hidden");
}

function makePayment() {
  let inp = document.querySelectorAll(".payment-form__input");
  let num = inp[0].value;
  let exp = inp[1].value;
  let name = inp[2].value;
  let cvv = inp[3].value;

  if (!num || !exp || !name || !cvv) {
    alert("Пожалуйста, заполните все поля.");
    return;
  }

  pay.classList.add("hidden");
  modal.classList.remove("hidden");
}

function closeModalInCart() {
  modal.classList.add("hidden");
  shadow.classList.add("hidden");
  count.classList.add("hidden");
  cart.classList.add("hidden");
  empty.classList.remove("hidden");
}

function deleteItem(i) {
  let item = document.querySelectorAll(".cart__item");
  item[i].classList.add("hidden");

  let minus = item[i].querySelector(".item__amount-sum");
  let a = parseFloat(minus.innerHTML);
  let b = parseFloat(total.innerHTML);
  total.innerHTML = b - a;
  document.querySelector(".total-to-pay").innerHTML = b - a;

  let c = parseFloat(count.innerHTML);
  count.innerHTML = --c;

  isCartEmpty()
}

function isCartEmpty() {
  if (parseFloat(count.innerHTML) == 0) {
    count.classList.add("hidden");
    cart.classList.add("hidden");
    empty.classList.remove("hidden");
  }
}

// быстрый заказ
var cert = document.querySelector(".quick-order__link-cert");
var formCert = document.querySelector(".quick-order__form-cert");
var canvas = document.querySelector(".quick-order__link-canvas");
var formCanvas = document.querySelector(".quick-order__form-canvas");
var photo = document.querySelector(".quick-order__add");

function orderCanvas() {
  cert.classList.remove("quick-order__link_active");
  formCert.classList.add("hidden");
  canvas.classList.add("quick-order__link_active");
  formCanvas.classList.remove("hidden");
  photo.classList.remove("hidden");
}

function orderCert() {
  canvas.classList.remove("quick-order__link_active");
  formCanvas.classList.add("hidden");
  cert.classList.add("quick-order__link_active");
  formCert.classList.remove("hidden");
  photo.classList.add("hidden");
}

function closeModalOrder() {
  modal.classList.add("hidden");
  shadow.classList.add("hidden");

  clearForm()
}

function clearForm() {
  let name = document.getElementById("client-name");
  name.value = "";

  let surname = document.getElementById("client-surname");
  surname.value = "";

  let email = document.getElementById("client-email");
  email.value = "";

  let tel = document.getElementById("client-tel");
  tel.value = "";

  let addr = document.getElementById("client-address");
  addr.value = "";
}

function openModalToCart() {
  shadow.classList.remove("hidden");
  modalToCart.classList.remove("hidden");
}

function closeModalToCart(){
  shadow.classList.add("hidden");
  modalToCart.classList.add("hidden");

  clearForm()
}

// бургер-меню
function showBurgerMenu() {
  shadow.classList.remove("hidden");
  burgerMenu.classList.remove("hidden");
}

function closeBurgerMenu() {
  shadow.classList.add("hidden");
  burgerMenu.classList.add("hidden");
}