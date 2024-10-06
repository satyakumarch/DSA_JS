// Binary Search 
// recursive approach 
function binarySearch(arr,x,left,right){
    let mid=left+Math.floor((right-left)/2);
    if(left>right){
        return -1;
    }
    else{
        if(arr[mid]===x){
            return mid;
        }
        else if(arr[mid] < x){
            return binarySearch(arr,x,mid+1,right);
        }
        else{
            return binarySearch(arr,x,left,mid-1);
        }
    }
}

let arr=[10,20,30,40,50];   //sorted array
let x=30;
let left=0;
let right=arr.length-1;
let res=binarySearch(arr,x,left,right);
if(res!=-1){
    console.log("Element found at ",res," index");
}
else{
    console.log("Element not found");
}

// time-complexity : O(log n)
// space-complexity : O(1)
