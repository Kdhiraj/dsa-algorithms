// Factorial of N number 
//functional way
function fact(n){
    if(n===1) return 1;
    return n * fact(n-1)
}


//parameterized way
function factUsingParameter(i,sum){
    if(i<1){
        console.log(sum);
        return ;
    }
    factUsingParameter(i-1, sum * i)
}

factUsingParameter(4,1)
console.log(fact(4))