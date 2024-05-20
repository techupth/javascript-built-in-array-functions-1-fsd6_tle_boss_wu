let words = ["hello", "world"];

function getWordLengths(words) {
  let result = []
  let wordCount;
  words.map((word) => {
    wordCount = word.length;
    result.push(wordCount)
  });
  return result
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
