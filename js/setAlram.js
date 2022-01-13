const setBtn = document.querySelector("#setAlram");
const selectSound = document.querySelector("#selectSound");
const setAlramIcon = document.querySelector(".setAlramIcon");
const setAlramText = document.querySelector("#setAlramText");

const setAudio = document.querySelector(".audio");

let alramHours = document.querySelector("#alramHours");
let alramMinutes = document.querySelector("#alramMinutes");

setBtn.addEventListener("click", () => {
  let alramHoursValue = alramHours.options[alramHours.selectedIndex].value;
  if (setAlramText.innerText === "알람 설정") {
    setAlramText.innerText = "알람 중지";
    alramTimer();
    setBtn.removeChild(setAlramIcon);
  } else {
    setAudio.pause();
    setAlramText.innerText = "알람 설정";
    unTimer();
  }
});

const timeBoard = document.createElement("span");
timeBoard.attributes("class", "timeBoard");

function alramTimer() {
  let alramHoursValue = alramHours.options[alramHours.selectedIndex].value;
  let alramMinutesValue =
    alramMinutes.options[alramMinutes.selectedIndex].value;
  const getDate = new Date();
  let getHours = getDate.getHours();
  let getMinutes = getDate.getMinutes();
  if (getHours <= alramHoursValue) {
    if (getMinutes <= alramMinutesValue) {
      getHours = String(
        Math.abs(getDate.getHours() - alramHoursValue)
      ).padStart(2, "0");
      getMinutes = String(
        Math.abs(getDate.getMinutes() - alramMinutesValue)
      ).padStart(2, "0");
    } else {
      getHours = String(
        Math.abs(getDate.getHours() - (alramHoursValue - 1))
      ).padStart(2, "0");
      getMinutes = String(
        Math.abs(getDate.getMinutes() - (alramMinutesValue + 60))
      ).padStart(2, "0");
    }
  }
  if (getHours > alramHoursValue) {
    if (getMinutes > alramMinutesValue) {
      getHours = String(
        Math.abs(getDate.getHours() - (parseInt(alramHoursValue) + 23))
      ).padStart(2, "0");
      getMinutes = String(
        Math.abs(getDate.getMinutes() - (alramMinutesValue + 60))
      ).padStart(2, "0");
    } else {
      getHours = String(
        Math.abs(getDate.getHours() - (parseInt(alramHoursValue) + 24))
      ).padStart(2, "0");
      getMinutes = String(
        Math.abs(getDate.getMinutes() - alramMinutesValue)
      ).padStart(2, "0");
    }
  }
  let remainingTimeSec = parseInt(getHours) * 3600 + parseInt(getMinutes) * 60;
  updateTimerText(remainingTimeSec);
  timer = setInterval(() => {
    if (remainingTimeSec <= 0) {
      setAudio.play();
    }
    updateTimerText(--remainingTimeSec);
  }, 1000);
}

function updateTimerText(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - hours * 3600) / 60);
  const seconds = time - hours * 3600 - minutes * 60;
  timeBoard.innerText = `${hours}:${minutes}:${seconds}`;
  selectSound.appendChild(timeBoard);
}

function unTimer() {
  timeBoard.innerText = "";
  clearInterval(timer);
}
