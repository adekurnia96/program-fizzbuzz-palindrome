import * as readline from "readline";

// Program Palindrome

function isPalindrome(str: string): string {
  const cleanStr = str.toLowerCase().replace(/\s/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr ? "Palindrome" : "Bukan Palindrome";
}

// Interface untuk membaca masukkan dari pengguna
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Meminta masukkan dari pengguna
rl.question("Masukkan sebuah string: ", (inputString) => {
  rl.close();

  // Memeriksa apakah string yang dimasukkan adalah palindrome atau bukan
  console.log(`String "${inputString}" adalah ${isPalindrome(inputString)}`);
});
