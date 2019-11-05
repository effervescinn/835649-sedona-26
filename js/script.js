var btn = document.querySelector(".booking-button");   
var form = document.querySelector(".booking-form");
btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("form-show");
});   
var arrival = form.querySelector("[name=arrival-date]");
var leave = form.querySelector("[name=leave-date]");
var adults = form.querySelector("[name=adults]");
var children = form.querySelector("[name=children]");
form.addEventListener("submit", function (evt) {
    if (!arrival.value || !leave.value || !adults.value || !children.value) {
        evt.preventDefault();
        console.log("Нужно ввести даты и количество проживающих"); 
    }
});