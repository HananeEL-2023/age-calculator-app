const form = document.getElementById("form");
const day = document.getElementById("day").value;
const month = document.getElementById("month").value;
const year = document.getElementById("year").value;
const inputFields = document.querySelectorAll(".input-field");
const errorContainers = document.querySelectorAll(".error-container");

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
}
//Function to hide error message if any field is empty
function hideErrorMessage(container) {
  container.textContent = "";
  container.style.display = "none";
}
