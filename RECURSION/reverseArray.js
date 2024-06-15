// Write a function to reverse an array 


//Using loop
// T.C: O(n)
// S.C: O(n)

function reverseAnArrayUsingLoop(arr, n){
    let newArr = [];
    for(let i=n-1; i>=0; i--){
        newArr[n-i-1] = arr[i];
    }
    return newArr
}




console.log(reverseAnArrayUsingLoop([1,2,3,4,5], 5))

//Using two pointer approach p1, and p2
// T.C: O(n)
// S.C: O(1)
function reverseAnArrayUsingPointer(arr, n){
    let p1 = 0;
    let p2 = n - 1;
    while(p1< p2){
        //swap the element
        let temp = arr[p1];
        arr[p1] = arr[p2];
        arr[p2] = temp;
        p1++; // increment from left
        p2--; // decrement from right
    }
    return arr;
}
console.log(reverseAnArrayUsingPointer([1,2,3,4,5], 5))

//Using Recursion

function reverseAnArrayUsingRecursion(arr, start, end){
    if(start <  end) {
        //swap
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        reverseAnArrayUsingRecursion(arr, start+1, end-1)
    } 
    return arr;
    
}

console.log(reverseAnArrayUsingRecursion([1,2,3,4,5],0, 4))
