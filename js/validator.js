
function check(e)                                    
{ 
    e.preventDefault();
    var name = document.forms["witamy"]["name"];         
     var surname = document.forms["witamy"]["surname"];             
    var email = document.forms["witamy"]["email"];    
    var city = document.forms["witamy"]["city"];  
    var address = document.forms["witamy"]["address"];  
    var zipcode = document.forms["witamy"]["zipcode"];  
    
    var namePattern= /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
    var surnamePattern= /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
//   (?=.*\d)          // should contain at least one digit
//   (?=.*[a-z])       // should contain at least one lower case
//   (?=.*[A-Z])       // should contain at least one upper case
//   [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters
    var emailPattern= /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!namePattern.test(name.value))                                  
    { 
        window.alert("Pole imie musi miec przynajmniej 3 znaki i nie moze zawierać znaków specialnych"); 
        name.focus(); 
        return false; 
    } 
    if (!surnamePattern.test(surname.value))                                 
    { 
        window.alert("Pole nazwisko musi miec przynajmniej 2 znaki i nie moze zawierać znaków specialnych"); 
        surname.focus(); 
        return false; 
    } 
   
    if (address.value == "")                               
    { 
        window.alert("Pole Adress nie może być puste"); 
        address.focus(); 
        return false; 
    } 
       
    if (!emailPattern.test(email.value))                                
    { 
        window.alert("Proszę wprowadzić poprawny email np. 'a@mir.pl'"); 
        email.focus(); 
        return false; 
    } 
   
    if (zipcode.value == "")                           
    { 
        window.alert("Pole Kodu Pocztowego nie może być puste"); 
        zipcode.focus(); 
        return false; 
    } 
   
    if (city.value == "")                        
    { 
        window.alert("Pole Miasto nie może być puste"); 
        city.focus(); 
        return false; 
    } 
   
   
    return true; 
};

