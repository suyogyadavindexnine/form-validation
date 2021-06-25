let username = document.getElementById("username");
let nameerror = document.querySelector("#nameerror");

let phone = document.getElementById("phone");
let phoneerror = document.querySelector("#phoneerror");

let emailid = document.getElementById("emailid");
let emailerror = document.querySelector("#emailerror");

let password = document.getElementById("password");
let passworderror = document.querySelector("#passworderror");

let pass = document.getElementById("pass");

let signupbtn = document.getElementById("signupbtn");
signupbtn.onclick = () => {
    if (checkName() && checkPhone() && checkEmail() && checkPassword()) {
        console.log("High Five!! Welcome To The Club");
        document.getElementById("username").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("emailid").value = "";
        document.getElementById("password").value = "";
        pass.style.visibility = "visible";
    }
}

function checkName() {
    if (username.value.length > 0) {
        username.className = "";
        nameerror.style.visibility = "hidden";
        return true;
    } else {
        username.className = "invalid";
        nameerror.style.visibility = "visible";
        return false;
    }
}

function checkPhone() {
    if (phone.value.length == 10) {
        phone.className = "";
        phoneerror.style.visibility = "hidden";
        return true;
    } else {
        phone.className = "invalid";
        phoneerror.innerText = "Please Enter Valid Phone Number";
        phoneerror.style.visibility = "visible";
        return false;
    }
}

function checkEmail() {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailid.value)) {
        emailid.className = "";
        emailerror.style.visibility = "hidden";
        return true;
    } else {
        emailid.className = "invalid";
        emailerror.innerText = "Please Enter Valid Email ID";
        emailerror.style.visibility = "visible";
        return false;
    }
}

function checkPassword() {
    let pass = password.value;
    let errors = [];
    if (pass.length < 8) {
        errors.push("Your password must be at least 8 characters.<br>");
    }
    if (pass.search(/[a-z]/i) < 0) {
        errors.push("Your password must contain at least one letter.<br>");
    }
    if (pass.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit.<br>");
    }
    if (errors.length > 0) {
        console.log(errors.join(""));
        password.className = "invalid"
        passworderror.innerHTML = errors.join("");
        passworderror.style.visibility = "visible";
        return false;
    }
    password.className = "";
    passworderror.style.visibility = "hidden";
    return true;
}