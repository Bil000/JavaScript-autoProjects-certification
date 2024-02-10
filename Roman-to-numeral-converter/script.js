const numberInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const result = document.getElementById("output");
const form = document.querySelector("form");

const isValidValue = () => {
   const number = parseInt(numberInput.value);
    if(number === '' || isNaN(number)) {
       result.style.display="block";
       result.querySelector("p").textContent = "Please enter a valid number";
       return;
       }  
    else if(Number(number) < 1) {
       result.style.display="block";
       result.querySelector("p").textContent = "Please enter a number greater than or equal to 1";
       return;
      }     
    else if(Number(number) > 3999){
       result.style.display="block";
       result.querySelector("p").textContent = "Please enter a number less than or equal to 3999";}
    else {
       result.style.display="block";
       result.querySelector("p").textContent = convertToRoman(number);
    }};
const convertToRoman = (number) => {
  const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const numeralRoman = [];

  ref.forEach(function (arr) {
    while (number >= arr[1]) {
      numeralRoman.push(arr[0]);
      number -= arr[1];
    }
  });
  return numeralRoman.join('');
};

convertButton.addEventListener("click", isValidValue);
form.addEventListener('submit', function(event) {
  event.preventDefault();});