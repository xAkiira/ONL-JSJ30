import Login from "./login";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

class Register {
    $containerDiv
    $titleH2
    $signupForm
    $emailInputEmail
    $nameInputTxt
    $passInputPass
    $confirmPassInputPass
    $submitBtn
    $gotoSigninLink

    constructor () {
        this.$emailInputEmail = document.createElement("input"); // <input> </input>
        this.$emailInputEmail.type = "email"; 
        this.$emailInputEmail.placeholder = "Enter your email..."

        this.$nameInputTxt = document.createElement("input")
        this.$nameInputTxt.type = "text";
        this.$nameInputTxt.placeholder = "Enter your name... "

        this.$passInputPass = document.createElement("input")
        this.$passInputPass.type = "password";
        this.$passInputPass.placeholder = "Enter your password ..."

        this.$confirmPassInputPass = document.createElement("input")
        this.$confirmPassInputPass.type = "password";
        this.$confirmPassInputPass.placeholder = "Confirm your password... "


        this.$submitBtn = document.createElement("button")
        this.$submitBtn.type = "submit";
        this.$submitBtn.innerHTML = "Register"
        this.$submitBtn.addEventListener("click", this.handleSubmit);

        this.$gotoSigninLink = document.createElement("a")
        this.$gotoSigninLink.innerHTML  = "You already have account? Signin now";
        this.$gotoSigninLink.addEventListener("click", this.gotoSignin)


        this.$containerDiv = document.createElement("div")
        this.$containerDiv.classList.add("center","app")

        this.$titleH2 = document.createElement("h2")
        this.$titleH2.innerHTML = "Create your account"

        this.$signupForm = document.createElement("form")


    }

    initRender = (container) => {
        this.$signupForm.appendChild(this.$emailInputEmail);
        this.$signupForm.appendChild(this.$nameInputTxt);
        this.$signupForm.appendChild(this.$passInputPass);
        this.$signupForm.appendChild(this.$confirmPassInputPass);
        this.$signupForm.appendChild(this.$submitBtn);

        this.$containerDiv.appendChild(this.$titleH2); 
        this.$containerDiv.appendChild(this.$signupForm); 
        this.$containerDiv.appendChild(this.$gotoSigninLink)


        container.appendChild(this.$containerDiv)


    }

    handleSubmit = (e) => {
      //validation
      e.preventDefault(); // cản lại các sự mặc định để check xem có đúng yêu cầu nhập dữ liệu chx 
      const email = this.$emailInputEmail.value;
      const pass = this.$passInputPass.value;
      const confirmPassInputPass = this.$confirmPassInputPass.value;
      const userName = this.$nameInputTxt.value;
      
      if(email == "") {
        prompt("Email cannot be empty!")
        return
      }

      if(pass.length < 6) {
        prompt("Pass must be least 6 letters!")
        return
      }

      if(confirmPassInputPass == "") {
        prompt("confirmPassInputPass cannot be empty!")
        return
      }

      if(userName == "") {
        prompt("userName cannot be empty!")
        return
      }

      if(pas !=  "") {
        prompt("confirmPassInputPass cannot be empty!")
        return
      }

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
    const alert = prompt(errorMessage);
    // ..
  });
    }





    gotoSignin = () => {
        const login = new Login();


    }
}

export default Register;