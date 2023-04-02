const regContainer = document.createElement("div");

const title = document.createElement("h3");

title.innerHTML = "Create your account";

regContainer.classList.add("nav");

const emailInput = document.createElement("Input");
emailInput.placeholder = "Enter your email";

const nameInput = document.createElement("Input");
nameInput.placeholder = "Enter your name";

const passInput = document.createElement("input");
passInput.type = "password";
passInput.placehoder = "Enter your password";

const confirmInput = document.createElement("input");
confirmInput.type = "password";
confirmInput.placehoder = "Enter your password";

const submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.value = "Register";

const linkTologin = document.createElement("a");
linkTologin.innerHTML = "You already have an account?";

regContainer.appendChild(title);
regContainer.appendChild(emailInput);
regContainer.appendChild(nameInput);
regContainer.appendChild(passInput);
regContainer.appendChild(confirmInput);
regContainer.appendChild(submitButton);
regContainer.appendChild(linkTologin);

const regFrom = document.createElement("form");
regFrom.appendChild(regContainer);

const app = document.getElementById("app")
app.appendChild(regFrom)