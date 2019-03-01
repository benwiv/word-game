
//  GLOBAL VARIABLES
  var wordList = ["obeisant", "drown", "raspy", "wanting", "scary", "space", "third", "sugar", "point", "sedate", "curtain", "effect", "action", "volatile", "pickle", "peep", "fertile", "house", "toes", "play", "women", "compete", "baby", "helpless", "bored", "harm", "self", "frame", "hot", "push", "envious", "stranger", "parcel", "respect", "hideous", "expand", "jazzy", "frequent", "place", "squeeze", "whip", "zebra", "war", "grateful", "gate", "caring", "regret", "sponge", "weak", "crawl", "tense", "coal", "cagey", "appear", "explode", "anger", "uncle", "joke", "note", "hunt", "discreet", "snail", "careless", "screw", "clean", "real", "nerve", "free", "flood", "moon", "thirsty", "friendly", "touch", "oafish", "frail", "untidy", "payment", "drag", "trousers", "tramp", "rightful", "nest", "great", "tray", "noise", "public", "warn", "uppity", "educate", "prick", "knee", "brief", "quilt", "serve", "mill", "grain", "aloof", "greedy", "run", "suggest", "color", "stamp", "mailbox", "bump", "grade", "ask", "frantic", "memory", "crib", "sticky", "language", "peel", "actor", "standing", "charming", "magenta", "snails", "penitent", "clap", "guide", "exciting", "close", "cars", "cattle", "slip", "board", "earthy", "mess up", "book", "fire", "fireman", "birth", "acoustic", "quill", "sand", "sigh", "ignorant", "lewd", "chase", "river", "swift", "feigned", "unit", "puzzled", "verse", "aberrant", "sore", "dust", "special", "hateful", "prevent", "argument", "open", "ghost", "improve", "mere", "label", "mixed", "ready"];
  
  //  HTML targets
  var playBtn = document.getElementById("play-btn");
  var greenLight = document.getElementById('green-light');
  var redLight = document.getElementById('red-light');

//  FUNCTIONS
  //  this loop runs while the answer has not been successfully guess
  //  * begins with the user clicking "Play" btn
  //  * replaces blanks with correctly guessed letters
  //  * includes a timer
  
  playBtn.addEventListener('click', function playGame() {
    //  timer variables
    var min = 2;
    var sec = 00;

    //  randomly selects a word from the wordList array
    var rdmWord = wordList[Math.floor(Math.random() * wordList.length)];
    var remainingLetters = rdmWord.length;
    var wordAnswer = [];
    
    //  creates array of blanks based on length of rndWord, which we can replace with a function
    for (var i = 0; i < rdmWord.length; i++) {
      wordAnswer[i] = "_";
    };

    //bomb timer function (simple)
    setInterval(function() {
      document.getElementById("timer").innerHTML = min + " : " + sec;
      sec--;
      if (sec==0) {
        min--;
        sec = 59;
      }
    }, 1000);

    if ((remainingLetters > 0) && !(min===0 && sec ===0)) {
      //event listener detects keystrokes and checks against remaining letters in the answer
      document.addEventListener('keydown',checkGuess);
    }
    else {
      explodeLose();
    }
  });
  
  // function for checking userGuess
  function checkGuess(ltr) {
    var wrngCount = 0;

    for (var i = 0; i < rdmWord.length; i++) {
      if (rdmWord[i] === ltr) {
        wordAnswer[i] = ltr;
        remainingLetters--;
        turnGreen();
      }
      else {
        wrngCount++;
        if (wrngCount === rdmWord.length){
          turnRed();
        }
      }
    }
  };

  //green and red light functions for positive or negative entries
  function turnGreen() {

  };
  
  function turnRed() {

  };

  //  Loser/explode animation function
  function explodeLose(){

  };

  var




