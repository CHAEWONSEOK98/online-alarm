const audio = document.querySelector(".audio");
const alramSelect = document.querySelector("#alramSelect");
const playBtn = document.querySelector("#play");
const stopBtn = document.querySelector("#stop");

let src = ["HYP-Drama.mp3", "HYP-LoveDay.mp3", "HYP-WithMe.mp3"];

playBtn.addEventListener("click", () => {
  audio.play();
});

stopBtn.addEventListener("click", () => {
  audio.pause();
});

alramSelect.addEventListener("change", (event) => {
  if (event.target.value === src[0]) {
    audio.src = src[0];
  } else if (event.target.value === src[1]) {
    audio.src = src[1];
  } else if (event.target.value === src[2]) {
    audio.src = src[2];
  }
});
