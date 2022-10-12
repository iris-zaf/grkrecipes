window.addEventListener("load", function () {
  setTimeout(function open() {
    document.querySelector(".popup").style.display = "block";
  }, 1000);
});
document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});

// start typing effect
// get the element
const text = document.querySelector(".search-engine");

// make a words array
const words = [
  "Find unique recipes",
  "Share your ideas",
  "Surprise your friends",
  "Tag us in your stories",
];
// start typing effect
setTyper(text, words);

function setTyper(element, words) {
  const LETTER_TYPE_DELAY = 75;
  const WORD_STAY_DELAY = 2000;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;

  var wordTypeInterval;

  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    const word = words[wordIndex];

    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex == word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }
    } else if (direction == DIRECTION_BACKWARDS) {
      letterIndex--;

      if (letterIndex == 0) {
        nextWord();
      }
    }

    const textToType = word.substring(0, letterIndex);

    element.textContent = textToType;
  }

  function nextWord() {
    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex == words.length) {
      wordIndex = 0;
    }
  }
}
//end of typing effect
