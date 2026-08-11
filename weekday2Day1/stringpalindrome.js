let str = "Testleaf";
let characters = str.split("");
let reverse = "";

for (let i = characters.length - 1; i >= 0; i--) {
    reverse = reverse + characters[i];
}

console.log("Original String:", str);
console.log("Reverse String:", reverse);

if (str === reverse) {
    console.log("It is a palindrome");
} else {
    console.log("It is not a palindrome");
}