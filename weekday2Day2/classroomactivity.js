//print only duplicate elements from an array
let arr = [1, 2, 3, 2, 4, 5, 1, 4, 9, 7];
let duplicates = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {

        if (arr[i] === arr[j]) {
            duplicates.push(arr[i]);
            
        }

    }
}console.log(duplicates);
