let form = document.querySelector("form");
let inputProductoOne = document.getElementById("inputProducto1");
let inputProductoTwo = document.getElementById("inputProducto2");
let inputProductoThree = document.getElementById("inputProducto3");
let inputProductoFour = document.getElementById("inputProducto4");
let inputProductoFive = document.getElementById("inputProducto5");

let resultTotal = document.querySelector("h3#resultTotal");
let resultDiscount = document.querySelector("h3#resultDiscount");

/*Esta función submit() es para hacer el cálculo y mostrar el resultado en el HTML elemento*/
function submit(event) {
  event.preventDefault();
  let listaProductos = [
    Number(inputProductoOne.value),
    Number(inputProductoTwo.value),
    Number(inputProductoThree.value),
    Number(inputProductoFour.value),
    Number(inputProductoFive.value),
  ];
  let sum = 0;
  function sumar() {
    for (i = 0; i < listaProductos.length; i++) {
      sum += listaProductos[i];
    }
    let resultado = sum;
    if (resultado > 100) {
      let discount = 15;
      let totalDiscount = (resultado * discount) / 100;
      let totalWithDiscount = resultado - totalDiscount;

      resultTotal.innerHTML = `PRECIO TOTAL: ${resultado}€`;
      resultDiscount.innerHTML = `PRECIO CON DESCUENTO: ${totalWithDiscount}€ 👌`;
      resultDiscount.style.color = "green";
      let messageBodyModal = document.getElementById("modalMessage");
      messageBodyModal.textContent = `Wow tu descuento es de ${totalDiscount}€!! Eso es un gran descuento! En total sólo pagarás ${totalWithDiscount}€😉`;
    } else if (resultado <= 100) {
      resultTotal.innerHTML = `PRECIO TOTAL: ${resultado}€`;
      resultDiscount.innerHTML = `No tienes descuentos disponibles ☹`;
      let messageBodyModal = document.getElementById("modalMessage");
      messageBodyModal.textContent = `En total sólo pagarás ${resultado}€😉`;
      resultDiscount.style.color = "gray";
    }
  }

  sumar();
}

/*Esta función showModal() es para mostrar el modal*/
function showModal() {
  var myModal = new bootstrap.Modal(document.getElementById("myModal"));
  myModal.show();
}

/*Este evento es para esconder el modal cuando clicas en el botón "close" (dentro del modal)*/
document.addEventListener("DOMContentLoaded", function () {
  var buttonClose = document.querySelector(".btn-close");
  buttonClose.addEventListener("click", function () {
    var my_Modal = document.querySelector("#myModal");

    var anotherModal = new bootstrap.Modal(my_Modal);

    anotherModal.hide();
  });
});

/*Este evento es para hacer el cálculo (ejecutar la función) cuando clica sobre el botón "submit"*/
form.addEventListener("submit", submit);

/*Este evento es para mostrar el modal(ejecutar la función) cuando clicas sobre el botón "submit"*/
form.addEventListener("submit", showModal);
