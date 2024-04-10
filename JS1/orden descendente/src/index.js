function showNumbers(event) {
  event.preventDefault();
  let number = [];
  for (let i = 50; i >= 20; i -= 1) {
    number = number.concat([i]);
    let element = document.getElementById("numberTitle");
    element.textContent = `${number}`;
  }
}
let button = document.getElementById("button");
button.addEventListener("click", showNumbers);
