// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0 ) {
    return 0;
  }

  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().include(word.toLowerCase())) {
      wordCount++
    }
  });
  return wordCount;
}

function omitOffensiveWords(badWords, text){
  badWords.forEach(function(element){
    if(element === text){
      console.log("We found a bad word");
    } else {
    console.log("we didn't find a bad word");
    }
  });
  console.log("finished");
};