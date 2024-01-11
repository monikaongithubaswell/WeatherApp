// Feature 1
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let present = document.querySelector("#currentTime");
present.innerHTML = `${day} ${hours}:${minutes}`;

// Feature 2
function nameChange(event) {
  event.preventDefault();
  let newName = document.querySelector("#city-input");

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${newName.value}`;
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", nameChange);
