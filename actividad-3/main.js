function fibonacci(n) {
    if (n == 0) {
        return 0
    }
    else if (n == 1) {
        return 1
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}


function isPalindrome(word) {
    let wordNormal = word;
    let wordReverse = "";

    const len = word.length;
    for (let i = len - 1; i >= 0; i--) {
        wordReverse += word.charAt(i);
        word = word.slice(0, -1)
    }

    return wordNormal === wordReverse;
}

function findPalindromes(words) {
    return words.filter((word) => isPalindrome(word));
}


function convertRomanToInt(roman) {
    const romans = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let result = 0;
    let currentInt = 0;
    let lastInt = 0;
    for (let i = roman.length - 1; i >= 0; i--) {
        currentInt = romans[roman[i]];

        if (currentInt >= lastInt) {
            result += currentInt;
        } else {
            result -= currentInt;
        }

        lastInt = currentInt;
    }

    return result;
}


function validatePassword(password) {
    if (password.length >= 8) {
        const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"]
        let numbersCount = 0;
        let uppercasesCount = 0;
        let lowercasesCount = 0;
        let specialCharactersCount = 0;

        for (let i in password) {
            let character = password[i];

            if (!isNaN(character)) {
                numbersCount++;
            } else if (specialCharacters.includes(character)) {
                specialCharactersCount++;
            } else if (character === character.toUpperCase()) {
                uppercasesCount++;
            } else if (character === character.toLowerCase()) {
                lowercasesCount++;
            }
        }

        return numbersCount > 0 && uppercasesCount > 0 && lowercasesCount > 0 && specialCharactersCount > 0;
    } else {
        return false
    }
}