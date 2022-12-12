var menu_bar = document.getElementById("menu-bar");
var menu_list = document.getElementById("menu-list");
var feature = document.getElementById("feature");

function caret() {
  feature.classList.add("change-feature");
}

function removeCaret() {
  feature.classList.remove("change-feature");
}

function menuBar() {
  menu_bar.classList.toggle("icon");
  menu_list.classList.toggle("change-menulist");
}

function showfeature() {
  // if(screen.width <= 768){
    feature.classList.toggle("change-feature-small-screen");
  // }
}

//owl carousel starts here

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    rtl: false,
    autoplay: true,
    smartSpeed:500,
    autoplayTimeout: 2000,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

//owl carousel ends here

// on hover menu scrolling up animation in menu section starts here

function details(event) {
  let cardInfo = event.childNodes[3];
  cardInfo.classList.add("change");
  cardInfo.classList.remove("removeChange");
}
function detailsRemove(event) {
  let cardInfo = event.childNodes[3];
  cardInfo.classList.add("removeChange");
  cardInfo.classList.remove("change");
}

// on hover menu scrolling up animation in menu section ends here

//1) way of fetching an element through childnode and storing it in varliable ("let") :---

// let overlay =chefPic.childNodes[1];
// overlay.classList.add("change-overlay");

//2) way of fetching an element without variale:---
// chefPic.childNodes[1].classList.add("change-overlay");

function showOverlay(chefInfo) {
  chefInfo.classList.add("chef-info-change");
  let chefPic = chefInfo.childNodes[1];
  console.log(chefPic);
  let overlay = chefPic.childNodes[1];
  console.log(overlay);
  overlay.classList.add("change-overlay");
  let heading = chefInfo.childNodes[3];
  heading.childNodes[1].classList.add("c-name-change");
}

function removeOverlay(event) {
  event.classList.remove("chef-info-change");
  let chefPic = event.childNodes[1];
  let overlay = chefPic.childNodes[1];
  overlay.classList.remove("change-overlay");
  let heading = event.childNodes[3];
  heading.childNodes[1].classList.remove("c-name-change");
}

// overlay function in chefs section ends here

// code written to change the social icon color in chef section ..starts here

function orangeColor(fa_stack) {
  let circle = fa_stack.childNodes[1];
  console.log(circle);
  circle.style.color = "#fb5849";
  circle.style.transition = "all .5s ease";
}

function whiteColor(fa_stack) {
  let circle = fa_stack.childNodes[1];
  console.log(circle);
  circle.style.color = "#fff";
}

// code written to change the social icon color in chef section ..ends here

//klassy week menu starts here
var breakfast = document.getElementById("breakfast-menu");
var lunch = document.getElementById("lunch-menu");
var dinner = document.getElementById("dinner-menu");

var breakfastPara = document.getElementById("breakfastPara");
var lunchPara = document.getElementById("lunchPara");
var dinnerPara = document.getElementById("dinnerPara");

function showMenu(weekly_special) {
  if (weekly_special.id == "lunch") {
    console.log(lunchPara);
    lunchPara.style.color = "#fb5849";
    breakfastPara.style.color = "#191A20";
    dinnerPara.style.color = "#191A20";
    lunch.style.display = "block";
    dinner.style.display = "none";
    breakfast.style.display = "none";
  } else if (weekly_special.id == "dinner") {
    console.log(dinnerPara);
    dinnerPara.style.color = "#fb5849";
    lunchPara.style.color = "#191A20";
    breakfastPara.style.color = "#191A20";
    dinner.style.display = "block";
    lunch.style.display = "none";
    breakfast.style.display = "none";
  } else if (weekly_special.id == "breakfast") {
    console.log(breakfastPara);
    breakfastPara.style.color = "#fb5849";
    dinnerPara.style.color = "#191A20";
    lunchPara.style.color = "#191A20";
    breakfast.style.display = "block";
    lunch.style.display = "none";
    dinner.style.display = "none";
  }
}
//klassy week menu ends here
window.addEventListener("mouseup", function (event) {
  if (!menu_list.contains(event.target) && !menu_bar.contains(event.target)) {
    menu_bar.classList.remove("icon");
    menu_list.classList.remove("change-menulist");
  }
});
