const numbersDiv = document.querySelector(".numbers");
const drawButton = document.querySelector("#draw");
const resetButton = document.querySelector("#reset");

const lottoNumbers = [];
const colors = ["tomato", "teal", "orange", "purple", "blue"];
const paintNumber = (number) => {
  const eachNumDiv = document.createElement("div");
  let colorIndex = Math.floor(number / 10);
  eachNumDiv.classList.add("eachNum");
  eachNumDiv.style.backgroundColor = colors[colorIndex];
  eachNumDiv.textContent = number;
  numbersDiv.appendChild(eachNumDiv);
};

drawButton.addEventListener("click", () => {
  while (lottoNumbers.length < 6) {
    const ran = Math.floor(Math.random() * 45) + 1;
    if (lottoNumbers.indexOf(ran) === -1) {
      lottoNumbers.push(ran);
      paintNumber(ran);
    }
  }
});

resetButton.addEventListener("click", () => {
  lottoNumbers.splice(0, 6);
  numbersDiv.innerHTML = "";
});
