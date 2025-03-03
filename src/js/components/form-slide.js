const SignUpButton = document.getElementById("SignUp")
const SignInButton = document.getElementById("SignIn")
const formOuterContainer = document.getElementById("form-outer-container")

SignUpButton.addEventListener('click', () => {
    formOuterContainer.classList.add("right-panel-active")
})

SignInButton.addEventListener('click', () => {
    formOuterContainer.classList.remove("right-panel-active")
})
