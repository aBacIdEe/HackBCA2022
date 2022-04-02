document.addEventListener("DOMContentLoaded", function () {
    createSquares();
    var VALID = generateValid();
    var word = generateWord();
    var letterCount = {
        "a": 0, "b": 0, "c": 0, "d": 0, "e": 0, "f": 0, "g": 0, "h": 0, "i": 0, "j": 0, "k": 0, "l": 0, "m": 0, "n": 0, "o": 0, "p": 0, "q": 0, "r": 0, "s": 0, "t": 0, "u": 0, "v": 0, "w": 0, "x": 0, "y": 0, "z": 0
    };
    for (var i = 0; i < word.length; i++) {
        letterCount[word.charAt(i)]++;
    }
    var guess = '';
    var count = 1;
    var emptySquareCount = 1;
    function loadFile(path) {
        var result;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", path, false);
        xmlhttp.send();
        //if (xmlhttp.status==200)
        result = xmlhttp.responseText;
        return result;
    }
    function getSquareColor(letter, index) {
        // IF GREEN, then deduct and turn green
        if (letter === word.charAt(index)) {
            letterCount[letter] -= 1;
            return "rgb(60, 150, 60)";
        }
        else if (word.indexOf(letter) >= 0 && letterCount[letter] > 0) { // IF YELLOW, AND STILL HAS THIS LETTER
            letterCount[letter] -= 1;
            return "rgb(150, 150, 60)";
        }
        return "rgb(100, 100, 100)"; // THEN RETURN GRAY
    }
    function generateValid() {
        var temp = loadFile('words_alpha.txt');
        temp = temp.split(/\r?\n/);
        var result = [];
        for (var i = 0; i < temp.length; i++) {
            if (temp[i].length === 5)
                result.push(temp[i]);
        }
        return result;
    }
    function generateWord() {
        var result = loadFile('WORDS.txt');
        result = result.split(/\r?\n/);
        var randomIndex = Math.floor(Math.random() * result.length);
        return result[randomIndex];
    }
    function createSquares() {
        var board = document.getElementById("squares");
        for (var i = 1; i <= 30; i++) {
            var square = document.createElement("div");
            square.classList.add("square");
            square.setAttribute("id", String(i));
            board.appendChild(square);
        }
    }
    function updateAddSquares(letter) {
        if (guess.length < 5) {
            var emptySquare = document.getElementById(String(emptySquareCount));
            emptySquare.textContent = letter;
            guess += letter;
            emptySquareCount++;
        }
    }
    function updateDelSquares() {
        // console.log("del")
        if (guess && emptySquareCount > 0) {
            var latestSquare = document.getElementById(String(emptySquareCount - 1));
            latestSquare.textContent = "";
            guess = guess.substring(0, guess.length - 1);
            emptySquareCount--;
        }
    }
    function enterWord() {
        if (guess.length === 5) {
            if (!(VALID.indexOf(guess) >= 0)) {
                alert("Bad word");
                return;
            }
            for (var i = 5 * count - 4; i <= 5 * count; i++) {
                var element = document.getElementById(String(i));
                var tileColor = getSquareColor(guess.charAt((i - 1) % 5), (i - 1) % 5);
                element.style.backgroundColor = tileColor;
            }
            if (guess === word) {
                alert("YES");
            }
            if (guess != word && count == 6) {
                alert("You're bad, the word is " + word);
            }
            guess = '';
            count++;
            letterCount = {
                "a": 0, "b": 0, "c": 0, "d": 0, "e": 0, "f": 0, "g": 0, "h": 0, "i": 0, "j": 0, "k": 0, "l": 0, "m": 0, "n": 0, "o": 0, "p": 0, "q": 0, "r": 0, "s": 0, "t": 0, "u": 0, "v": 0, "w": 0, "x": 0, "y": 0, "z": 0
            };
            for (var i = 0; i < word.length; i++) {
                letterCount[word.charAt(i)]++;
            }
        }
    }
    document.addEventListener("keydown", function (event) {
        // console.log(event.key)
        if (event.repeat)
            return;
        if (event.key === 'Backspace') {
            updateDelSquares();
            return;
        }
        if (event.key === 'Enter') {
            enterWord();
            return;
        }
        var letter;
        switch (event.key) {
            case 'a':
            case 'A':
                letter = 'a';
                break;
            case 'b':
            case 'A':
                letter = 'b';
                break;
            case 'c':
            case 'A':
                letter = 'c';
                break;
            case 'd':
            case 'A':
                letter = 'd';
                break;
            case 'e':
            case 'A':
                letter = 'e';
                break;
            case 'f':
            case 'A':
                letter = 'f';
                break;
            case 'g':
            case 'A':
                letter = 'g';
                break;
            case 'h':
            case 'A':
                letter = 'h';
                break;
            case 'i':
            case 'A':
                letter = 'i';
                break;
            case 'j':
            case 'A':
                letter = 'j';
                break;
            case 'k':
            case 'A':
                letter = 'k';
                break;
            case 'l':
            case 'A':
                letter = 'l';
                break;
            case 'm':
            case 'A':
                letter = 'm';
                break;
            case 'n':
            case 'A':
                letter = 'n';
                break;
            case 'o':
            case 'A':
                letter = 'o';
                break;
            case 'p':
            case 'A':
                letter = 'p';
                break;
            case 'q':
            case 'A':
                letter = 'q';
                break;
            case 'r':
            case 'A':
                letter = 'r';
                break;
            case 's':
            case 'A':
                letter = 's';
                break;
            case 't':
            case 'A':
                letter = 't';
                break;
            case 'u':
            case 'A':
                letter = 'u';
                break;
            case 'v':
            case 'A':
                letter = 'v';
                break;
            case 'w':
            case 'A':
                letter = 'w';
                break;
            case 'x':
            case 'A':
                letter = 'x';
                break;
            case 'y':
            case 'A':
                letter = 'y';
                break;
            case 'z':
            case 'A':
                letter = 'z';
                break;
            default: return;
        }
        updateAddSquares(letter);
    });
});
