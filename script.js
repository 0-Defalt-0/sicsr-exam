"use strict";

const login = document.querySelector(".login");
const view = document.querySelector(".seat_no_view");

login.addEventListener("click", () => {
  document.querySelector("#prn_number").value == 18030121097
    ? (document.querySelector(".change").style.display = "inline")
    : alert("please enter a valid PRN");
});

view.addEventListener("click", () => {
  document.querySelector("#seat_number").value == 420597
    ? (document.querySelector(".download").style.display = "inline")
    : alert("invalid seat number");
});
