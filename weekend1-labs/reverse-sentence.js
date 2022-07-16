// function reverseSentence(sentence) {
//   const sentenceArray = sentence.split('')
//   const reversedArray = []
//   for (let i = sentenceArray.length - 1; i > -1; i--) {
//     reversedArray.push(sentenceArray.pop())
//   }
//   return reversedArray.join('')
// }

// console.log(reverseSentence('hello'))

function reverseSentence2(sentence) {
  let reversed = ''
  for (let i = sentence.length; i > -1; i--) {
    reversed += sentence.slice(i, i + 1)
  }
  return reversed
}

console.log(reverseSentence2('cockmister'))
