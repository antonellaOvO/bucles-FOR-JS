function showNumbers(event) {
  event.preventDefault();
  let number = [];
  let inputNumberOne = document.getElementById("numeroOne").value;
  let inputNumberTwo = document.getElementById("numeroTwo").value;
  console.log(inputNumberOne);
  if (inputNumberOne > inputNumberTwo) {
    for (i = inputNumberOne; i >= inputNumberTwo; i--) {
      if (i % 2 === 0) {
        number = number.concat([i]);
        let element = document.getElementById("numberTitle");
        element.textContent = `${number}`;
      }
    }
  }
  if (inputNumberOne < inputNumberTwo) {
    for (i = inputNumberOne; i <= inputNumberTwo; i++) {
      if (i % 2 === 0) {
        number = number.concat([i]);
        console.log(number);
        let element = document.getElementById("numberTitle");
        element.textContent = `${number}`;
        console.log(element);
      }
    }
  }
}
let button = document.getElementById("button");
button.addEventListener("click", showNumbers);
