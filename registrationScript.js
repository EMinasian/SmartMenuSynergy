const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

let index = localStorage.length;


function hash(value) {
    let hashed = 0;
    if (value.length === 0)
        return hashed;
    for (let i = 0; i < value.length; i++) {
        hashed += value.charCodeAt(i);
    }
    return ((hashed & hashed)<<3)||hashed;
}

function User(username, email, password) {
    this.username = hash(username);
    this.email = hash(email);
    this.password = hash(password);
}


let signUp = document.getElementById("signUpButton");


//Adding new user to local storage
signUp.addEventListener('click', function setToStorage(event) {
    let username = document.getElementById("signUpusername");
    let email = document.getElementById("signUpemail");
    let password = document.getElementById("signUppassword");
    let user = new User(username.value, email.value, password.value);
    localStorage.setItem(`${index}`, JSON.stringify(user));
    document.getElementById("signUpForm").action = "https://www.google.com/";
});

let signIn = document.getElementById("signInButton");
let signInusername = document.getElementById("signInusername");
let sigInpassword = document.getElementById("signInpassword");

//Check if the user has signed up
let hasSignedUp;

signIn.addEventListener('click', function checkInStorage(event) {
    hasSignedUp = false;
    for (let i = 0; i < localStorage.length; i++) {
        let userInStorage = JSON.parse(localStorage.getItem(`${i}`));
        if ((hash(signInusername.value) === userInStorage.username) && (hash(sigInpassword.value) === userInStorage.password)) {
            hasSignedUp = true;
            break;
        }
    }
    if (hasSignedUp === false) {
        document.getElementById("signInButton").type='button';
        document.getElementById("errorID").style.display='block';
    } else {
        document.getElementById("signInButton").type='submit';
        document.getElementById("signInForm").action = "https://www.google.com/";
    }
})
