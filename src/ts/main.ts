//modal
let modal: any = document.getElementById("myModal");
let btn: any = document.getElementById("cvButton");
let closeBtn: any = document.getElementById("closeButton");

//öppna modal
btn.onclick = function () {
  modal.style.display = "block";
};

//stängningskryss för modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

//funktionalitet för att kunna trycka utanför för att stänga
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let burgerBtn: any = document.getElementById("burgerBtn");
let burgerModal: any = document.getElementById("myBurgerModal");

burgerBtn.onclick = function () {
  burgerModal.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == burgerModal) {
    burgerModal.style.display = "none";
  }
};

//slide prickar
let slideIndex = 1;
showDivs(slideIndex);
showMobileDivs(slideIndex);

function plusDivs(n: number) {
  showDivs((slideIndex += n));
  showMobileDivs((slideIndex += n));
}

function currentDiv(n: number) {
  showDivs((slideIndex = n));
  showMobileDivs((slideIndex = n));
}

function showDivs(n: number) {
  let i;
  let x = document.getElementsByClassName(
    "mySlides"
  ) as HTMLCollectionOf<HTMLElement>;
  let dots = document.getElementsByClassName("desktop-dot");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-white";
}

function showMobileDivs(n: number) {
  let i;
  let x = document.getElementsByClassName(
    "myMobileSlides"
  ) as HTMLCollectionOf<HTMLElement>;
  let dots = document.getElementsByClassName("w3-badge");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-white";
}

//text animation

let i = 0;

function typeWriter() {
  let txt = "<Frontend-utvecklare>";
  let speed = 80;
  if (i < txt.length) {
    (document.getElementById("demo") as HTMLElement).innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
