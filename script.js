let message = document.getElementById("message");
const body1 = document.querySelector(".body1");
const black = document.querySelector(".black");
const white = document.querySelector(".white");

black.classList.remove("hidden");
white.classList.remove("hidden");

let messageOnline = () => {
  message.textContent = "Internet Connection Available";
  body1.style.cssText = "background-color:#fff";
  message.style.cssText = "background-color: #222; color: #fff";
  white.classList.add("hidden");
  black.classList.remove("hidden");
};
let messageOffline = () => {
  message.textContent = "No Internet Connection";
  body1.style.cssText = "background-color:#000;";

  message.style.cssText = "background-color: #fff; color: #000";
  black.classList.add("hidden");
  white.classList.remove("hidden");
};

if (window.navigator.onLine) {
  messageOnline();
} else {
  messageOffline();
}

window.addEventListener("online", messageOnline);
window.addEventListener("offline", messageOffline);
