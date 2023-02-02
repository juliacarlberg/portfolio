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
