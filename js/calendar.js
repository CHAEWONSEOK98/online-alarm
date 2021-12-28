const calendar = document.querySelector("#calendar");
let weeks = ["일", "월", "화", "수", "목", "금", "토"];

function getCalendar() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const week = date.getDay();

  calendar.innerText = `${year}년 ${month + 1}월 ${day}일 ${weeks[week]}요일`;
}

getCalendar();
