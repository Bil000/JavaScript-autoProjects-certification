const textInput = document.getElementById("text-input");
const buttonElement = document.getElementById("check-btn");
const palindromeResult = document.getElementById("result");
const form = document.querySelector('form');

const isPalindrome = () => {
  const palindrome = textInput.value;
  const rg = /[^a-z0-9]/gi;
  if (palindrome === '') {
    alert('Please input a value');
    return undefined;
};
  let lowercasePalindrome = palindrome.replace(rg, '').toLowerCase();
  let backwardsPalindrome = lowercasePalindrome.split('').reverse().join('');
  return palindromeResult.innerText = lowercasePalindrome === backwardsPalindrome ? `${palindrome} is a palindrome` : `${palindrome} is not a palindrome` ;
};

buttonElement.addEventListener('click', isPalindrome);
form.addEventListener('submit', (event) => event.preventDefault())