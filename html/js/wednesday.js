{
    function sumAsync(x, y,sumation){
        sum = x + y;
         sumation(sum)
    }
    function outcome(){
     setTimeout(()=>{
        console.log(sum)
    },5000);
 }
 sumAsync(5,5,outcome)
}



