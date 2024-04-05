function fizzBuzz(num: number): string {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num.toString();
  }
}

function cetakFizzBuzz(limit: number): void {
  for (let i = 1; i <= limit; i++) {
    console.log(fizzBuzz(i));
  }
}

cetakFizzBuzz(100);
