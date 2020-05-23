
function check()                                    
{ 
    var name = document.forms["witamy"]["name"];               
    var email = document.forms["witamy"]["email"];    
    var phone = document.forms["witamy"]["Telephone"];  
    var what =  document.forms["witamy"]["Subject"];  
    var password = document.forms["witamy"]["Password"];  
    var address = document.forms["witamy"]["Address"];  
   
    var namePattern= "/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/"
    var surnamePattern= "/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/"
    var passwordPattern= "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/"
//   (?=.*\d)          // should contain at least one digit
//   (?=.*[a-z])       // should contain at least one lower case
//   (?=.*[A-Z])       // should contain at least one upper case
//   [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters
    var emailPattern= "/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;"
    var namePattern= "/([A-Z][a-z])\w+"
    var namePattern= "/([A-Z][a-z])\w+"
    if (name.value == "")                                  
    { 
        window.alert("Pole imie musi miec przynajmniej 3 znaki i nie moze zawierać znaków specialnych"); 
        name.focus(); 
        return false; 
    } 
   
    if (address.value == "")                               
    { 
        window.alert("Please enter your address."); 
        address.focus(); 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (phone.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 
   
    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 
   
    if (what.selectedIndex < 1)                  
    { 
        alert("Please enter your course."); 
        what.focus(); 
        return false; 
    } 
   
    return true; 
};

const email = document.getElementById("email");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
  } else {
    email.setCustomValidity("");
  }
});