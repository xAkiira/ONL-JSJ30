import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";


class Login {
    $containerDiv
    $titleH2
    $signinForm
    $emailInputEmail
    $passInputPass
    $submitBtn

    constructor() {
        this.$emailInputEmail = document.createElement("input"); // <input> </input>
        this.$emailInputEmail.type = "email"; 
        this.$emailInputEmail.placeholder = "Enter your email..."






    }

    handleSubmit = (e) => {
        if(email == "") {
            prompt("Email cannot be empty!")
            return
          }
    
          if(pass.length < 6) {
            prompt("Pass must be least 6 letters!")
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
    // ..
  });
    }





    gotoSignin = () => {
        const login = new Login();


    }


}


export default Login;
