// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails
function checkUserName() {
    var username = document.getElementById('usertext').Value;
    const specialChars = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    if (username === "") {
        alert("Empty string as username");
        return false;
    }
    else {
        if (username.length >= 8 && username.length < 15) {
            if (username.includes(" ")) {
                alert("space is not allowed in username");
                return false;
            }
            else {
                if (username.match(specialChars)) {
                    alert("username contains speacial character");
                    return false;
                }
                else {
                    return true;
                }
            }
        }
        else {
            alert("username should be between 8 to 15 characters");
            return false;
        }
    }
}
// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function checkEmail() {
    var email = document.getElementById('emailtext').Value;
    var letterNumber = /^[0-9a-zA-Z]+$/;
    const specialChars = /^[!#$%^&*()+\-=\[\]{};':"\\|<>\/?]*$/;
    if (email.match(letterNumber)) {
        if (email.match(specialChars)) {
            alert("email contains unauthorized special characters");
            return false;
        }
        else {
            return true;
        }
    }
    else {
        alert("This format of email is not allowed");
        return false;
    } 
}
// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function isUpper(str) {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}
function checkPassword() {
    var password = document.getElementById('passwordtext').Value;
    var letterNumber = /^[0-9a-zA-Z]+$/;
    const specialChars = /^[!@#$%^&*()_]+$/;
    var flag = false;
    if (password.match(letterNumber)) {
        if (password.match(specialChars)) {
            for (var i=0;i<password.length;i++) {
                if (isUpper(password[i])) {
                    flag = true;
                    break;
                }
            }
            if (flag = true) {
                return true;
            }
            else {
                alert("No uppercase in password");
                return false;
            }
        }
        else {
            alert("Required special character is not present");
            return false;
        }
    }
    else {
        alert("password must countain characters and numbers");
        return false;
    }
}