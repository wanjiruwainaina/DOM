{
    function sumAsync(x, y,sum){
        sum = x + y;
        console.log(sum)
    }
    function outcome(result){
        console.log(result)
        
    }
    console.log(outcome)
        setTimeout(function(){
            console.log(outcome)
        },5000)
         sumAsync(5,5,outcome)
}



