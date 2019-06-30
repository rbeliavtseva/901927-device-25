var show = document.querySelector(".show-modal-btn");
var modal = document.querySelector(".modal-contact");
var close = document.querySelector(".modal-close");
var form = modal.querySelector("form");
var name = modal.querySelector("[name=name]");
var email = modal.querySelector("[name=email]");
var message = modal.querySelector("[name=message]");

var showMap = document.querySelector(".contacts-map");
var modalMap = document.querySelector(".modal-map");
var closeMap = modalMap.querySelector(".modal-close");


show.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal-show");
    name.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal-show");
    modal.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !message.value) {
        evt.preventDefault();
        modal.classList.remove("modal-error");
        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add("modal-error");
    } 
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains("modal-show")) {
        modal.classList.remove("modal-show");
        modal.classList.remove("modal-error");
      }
    }
  });

  showMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalMap.classList.contains("modal-show")) {
        modalMap.classList.remove("modal-show");
      }
    }
  });