const rollButton = document.querySelector("[data-roll]");
const container = document.querySelector("[data-container]");
const diceIcon = document.querySelector("[data-dice-icon]");
let totalRolls = localStorage.getItem("totalRolls") || 0;
const rollHistory = JSON.parse(localStorage.getItem("rollResult")) || [];
function genereteDiceIcon() {
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
/*ushing roll results in particular diceIcon and totalRoll amount inside rollHistory array also*/
function historyLocalStorage(diceIcon) {
  rollHistory.push({ diceIcon, totalRolls });
  localStorage.setItem("rollResult", JSON.stringify(rollHistory));
  localStorage.setItem("totalRolls", totalRolls);
}
/*function which displays history of previous dice rolls by looping through diceHistory array 
  which tracks results of every dice roll
*/
function displayHistory() {
  if (container.innerHTML.length > 1) {
    container.innerHTML = "";
  }
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
function removeAnimation() {
  diceIcon.addEventListener("animationend", () => {
    diceIcon.classList.remove("roll-animation");
  });
}
function addDiceIcon() {
  const dice = genereteDiceIcon();
  diceIcon.textContent = dice;
  diceIcon.classList.add("roll-animation");
  totalRolls++;
  historyLocalStorage(dice);
  displayHistory();
  removeAnimation();
}
rollButton.addEventListener("click", addDiceIcon);
displayHistory();
