function fibonacci(n) {
    if (n == 0) {
        return 0
    }
    else if (n == 1) {
        return 1
    }
    else {
        return fibonacci(n-1) + fibonacci(n-2)
    }
}


function palindromo(word) {
    let wordNormal = word;
    let wordReverse = "";

    const len = word.length;
    for (let i = len-1; i>=0; i--) {
        wordReverse += word.charAt(i);
        word = word.slice(0, -1)
    }

    return wordNormal === wordReverse;
}


function convertRomanToInt(roman) {
    const romanDigits = ["I", "V", "X"];
    const decimalDigits = [1, 5, 10];
    let romanList = [];

    const numberLen = roman.length;
    for (let i = 0; i < numberLen; i++) {
        let decimalList = [];
        let digit = roman.charAt(i);

        romanDigits.indexOf(digit);
        //TERMINAR
    }
}