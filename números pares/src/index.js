function showNumbers(event) {
  event.preventDefault();
  let number = [];
  for (let i = 50; i >= 20; i -= 1) {
    let arrayNumber = [i];
    number = number.concat([i]);
    console.log(number);
    let element = document.getElementById("numberTitle");
    element.textContent = `${number}`;
  }
}
let button = document.getElementById("button");
button.addEventListener("click", showNumbers);
/*let inputNumberOne = document.getElementById("");
let inputNumberTwo = document.getElementById("");
if(inputNumberOne > inputNumberTwo) {
for (i=inputNumberOne; i< inputNumberTwo; i++){
  let arrayNumber = [i];
    number = number.concat([i]);
    console.log(number);
    let element = document.getElementById("numberTitle");
    element.textContent = `${number}`;
};
} else (inputNumberOne < inputNumberTwo){
  for (i=inputNumberOne; i< inputNumberTwo; i--){
  let arrayNumber = [i];
    number = number.concat([i]);
    console.log(number);
    let element = document.getElementById("numberTitle");
    element.textContent = `${number}`;
};
}*/
