const arr = [500, 200, 10, 300, 4];
let sum = 0;

function lowest_sum(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return sum = arr[0] + arr[1];
}
let low_sum = lowest_sum(arr);
console.log(`Sum of the lowest two elements is ${low_sum}`);
//  console.log("Sorted array is: ",arr);