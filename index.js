let wins = 0;
let losses = 0;

let points = 0;
let winRate = 0;
let experience = 0;
let skill = 0;

let onChange = () => {
  points = losses + (6 * wins);
  winRate = 100 * (wins / (wins + losses));
  experience = wins * 1.5 + losses; 
  skill = (wins - losses) / experience;
  document.getElementById("points").innerText = points;
  document.getElementById("win-rate").innerText = winRate;
  document.getElementById("Experience").innerText = experience;
  document.getElementById("Skill").innerText = skill;
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
    losses = JSON.parse(e.target.value);
    document.getElementById("error-loss").innerText = "";
  } else {
    wins = 0;
    document.getElementById("error-loss").innerText = "Invalid Format";
  }
  onChange();
});
