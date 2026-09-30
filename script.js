let name = "vistor";

const button = document.getElementById("hello-button");
const message = document.getElementById("message");

button.addEventListener("click", function() {
  message.textContent = "Hello, " + name + "Thank you for visiting my portfolio! I appreciate you taking the time to view my page and learn more about me and my work.";
});