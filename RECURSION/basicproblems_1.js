// 1. Print Name n times 
// 2. Print Linearly from 1 to N;
// 3. Print from N to 1 
// 4. Print Linearly from 1 to N (but by backtrack)
// 5. Print Linearly from N to 1 (but by backtrack)


// 1. Print Name 5 times 
// function printName(n){
//     if(n === 0)return
//     console.log("Dhiraj");
//     printName(n-1)
// }


// printName(10)
// 2. Print Linearly from 1 to N;
// let count = 1
// function printNos(N){
//     if(N===0) return ;
//     console.log(count);
//     count++;
//     printNos(N-1)
// }

// 3. Print from N to 1 
// function printNos(N){
//     if(N===0) return ;
//     console.log(N)
//     printNos(N-1)
// }
// printNos(10)


// 4. Print Linearly from 1 to N (but by backtrack)


function printNos(i, N){
    if(i<1) return;
    printNos(i-1, N);
    console.log(i)
}

// 5. Print Linearly from N to 1 (but by backtrack)
function printNos(i, N){
    if(i>N) return;
    printNos(i+1, N);
    console.log(i)
}

printNos(1,3)
