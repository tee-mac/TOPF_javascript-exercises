const palindromes = function (str) {
    // remove punctuation and spaces
    const punctuation = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
    const spaces = /\s+/g;
    const processed = str.replace(punctuation,"").replace(spaces, "").toLowerCase();
    return processed === processed.split("").reverse().join(""); 
}

// Do not edit below this line
module.exports = palindromes;
