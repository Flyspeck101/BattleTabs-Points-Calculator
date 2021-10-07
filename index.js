let wins = 0;
let losses = 0;

let onChange = () => {
  const points = losses + 5 * wins;
  const winRate = 100 * wins / (wins + losses);
  const experience = wins * 1.5 + losses; 
  const skill = winRate * experience / 100;
  document.getElementById("points").innerText = points;
  document.getElementById("win-rate").innerText = winRate;
  document.getElementById("points").innerText = experience;
  document.getElementById("points").innerText = skill;
};

document.getElementById("wins").addEventListener("change", e => {
  if (typeof JSON.parse(e.target.value) == "number") {
    wins = JSON.parse(e.target.value);
    document.getElementById("error-win").innerText = "";
  } else {
    wins = 0;
    document.getElementById("error-win").innerText = "Invalid Format";
  }
  onChange();
});
document.getElementById("losses").addEventListener("change", e => {
  if (typeof JSON.parse(e.target.value) == "number") {
    wins = JSON.parse(e.target.value);
    document.getElementById("error-win").innerText = "";
  } else {
    wins = 0;
    document.getElementById("error-win").innerText = "Invalid Format";
  }
  onChange();
});
