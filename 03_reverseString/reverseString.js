const reverseString = function(str) {
let newString = "";
for (var i = str.length - 1; i >= 0; i--) {
  newString += str[i];
}
return newString;
};

// Do not edit below this line
module.exports = reverseString;
