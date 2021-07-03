const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

//Create function for check if provided is palindrome
function isPalidrome(str){
    console.log('Working');
    if (str==reverseString(str))
    return true
    else return false;
}

function reverseString(str){
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    return reverseArray.join("");
}

readline.question('Write the palindrome: ', input_check => {
  readline.close();
  console.log(isPalidrome(input_check));
});
