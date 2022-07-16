/*The FizzBuzz problem is a classic test given in coding interviews. 
The task is simple: Print integers 1 to N, but print "Fizz" if an integer is divisible by 3,
 "Buzz" if an integer is divisible by 5, and "FizzBuzz" if an integer is divisible by both 3 and 5.*/

// First Method
function fizzBuzz1(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz')
    } else if (i % 3 == 0) {
      console.log('Fizz')
    } else if (i % 5 == 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}

// Second method (concatenation)
function fizzBuzz2(n) {
  for (let i = 1; i <= n; i++) {
    let output = ''
    if (i % 3 == 0) {
      output += 'Fizz'
    }
    if (i % 5 == 0) {
      output += 'Buzz'
    }
    if (i % 7 == 0) {
      output += 'Bang'
    }
    if (i % 9 == 0) {
      output += 'Zap'
    }
    if (output.length == 0) {
      output = i
    }
    console.log(output)
  }
}

fizzBuzz2(100)
