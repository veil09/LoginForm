const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const middleName = document.getElementById("middleName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const firstNameError = document.getElementById("firstNameError");
  const passwordError = document.getElementById("passwordError");

  firstNameError.textContent = "";
  passwordError.textContent = "";

  let hasError = false;

  if (firstName.trim() === "") {
    const errorParagraph = document.createElement("p");
    errorParagraph.textContent = "First Name is required.";

    firstNameError.appendChild(errorParagraph);

    hasError = true;

    console.log("First Name is required.");
  }

  if (password !== confirmPassword) {
    const errorParagraph = document.createElement("p");
    errorParagraph.textContent = "Password and Confirm Password do not match.";

    passwordError.appendChild(errorParagraph);

    hasError = true;

    console.log("Password and Confirm Password do not match.");
  }

  if (!hasError) {
    alert(
      "Registration successful:\n\n" +
        "First Name: " +
        firstName +
        "\n" +
        "Middle Name: " +
        middleName +
        "\n" +
        "Last Name: " +
        lastName +
        "\n" +
        "Email: " +
        email
    );

    console.log("Registration successful.");
  }
});
