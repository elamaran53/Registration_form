
function validate() {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var address = document.getElementById("address").value
    var agree = document.getElementById("agree").checked
    var nameerror = document.getElementById("name-error")
    var emailerror = document.getElementById("email-error")
    var passworderror = document.getElementById("password-error")
    var addresserror = document.getElementById("address-error")
    var agreeerror = document.getElementById("agree-error")
   
    nameerror.textContent = "";
    addresserror.textContent = "";
    emailerror.textContent = "";
    passworderror.textContent = "";
    agreeerror.textContent = "";
    var valid = true
    
    if (name === "" || /\d/.test(name)) {
        nameerror.textContent = "Please enter your name"
        valid = false
        
        
    }
   
    if (address === "") {
        addresserror.textContent = " Please enter your address"
        valid = false
        
        
    }
    
    if (email === "" || !email.includes("@")) {
        emailerror.textContent =
            "Please enter a valid email address";
        valid = false;
        
       
    }
    
    if (password === "" || password.length < 6) {
        passworderror.textContent =
            "Please enter a password with at least 6 characters.";
        valid = false;
        
        

    }
    
    if (!agree) {
        agreeerror.textContent =
            "Please agree to the above information.";
        valid = false;
        
       
    }
    
    return valid
     
    
}