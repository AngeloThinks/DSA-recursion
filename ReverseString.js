// 3. Reverse String
// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

function reverseString(string){
    //base case
    if(string === ""){
        return "";
    }
    //general case
    else {
        return reverseString(string.substr(1)) + string.charAt(0);
    }
};

console.log(reverseString("Does it work?"))