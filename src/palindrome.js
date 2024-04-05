"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Program Palindrome
function isPalindrome(str) {
    var cleanStr = str.toLowerCase().replace(/\s/g, "");
    var reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr ? "Palindrome" : "Bukan Palindrome";
}
// Interface untuk membaca masukkan dari pengguna
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Meminta masukkan dari pengguna
rl.question("Masukkan sebuah string: ", function (inputString) {
    rl.close();
    // Memeriksa apakah string yang dimasukkan adalah palindrome atau bukan
    console.log("String \"".concat(inputString, "\" adalah ").concat(isPalindrome(inputString)));
});
