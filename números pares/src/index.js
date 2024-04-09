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
  return number;
  console.log(number);
}
let button = document.getElementById("button");
button.addEventListener("click", showNumbers);
