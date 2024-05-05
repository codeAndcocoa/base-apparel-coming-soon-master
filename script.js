//Variables
const emailInputField = document.getElementById("email");
const subscribeButton = document.querySelector(".newsletter a");
const emptyErrorMessage = document.querySelector(".error-message .empty");
const formatErrorMessage = document.querySelector(".error-message .format");
const errorImage = document.querySelector(".error-img");

const emailInputError = () => {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const InputValue = emailInputField.value.trim();
  if (InputValue === "") {
    emailInputField.style.border = "1.1px solid hsl(0, 93%, 68%)";
    emptyErrorMessage.style.display = "block";
    errorImage.style.display = "block";
    formatErrorMessage.style.display = "none";
  } else if (InputValue !== "" && !regex.test(emailInputField.value)) {
    emailInputField.style.border = "1.1px solid hsl(0, 93%, 68%)";
    formatErrorMessage.style.display = "block";
    errorImage.style.display = "block";
    emptyErrorMessage.style.display = "none";
  } else {
    emailInputField.value = "";
    formatErrorMessage.style.display = "none";
    emptyErrorMessage.style.display = "none";
    errorImage.style.display = "none";
    emailInputField.style.border = "";
  }
};
//Event listeners
subscribeButton.addEventListener("click", () => {
  emailInputError();
});

subscribeButton.addEventListener("touchstart", ()=> {
 this.style.background="hsl(0, 80%, 86%)";
  
});
subscribeButton.addEventListener("touchend", ()=> {
  this.style.background="linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))";
});