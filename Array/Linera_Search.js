// Linear Search 

function linearSearch(arr,x){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==x){
            return i;
        }
    }
    return -1;
}
let arr=[10,34,21,54,77,53];
let x=77;
let res=linearSearch(arr,x);
if(res!=-1){
    console.log("Element found at ",res," index");
}
else{
    console.log("Element not found");
}

// time complexity- O(n)

// space complexity - O(1)