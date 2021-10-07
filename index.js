let wins = 0;
let losses = 0;

let onChange = () => {
  
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
