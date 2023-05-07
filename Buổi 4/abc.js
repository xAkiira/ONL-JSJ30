// const regContainer = document.createElement("div");

// const title = document.createElement("h3");

// title.innerHTML = "Create your account";

// regContainer.classList.add("nav");

// const emailInput = document.createElement("Input");
// emailInput.placeholder = "Enter your email";

// const nameInput = document.createElement("Input");
// nameInput.placeholder = "Enter your name";

// const passInput = document.createElement("input");
// passInput.type = "password";
// passInput.placehoder = "Enter your password";

// const confirmInput = document.createElement("input");
// confirmInput.type = "password";
// confirmInput.placehoder = "Enter your password";

// const submitButton = document.createElement("input");
// submitButton.type = "submit";
// submitButton.value = "Register";

// const linkTologin = document.createElement("a");
// linkTologin.innerHTML = "You already have an account?";

// regContainer.appendChild(title);
// regContainer.appendChild(emailInput);
// regContainer.appendChild(nameInput);
// regContainer.appendChild(passInput);
// regContainer.appendChild(confirmInput);
// regContainer.appendChild(submitButton);
// regContainer.appendChild(linkTologin);

// const regFrom = document.createElement("form");
// regFrom.appendChild(regContainer);

// const app = document.getElementById("app")
// app.appendChild(regFrom)

import Login form "./xyz";

class Hegister {
    $containerDiv
    $titleHeader
    $signupForm
    $emailInputEmail
    $nameInputTxt
    $passInputPass
    $confirmPassInputPass
    $submitBtn
    $gotoSigninLink

    constructor() {
        this.$emailInputEmail = document.createElement("input"); // <input> </input>
        this.$emailInputEmail.type = "email"; // <input type="email"> </input>
        this.$emailInputEmail.placeholder = "Enter your email ..."; // <input type="email" placeholder="Enter your email ..."> </input>

        this.$nameInputTxt = document.createElement("input");
        this.$nameInputTxt.type = "text";
        this.$nameInputTxt.placeholder = "Enter your name ...";

        this.$passInputPass= document.createElement("input");
        this.$nameInputTxt.type = "text";
        this.$nameInputTxt.placeholder = "Enter your name ...";

        this.$gotoSigninLink.addEventListener("click",this.gotoSignin);

        this.$containerDiv = document.createElement("div");
        this.$containerDiv.classList.add("center","app");

        this.$titleHeader = document.createElement("h2");
        this.$titleHeader.innerHTML = "Create your account"

        this.$signupForm = document.createElement("form")
    }

    initRender = (container) => {
        this.$signupForm.appendChild(this.$emailInputEmail);
        this.$signupForm.appendChild(this.$nameInputTxt);
        this.$signupForm.appendChild(this.$passInputPass);
        this.$signupForm.appendChild(this.$confirmPassInputPass);
        this.$signupForm.appendChild(this.$submitBtn);

        this.$containerDiv.appendChild(this.$titleHeader);
        this.$containerDiv.appendChild(this.$signupForm);
        this.$containerDiv.appendChild(this.$gotoSigninLink);

        container.appendChild(this.$containerDiv)
    }

    handleSubmit = (e) => {
        import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }

    gotoSignin = () => {
        const login = new Login();
        // change active section
    }

}