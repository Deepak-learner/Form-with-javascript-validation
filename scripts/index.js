function validate() {  
    var result = ""; 
	result += validateFirstName (); 
        result += validateLastName (); 	
	result += validateEmail ();
	result += validatePassword ();
	
	if (result == "") {
        alert("Form submitted successfully");
        return true;
    }
    alert("Please enter valid input in all text box.");
	return false;	
}

// function to get the value of inputs entered by user.
function valueOf(name) {
	return document.getElementsByName(name)[0].value;
}

function validateEmail() {
    var email = valueOf("email");                                 
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;    

    if (reg.test(email)) {
        document.getElementById("invalidEmail").innerHTML="";
        return "";
    }
        document.getElementById("invalidEmail").innerHTML="Error: This email is not valid.";
        return "error";
}

function validateFirstName() {
    var firstname = valueOf("fname"); 
    var reg = /^[A-Za-z]+$/;          
	if (!reg.test(firstname)) {
        document.getElementById("invalidFirstName").innerHTML="Error: The first Name should not contain any numbers.";
        return "error";
    }	
    document.getElementById("invalidFirstName").innerHTML="";
    return "";
}

function validateLastName() {
	var lastname = valueOf("lname");  
    var reg = /^[A-Za-z]+$/;          
	if (!reg.test(lastname)) {
        document.getElementById("invalidLastName").innerHTML="Error: The Last Name should not contain any numbers.";
        return "error";	
    }
    document.getElementById("invalidLastName").innerHTML="";
	return "";
}

function validatePassword() {
    var password = valueOf("password");     
    var reg = /^(?=.*?[#?!@$%^&*-]).{8,}$/; 
    if (reg.test(password)) {
        document.getElementById("invalidPassword").innerHTML="Error: Password should not contain any special charaters.\n";
        return "error";
    }
    else if (password.length <= 7) {
        document.getElementById("invalidPassword").innerHTML="Error: Password should be atleast 8 charater long.\n";
		return "error";
    }
    return "";
}
