// Recursion: When a function call itself until a spcified condition is met is called recursion 

//It runs in infinite time and we get error : RangeError: Maximum call stack size exceeded , because we do not pass any condition
// function print(){
//     console.log(1);
//     print();
// }


// print()


//To avoid run recursion infinite times we should pass condition

let count = 1
// function printCount(){
//     if(count === 4) return ;
//     console.log(count);
//     count++;
//     printCount()
// }

// printCount()

//by passing number 

function printNos(n){
    if(n===0) return ;
    console.log(count);
    count++;
    printNos(n-1)
}
printNos(100)
