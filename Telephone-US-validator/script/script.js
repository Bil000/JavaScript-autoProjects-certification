const telInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");
const form = document.querySelector("form");

const telValidator = num => {
  const numberRegex = /^(1|\s)?(^|\s)?([(][0-9]{3}[)]|[0-9]{3})(\s|\-)?[0-9]{3}(\s|\-)?[0-9]{4}$/;
   return numberRegex.test(num);
} ;
const isValidNumber = () => {
   const phone = telInput.value;
   if (phone === "") {
      alert("Please provide a phone number");
      return;
   }
   switch (telValidator(phone)) {
      case false : 
         results.textContent = `Invalid US number: ${phone}`
         break;  
      default : 
         results.textContent = `Valid US number: ${phone}`;
         break;
   } 
      telInput.value = "";
      return;
   }

checkButton.addEventListener("click", isValidNumber);
clearButton.addEventListener("click", () => results.textContent = "");
form.addEventListener("submit", e => e.preventDefault());