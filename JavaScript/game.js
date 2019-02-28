
//  GLOBAL VARIABLES
  var wordList = ["obeisant", "drown", "raspy", "wanting", "scary", "space", "third", "sugar", "point", "sedate", "curtain", "effect", "action", "volatile", "pickle", "peep", "fertile", "house", "toes", "play", "women", "compete", "baby", "helpless", "bored", "harm", "self", "frame", "hot", "push", "envious", "stranger", "parcel", "respect", "hideous", "expand", "jazzy", "frequent", "place", "squeeze", "whip", "zebra", "war", "grateful", "gate", "caring", "regret", "sponge", "weak", "crawl", "tense", "coal", "cagey", "appear", "explode", "anger", "uncle", "joke", "note", "hunt", "discreet", "snail", "careless", "screw", "clean", "real", "nerve", "free", "flood", "moon", "thirsty", "friendly", "touch", "oafish", "frail", "untidy", "payment", "drag", "trousers", "tramp", "rightful", "nest", "great", "tray", "noise", "public", "warn", "uppity", "educate", "prick", "knee", "brief", "quilt", "serve", "mill", "grain", "aloof", "greedy", "run", "suggest", "color", "stamp", "mailbox", "bump", "grade", "ask", "frantic", "memory", "crib", "sticky", "language", "peel", "actor", "standing", "charming", "magenta", "snails", "penitent", "clap", "guide", "exciting", "close", "cars", "cattle", "slip", "board", "earthy", "mess up", "book", "fire", "fireman", "birth", "acoustic", "quill", "sand", "sigh", "ignorant", "lewd", "chase", "river", "swift", "feigned", "unit", "puzzled", "verse", "aberrant", "sore", "dust", "special", "hateful", "prevent", "argument", "open", "ghost", "improve", "mere", "label", "mixed", "ready"];
  var playBtn = document.getElementById("play-btn");

  //  randomly selects a word from the wordList array
  var rdmWord = wordList[Math.floor(Math.random() * wordList.length)];
  var remainingLetters = rdmWord.length;

  //  creates array of blanks based on length of rndWord, which we can replace with a function
  var wordBlanks = []
    for (var i = 0; i < rdmWord.length; i++) {
      wordBlanks[i] = "_";
    };

//  FUNCTIONS
  //  this loop runs while the answer has not been successfully guess, and begins with the user clicking "Play" btn
  playBtn.onclick = function(){
    while (remainingLetters > 0) {
      
      // function for checking userGuess
      document.addEventListener('keydown',checkGuess);
      function checkGuess (ltr) {
        for (var i = 0; i < rdmWord.length; i++) {
          if (word[i] === userGuess) {
            answer[i] = userGuess;
            remainingLetters--;
          }
        }
      }
    }
  };

//  FUNCTION CALLS