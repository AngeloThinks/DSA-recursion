// 5. String Splitter
// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

// Input: 02/20/2020
// Output: ["02", "20", "2020"]

function stringSplit(str, split){
    const i = str.indexOf(split) === -1 ? str.length : str.indexOf(split);
    //base case
    if(str.length < 1){
        return "";
    }
    //general case
    else{
        return [
            str.slice(0,i),
            ...stringSplit(str.slice(i+1, str.length), split),
        ];
    }
};
console.log(stringSplit("02/20/2020", "/"))