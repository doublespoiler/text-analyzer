Describe: wordCounter()

  Test: "It should return 1 if a passage has just one word."
  Code:
  const text = "hello";
  wordCounter(text);
  Expected Output: 1

  Test: "It should return 2 if a passage has two words."
  Code:
  const text = "hello there";
  wordCounter(text);
  Expected Output: 2

  Test: "It should return 0 for an empty string."
  Code: 
  wordCounter("");
  Expected Output: 0

  Test: "It should return 0 for a string that is only spaces."
  Code:
  wordCounter("          ");
  Expected output: 0

  Test: "It should not count numerals as words"
  Code:
  wordCounter("hi there 77 1 9");
  Expected output: 2;

Describe: numberOfOccurrencesInText();

  Test: "It should return 0 occurrences of a word for an empty string."
  Code:
  const text  = "";
  const word = "red";
  numberOfOcurrencesInText(word, text);
  Epected output: 0

  Test: "It should return 1 occurrence of a word when the word and the text are the same."
  Code:
  const text = "red";
  const word = "red";
  numberOfOccurrencesInText(word, text);
  Expected Output: 1

  Test: "It should return 0 occurrences of a word when the word and the text are different."
  Code:
  const text = "red";
  const word = "blue";
  numberOfOccurrencesInText(word, text);
  Expected Output: 0

  Test: "It should return the number of occurrences of a word."
  Code:
  const text = "red blue red red red green";
  const word = "red";
  numberOfOccurrencesInText(word, text);
  Expected Output: 4

  Test: "It should return a word match regardless of case."
  Code:
  const text = "red RED Red green Green GREEN";
  const word = "Red";
  numberOfOccurrencesInText(word, text);
  Expected Output: 3

  Test: "It should return a word match regardless of punctuation."
  Code:
  const text = "Red! Red. I like red, green, and yellow.";
  const word = "Red";
  numberOfOccurrencesInText(word, text);
  Expected Output: 3

Describe omitOffensiveWords();

  Test: "It should return 1 if the text is zoinks, 0 if it's not zoinks"
  Code:
    const words = "zoinks"
    const text = "zoinks";
    omitOffensiveWords(words, text);
  Expected Output: " ";

    Test: "it should print the number of bad words"
  Code: 
    const words = ["zoinks", "biffaroni", "muppeteer", "loopdaloop"]
    const text = "zoinks zoinks biffaroni muppeteer loser fuck";
    omitOffensiveWords(words, text);
  Expected Result: "4"

  Test: "remove the bad word from the input if it exists"
  Code:
    const badArray = ["zoinks", "biffaroni", "muppeteer", "loopdaloop"];
    const text = "the quick brown zoinks muppeteers loser loopdaloop fuck."
    omitOffensiveWords(badArray, text);
  Expected Result: "the quick brown loser fuck."