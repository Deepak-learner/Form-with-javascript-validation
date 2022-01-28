function validate() {  
    var result = ""; // variable to store validation results. 
	result += validateFirstName (); 
    result += validateLastName (); 	
	result += validateEmail ();
	result += validatePassword ();
	
	if (result == "") {
        alert("Form submitted successfully");
        return true;
    }
	alert("Validation Result:\n\n" + result);
	return false;	
}

// function to get the value of inputs entered by user.
function valueOf(name) {
	return document.getElementsByName(name)[0].value;
}

function validateEmail() {
    var email = valueOf("email");                                 // store the email value.
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;    // regular expression to check email is valid.

    if (reg.test(email)) {
        return "";
    }
    return "You have entered an invalid email address.\n";
}

function validateFirstName() {
    var firstname = valueOf("fname"); // store the first name.
    var reg = /^[A-Za-z]+$/;          // regular expression to check first name must not contain any numbers.
	if (!reg.test(firstname)) {
		return "First Name should not contain any numbers (0-9).\n";
    }	
	return "";
}

function validateLastName() {
	var lastname = valueOf("lname");  // store the last name.
        var reg = /^[A-Za-z]+$/;          // regular expression to check last name must not contain any numbers.
	if (!reg.test(lastname)) {
		return "Last Name should not contain any numbers (0-9).\n";	
    }
	return "";
}

function validatePassword() {
    var password = valueOf("password");     // store the password.
    var reg = /^(?=.*?[#?!@$%^&*-]).{8,}$/; // regular expression to check password should not contain any special characters.
    if (reg.test(password)) {
        return "Password should not contain any special charaters.\n"
    }
    if (password.length <= 7) {
		return "Password should be at least 8 characters long.\n";
    }
    return "";
}
