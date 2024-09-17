/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = [
    "Mi perrete ",
    "Mi abuela portuguesa ",
    "Un comunista ",
    "Un dedo "
  ];
  let action = [
    "se comió ",
    "hizo popotis en ",
    "ofreció al maligno ",
    "catapultó "
  ];
  let what = ["mis deberes ", "la IA de 4geeks ", "101 dálmatas "];
  let when = [
    "mientras yo hacía caca",
    "hace un minuto, te lo juro",
    "... ¿Quién eres y por qué te estoy contando esto?",
    "mientras dormía",
    "durante el minuto de silencio"
  ];

  let rdm1 = Math.floor(Math.random() * who.length);
  let rdm2 = Math.floor(Math.random() * action.length);
  let rdm3 = Math.floor(Math.random() * what.length);
  let rdm4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excusa").innerHTML =
    who[rdm1] + action[rdm2] + what[rdm3] + when[rdm4] + ".";

  console.log("Hello Rigo from the console!");
};
