
const arr = [56, 78, 12, 45, 67, 70];
function findDifference(arr) {
    let max= arr[0]
    let min= arr[0]
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
             min = arr[i]; 
        }
        if (arr[i] > max) {
            max = arr[i]
        }
    }
  return max - min;
}
console.log(findDifference(arr)); 

const arr = [56,78,12,45,67,80]
function findgreatest(){
    let greatest= arr[0]
    for(let i=1; i<arr.length;i++)
    if(greatest>arr[i]){
        greatest=arr[i]
    } return greatest

    function findleast(){
        let least =arr[0]
        for(let i=1; i<arr.length;i++)
            if(least<arr[i]){
                least=arr[i]
            }
    }
}

