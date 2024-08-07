const rollButton = document.querySelector("[data-roll]");
const container = document.querySelector("[data-container]");
const diceIcon = document.querySelector("[data-dice-icon]");
let totalRolls = 0;
const rollHistory = JSON.parse(localStorage.getItem('rollResult')) || [];
function genereteRandomNum() {
  const diceIcons = {
    1: "⚀",
    2: "⚁",
    3: "⚂",
    4: "⚃",
    5: "⚄",
    6: "⚄",
  };
  const [min, max] = [1, 6];
  const randomNum = Math.floor(Math.random() * (max - min) + min);
  return diceIcons[randomNum];
}
function historyLocalStorage(diceIcon) {
  rollHistory.push({ diceIcon, totalRolls });
  localStorage.setItem('rollResult', JSON.stringify(rollHistory));
}
function displayHistory() {
  if(container.innerHTML.length > 1){
    container.innerHTML = '';
  };
  console.log(rollHistory)
  rollHistory.forEach((rollResult) => {
    const template = document.getElementsByTagName("template")[0];
    const clone = template.cloneNode(true);
    const resultContainer = clone.content.querySelector(
      ".dice-roll-result-container"
    );
    const title = resultContainer.querySelector("[data-title]");
    const diceContainer = resultContainer.querySelector(
      "[ data-dice-container]"
    );
    title.textContent = rollResult.totalRolls;
    diceContainer.textContent = rollResult.diceIcon;
    container.appendChild(resultContainer);
  });
}
function addDiceIcon() {
  const dice = genereteRandomNum();
  diceIcon.textContent = dice;
  diceIcon.classList.add("roll-animation");
  totalRolls++;
  historyLocalStorage(dice);
  displayHistory();
};
rollButton.addEventListener("click", addDiceIcon);
console.log(rollHistory)
displayHistory();
//App should be able to generete 6 random numbers
//there should be objects with numbers and according dice icons
