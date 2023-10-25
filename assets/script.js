function submitForm() {
    
    var firstName = document.getElementById("validationDefault01").value;
    var phone = document.getElementById("validationDefault02").value;
    var address = document.getElementById("validationDefault01").value; 
    var email = document.getElementById("validationDefault02").value; 
    var description = document.getElementById("exampleFormControlTextarea1").value;

    
    console.log("First Name: " + firstName);
    console.log("Phone: " + phone);
    console.log("Address: " + address);
    console.log("Email: " + email);
    console.log("Description: " + description);
}