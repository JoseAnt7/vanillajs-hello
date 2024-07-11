/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  let elemento;
  let number;

  for (let i = 0; i <= 3; i++) {
    switch (i) {
      case 0:
        elemento = document.getElementById("who");
        number = Math.floor(Math.random() * who.length);
        elemento.innerHTML = who[number];
        break;
      case 1:
        elemento = document.getElementById("action");
        number = Math.floor(Math.random() * action.length);
        elemento.innerHTML = action[number];
        break;
      case 2:
        elemento = document.getElementById("what");
        number = Math.floor(Math.random() * what.length);
        elemento.innerHTML = what[number];
        break;
      case 3:
        elemento = document.getElementById("when");
        number = Math.floor(Math.random() * when.length);
        elemento.innerHTML = when[number];
        break;
      default:
        break;
    }
  }
};
