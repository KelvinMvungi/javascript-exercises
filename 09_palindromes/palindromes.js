const palindromes = function (str) {
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedStr = str.split("").reverse().join("");

    return str === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
