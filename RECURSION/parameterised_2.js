// 1. Sum of first N natural number 

//with math formula
function sumOfNumbersUsingFormula(n){
    const result = n * (n+1)/2
    return result
}



//using loop

function sumOfNumbersUsingLoop(n){
    let sum = 0
   for(let i = 0; i<=n; i++){
     sum = sum + i
   }
    return sum;
}


//parameterized way: we consider parameter to return the output

function sumOfNumbersUsingParameterizedRecursion(i , sum){
    if(i<1){
        console.log(sum);
        return sum;
    }

    sumOfNumbersUsingParameterizedRecursion(i-1, sum+i)
}


//functional way we break the input into smaller to get output
function sumOfNumbersUsingFunctionRecursion(n){
    if(n===0) return 0;
    return n + sumOfNumbersUsingFunctionRecursion(n-1)
}

console.log(sumOfNumbersUsingFormula(5));
console.log(sumOfNumbersUsingLoop(5));
sumOfNumbersUsingParameterizedRecursion(5,0);
console.log(sumOfNumbersUsingFunctionRecursion(5));


