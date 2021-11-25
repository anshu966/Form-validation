// Declaring constants and variables

// let userName = document.getElementById("userName");
//  let email= document.getElementById("email");
//  let passWord= document.getElementById("password");
//  let mobileNo = document.getElementById("mobileNo");

// our code is repeating the same code just to declare id and classes , here we can use functions to make this task easier and efficient.
// below are the functions for the id and classes :-
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let userName = id("userName"),
    email = id("email"),
    password = id("password"),
    mobileNo = id("mobileNo"),
    form = id("form"), // targeting the form id


    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

// Now, target the form and add the submit event listener 

form.addEventListener("submit", (e) => {  // here, e is an arguement.
    e.preventDefault();
    // window.loaction.href="next.htm?data="+data
    // window.location.href = "form-submit.html";
    // it will prevent the flickering of an errormsg below.
    // errorMsg[2].innerHTML= "Please write a correct password";

    // Now, to inject an error message, the moment user submits a blank form.
    // case-1: for username input
    // if(userName.value ===""){
    //     errorMsg[0].innerHTML="kindly enter username";
    //     failureIcon[0].style.opacity="1";
    //     successIcon[0].style.opacity="0";
    // }else{
    //     errorMsg[0].innerHTML="";
    //     failureIcon[0].style.opacity="0";
    //     successIcon[0].style.opacity="1";
    // }
    // NOw, the above conditional statements hs to be written for other ids as well.
    // and it will make our code cumbersome and lengthy , so in order to prevent it.
    // we can create a function for the above conditional statements and use them multilple times.

    let engine = (id, serial, message) => {   // id will target our id,serial=classes
        if (id.value.trim() === "") {  // here , trim function will not consider space as a text.
            errorMsg[serial].innerHTML = message;
            failureIcon[serial].style.opacity = "1";
            successIcon[serial].style.opacity = "0";
        } else {
            errorMsg[serial].innerHTML = message;
            failureIcon[serial].style.opacity = "0";
            successIcon[serial].style.opacity = "1";
        }


    }


    // above functions are called below.
    engine(userName, 0, validateUserName());
    engine(email, 1, validateEmail());
    engine(password, 2, validatePassword());
    engine(mobileNo, 3, validatePhone());
    console.log(userName.value);

    // 


})
// UserName Validation
function validateUserName() {
    var inputUser = document.getElementById("userName").value;
    var userFormat = /^[a-zA-Z0-9]+$/;
    console.log(inputUser);
    if (inputUser.match(userFormat)) {
        // inputUser = "UserName is correct";
        // inputUser.style.color = "green";
        // return match;
        // return inputUser;
        return "UserName is correct!";
    }
    else {
        return "UserName is incorrect!";
    }
}

//  Email Validation
function validateEmail() {
    var inputText = document.getElementById("email").value;
    // var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{15,20})+$/;
    var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    console.log(inputText);
    if (inputText.match(mailformat)) {
        return "valid email address!";
        // document.form1.text1.focus();
        // return true;
    }
    else {
        return "Entered an invalid email !";
    }
}

// Password Validation
function validatePassword() {
    var inputText1 = document.getElementById("password").value;
    console.log(inputText1)
    var passFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{6,8}$/;
    if (inputText1.match(passFormat)) {
        return "You have entered a valid password!"
    } else {
        return ("you have entered an invalid password")
    }
}

// Phone No.
function validatePhone() {
    var phone = document.getElementById("mobileNo").value;
    phone = phone.replace(/[^0-9]/g, '');
    console.log(phone);
    if (phone.length != 10) {
        return "not 10 digits";
    } else {
        return "yep, its 10 digits";
    }
}
