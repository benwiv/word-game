
//  GLOBAL VARIABLES
  var wordList = ["obeisant", "drown", "raspy", "wanting", "scary", "space", "third", "sugar", "point", "sedate", "curtain", "effect", "action", "volatile", "pickle", "peep", "fertile", "house", "toes", "play", "women", "compete", "baby", "helpless", "bored", "harm", "self", "frame", "hot", "push", "envious", "stranger", "parcel", "respect", "hideous", "expand", "jazzy", "frequent", "place", "squeeze", "whip", "zebra", "war", "grateful", "gate", "caring", "regret", "sponge", "weak", "crawl", "tense", "coal", "cagey", "appear", "explode", "anger", "uncle", "joke", "note", "hunt", "discreet", "snail", "careless", "screw", "clean", "real", "nerve", "free", "flood", "moon", "thirsty", "friendly", "touch", "oafish", "frail", "untidy", "payment", "drag", "trousers", "tramp", "rightful", "nest", "great", "tray", "noise", "public", "warn", "uppity", "educate", "prick", "knee", "brief", "quilt", "serve", "mill", "grain", "aloof", "greedy", "run", "suggest", "color", "stamp", "mailbox", "bump", "grade", "ask", "frantic", "memory", "crib", "sticky", "language", "peel", "actor", "standing", "charming", "magenta", "snails", "penitent", "clap", "guide", "exciting", "close", "cars", "cattle", "slip", "board", "earthy", "mess up", "book", "fire", "fireman", "birth", "acoustic", "quill", "sand", "sigh", "ignorant", "lewd", "chase", "river", "swift", "feigned", "unit", "puzzled", "verse", "aberrant", "sore", "dust", "special", "hateful", "prevent", "argument", "open", "ghost", "improve", "mere", "label", "mixed", "ready"];
  var playBtn = document.getElementById("play-btn");
  var playGame = document.getElementById('')

  //  randomly selects a word from the wordList array
  var rdmWord = wordList[Math.floor(Math.random() * wordList.length)];
  var remainingLetters = rdmWord.length;

  //  creates array of blanks based on length of rndWord, which we can replace with a function
  var wordAnswer = []
    for (var i = 0; i < rdmWord.length; i++) {
      wordAnswer[i] = "_";
    };

//  FUNCTIONS
  //  this loop runs while the answer has not been successfully guess
  //  * begins with the user clicking "Play" btn
  //  * replaces blanks with correctly guessed letters
  //  * includes a timer
  
  // playBtn.onclick = function(){
  function playGame() {
    while (remainingLetters > 0) {
      //event listener detects keystrokes and checks against remaining letters in the answer
      document.addEventListener('keydown',checkGuess);
      
      //bomb timer function (simple)
      var min = 2;
      var sec = 00;

      setInterval(function() {
        document.getElementById("timer").innerHTML = min + " : " + sec;
        sec--;
        if (min>=0 && sec>=0){
          if (sec == 00) {
            min--;
            sec = 59;
          }
        }
        else {
          explodeLose();
        }
      }, 1000);
    }
  };
  
  // function for checking userGuess
  checkGuess = function(ltr) {
    for (var i = 0; i < rdmWord.length; i++) {
      if (rdmWord[i] === ltr) {
        wordAnswer[i] = ltr;
        remainingLetters--;
      }
      else {
      }
    }
  }





