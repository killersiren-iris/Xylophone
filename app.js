const note1 = document.getElementById("note1");
const note2 = document.getElementById("note2");
const note3 = document.getElementById("note3");
const note4 = document.getElementById("note4");
const note5 = document.getElementById("note5");
const note6 = document.getElementById("note6");
const note7 = document.getElementById("note7");
const note8 = document.getElementById("note8");

const audio1and8 = new Audio("http://bit.ly/xy-note1-and-8");
const audio2 = new Audio("http://bit.ly/xy-note2");
const audio3 = new Audio("http://bit.ly/xy-note3");
const audio4 = new Audio("http://bit.ly/xy-note4");
const audio5 = new Audio("http://bit.ly/xy-note5");
const audio6 = new Audio("http://bit.ly/xy-note1-and-8");
const audio7 = new Audio("http://bit.ly/xy-note7");

note1.onmouseover = () => {
  audio1and8.pause();
  audio1and8.currentTime = 0;
  audio1and8.play();
};

note2.onmouseover = () => {
  audio2.pause();
  audio2.currentTime = 0;
  audio2.play();
};

note3.onmouseover = () => {
  audio3.pause();
  audio3.currentTime = 0;
  audio3.play();
};

note4.onmouseover = () => {
  audio4.pause();
  audio4.currentTime = 0;
  audio4.play();
};

note5.onmouseover = () => {
  audio5.pause();
  audio5.currentTime = 0;
  audio5.play();
};

note6.onmouseover = () => {
  audio6.pause();
  audio6.currentTime = 0;
  audio6.play();
};

note7.onmouseover = () => {
  audio7.pause();
  audio7.currentTime = 0;
  audio7.play();
};

note8.onmouseover = () => {
  audio1and8.pause();
  audio1and8.currentTime = 0;
  audio1and8.play();
};