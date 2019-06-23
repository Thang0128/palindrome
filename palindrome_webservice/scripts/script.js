console.log('loading scripts...');

/*
1. get a refefence to the form element in the dom
2. add a submit listener to the form element reference
3. prevent default form submission when the form is submitted (i.e. click submit)
*/

let form = document.querySelector('#palindrome-canditate-form');

form.addEventListener('submit', (event) => {
  console.log("Submitting The Word...");
  event.preventDefault();
  let palindromeCanditateInput = document.querySelector('#palindrome-canditate-input');
  let palindromeCanditate = palindromeCanditateInput.value
  let isItPalindrome = palindrome(palindromeCanditate);
  if(isItPalindrome){
    let palindromeTextArea = document.querySelector('#palindrome-textarea');
    palindromeTextArea.value = palindromeCanditate.concat('\n', palindromeTextArea.value);
  }else{
    alert("This word is not a palindrome");
  }
});
