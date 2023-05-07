class Login {
    $containerDiv
    $titleHeader
    $signinForm
    $emailInputEmail
    $passInputPass
    $submitBtn
    $gotoSignupLink

    constructor() {
        this.$emailInputEmail = document.createElement("input"); // <input> </input>
        this.$emailInputEmail.type = "email"; // <input type="email"> </input>
        this.$emailInputEmail.placeholder = "Enter your email ..."; // <input type="email" placeholder="Enter your email ..."> </input>


    }
}
