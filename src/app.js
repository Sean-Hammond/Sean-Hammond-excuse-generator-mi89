import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomPhrase(arrayName) {
  return arrayName[Math.floor(Math.random() * arrayName.length)]
}

let who = ['Bobby', 'Will', 'The weatherman', 'My uncle', 'Dave'];
let action = ['ate', 'lost', 'crushed', 'said his number one priority was', 'stole'];
let what = ['my research', 'my phone', 'the camera', 'his glasses'];
let when = ['before the meeting', 'when he was sleeping', 'while I was researching', 'during the report', 'in the elevator', 'for his television program'];

window.onload = function() {
  //write your code here
  console.log("Function that dislays the excuse to the browser.");
  document.querySelector('#excuse').innerHTML = randomPhrase(who)
   + " " + randomPhrase(action) + " " + randomPhrase(what) + " " + randomPhrase(when) + "."
};

