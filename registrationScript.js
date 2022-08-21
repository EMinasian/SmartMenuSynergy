const signInbtn = document.querySelector("#sign-in-btn");
const signUpbtn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

signUpbtn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

signInbtn.addEventListener("click", () => {
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
    return ((hashed & hashed) << 3) || hashed;
}

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = hash(password);
}


let signUp = document.getElementById("signUpButton");


//Adding new user to local storage
signUp.addEventListener('click', function setToStorage(event) {
    let username = document.getElementById("signUpusername");
    let email = document.getElementById("signUpemail");
    let password = document.getElementById("signUppassword");
    let alreadySignedUp = false;
    for (let i = 0; i < localStorage.length; i++) {
        let userInStorage = JSON.parse(localStorage.getItem(`${i}`));
        if ( email.value === userInStorage.email ) {
            alreadySignedUp = true;
            break;
        }
    }
    if (alreadySignedUp === true) {
        signUp.setAttribute("type", "button");
        document.getElementById("error1ID").style.display = 'block';
    } else {
        document.getElementById("signUpButton").setAttribute("type", "submit");
        let user = new User(username.value, email.value, password.value);
        localStorage.setItem(`${index}`, JSON.stringify(user));
        document.getElementById("signUpForm").action = "./restaurants.html";
    }

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
        if ((signInusername.value === userInStorage.username) && (hash(sigInpassword.value) === userInStorage.password)) {
            hasSignedUp = true;
            break;
        }
    }
    if (hasSignedUp === false) {
        document.getElementById("signInButton").setAttribute("type", "button");
        document.getElementById("errorID").style.display = 'block';
    } else {
        document.getElementById("signInButton").setAttribute("type", "submit");
        document.getElementById("signInForm").action = "./restaurants.html";
    }
})


//forgot password

document.getElementById("forgotPassword").addEventListener("click", () => {
    document.getElementById("forgotPasswordContainer").style.display = "flex";
    document.getElementById("container").style.filter = "blur(4px)";
})

document.getElementById("closeForgotPasswordContainer").addEventListener("click", () => {
    document.getElementById("forgotPasswordContainer").style.display = "none";
    document.getElementById("container").style.filter = "blur(0px)";
})

//confirming new password

let next = document.getElementById("next");
next.addEventListener("click", () => {
    let email = document.getElementById("FPemail");
    let newPassword=document.getElementById("FPnewPassword");
    let confirmedPassword=document.getElementById("FPconfirmPassword");

    if(newPassword.value!==confirmedPassword.value){
        document.getElementById("FPerror").style.display="block";

    }
    else {
        let isUser = false;
        let username;
        let id;
        for (let i = 0; i < localStorage.length; i++) {
            let userInStorage = JSON.parse(localStorage.getItem(`${i}`));
            if (email.value === userInStorage.email) {
                isUser = true;
                username=userInStorage.username;
                id = i;
                break;
            }
        }

        if (isUser === true) {
            localStorage.removeItem(`${id}`);
            localStorage.setItem(`${id}`, `${JSON.stringify(new User(username, email.value, newPassword.value))}`);
            document.getElementById("forgotPasswordContainer").style.display = "none";
            document.getElementById("container").style.filter = "blur(0px)";
        }
        else {
            document.getElementById("FPerror").style.display="block";
        }
    }
})