const form = document.getElementById("form");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const inputFields = document.querySelectorAll(".input-field");
const errorContainers = document.querySelectorAll(".error-container");
const errorMessageDay = document.getElementById("error-message-day");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  inputFields.forEach((input, index) => {
    const value = input.value.trim();
    if (value === "") {
      displayErrorMessage(errorContainers[index], "This field is required.");
    } else {
      hideErrorMessage(errorContainers[index]);
    }
  });
});

//Function to display error message if any field is empty
function displayErrorMessage(container, message) {
  container.textContent = message;
  container.style.display = "block";
  // day.style.borderColor = "red";
  // month.style.borderColor = "red";
  // year.style.borderColor = "red";
}
//Function to hide error message if any field is empty
function hideErrorMessage(container) {
  container.textContent = "";
  container.style.display = "none";
}
