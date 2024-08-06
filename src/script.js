const rollButton = document.querySelector("[data-roll]");
const container = document.querySelector("[data-container]");
const diceIcon = document.querySelector("[data-dice-icon]");
function genereteRandomNum() {
  const diceIcons = {
    1: "⚀",
    2: "⚁",
    3: "⚂",
    4: "⚃",
    5: "⚄",
    6: "⚄",
  };
  const [min,max] = [1,6];
  const randomNum = Math.floor(Math.random()*(max-min)+min);
  return diceIcons[randomNum];
};
//App should be able to generete 6 random numbers
//there should be objects with numbers and according dice icons
