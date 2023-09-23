let arr = [0, 1, 1, 1];
let sum = 0;
let j = 0;
for (let i = arr.length - 1; i >= 0; i--) {
    sum += arr[i] * Math.pow(2, j);
    j++;
}
console.log("sum is", sum);