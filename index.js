let wins = 0;
let losses = 0;

let onChange = e => {
  
};

document.getElementById("wins").addEventListener("change", e => {
  if (typeof JSON.parse(e.target.value) == "number") {
    wins = e.target.value;
    else
  onChange);
document.getElementById("losses").addEventListener("change", onChange);
