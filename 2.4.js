const arr = [1, 1, 1, 2, 1, 1];
const arr2 = [0, 0, 0.55, 0, 0];
function unique(arr) {
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            return arr[i];
        } else {
            return arr[arr.length - 1];
        }
    }
}
const x = unique(arr);
console.log("The unique value is:", x);
const y = unique(arr2);
console.log("The unique value is:", y);
