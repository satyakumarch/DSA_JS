// Binary Search 
// iterative approach 
function binarySearch(arr,x){
    let left=0;
    let right=arr.length-1;
    while(left<=right){
    let mid=left+Math.floor((right-left)/2);
        if(arr[mid] === x){
            return mid;
        }
        else if(arr[mid]<x){
            left=mid+1;
        }
        else{
            right=mid-1;
        }
    }
    return -1;
}

let arr=[10,20,30,40,50];   //sorted array
let x=50;
let res=binarySearch(arr,x);
if(res!=-1){
    console.log("Element found at ",res," index");
}
else{
    console.log("Element not found");
}

// time-complexity : O(log n)
// space-complexity : O(1)
