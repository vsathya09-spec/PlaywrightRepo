//Length of the last word

function lengthOfLastWord(s) {
    let words = s.trim().split(" ");
    let lastWord = words[words.length - 1];

    return lastWord.length;
}

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord(" fly me to the moon "));


//function to check if two strings are anagrams of each other
function isAnagram(str1, str2) {
    let first = str1.replaceAll(" ", "").toLowerCase().split("").sort().join("");
    let second = str2.replaceAll(" ", "").toLowerCase().split("").sort().join("");

    return first === second;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));