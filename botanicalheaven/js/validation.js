function validateEmail(event) {
    var email = event.target.value;
    var validationMessage = document.getElementById("emailAddressValidationMessage");
    
    if(email.indexOf("@") < 1 || email.lastIndexOf("@") == email.length-1) {
        validationMessage.style.display = "block";
    } else {
        validationMessage.style.display = "none";
    }
    
}