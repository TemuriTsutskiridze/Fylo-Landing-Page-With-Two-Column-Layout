const emailInput1 = document.getElementById("email1");
const error1 = document.getElementById("error1");
const button1 = document.getElementById("button1");

const emailInput2 = document.getElementById("email2");
const error2 = document.getElementById("error2");
const button2 = document.getElementById("button2");

const validEmail = /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

button1.addEventListener("click", () => {
    event.preventDefault();
    emailValidation(emailInput1, error1);
});

button2.addEventListener("click", () => {
    event.preventDefault();
    emailValidation(emailInput2, error2);
});

function emailValidation(emailInput, error) {
    
    if(emailInput.value.match(validEmail)) {
        emailInput.style.border = "2px solid green";
        error.style.display = "none";
        setTimeout(() => {
            emailInput.style.border = "none";
        }, 3000)
        return true;
    } else {
        emailInput.style.border = "2px solid red";
        error.style.display = "block";
        setTimeout(() => {
            emailInput.style.border = "none";
            error.style.display = "none";
        }, 3000)
        return false;
    }
}
  
  