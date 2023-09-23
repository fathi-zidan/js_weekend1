let sum =0;
function summation(num){
    let sum =0;
    for(let i=1;i<=num;i++){
        sum+=i;
    }
    return sum;
}
let x = summation(2);
console.log("Sum : " ,x);
let y = summation(8);
console.log("Sum : " ,y);
 