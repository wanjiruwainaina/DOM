// {   toggle NOTE:
   { const myh1=document.getElementById("myh1")
    const button=document.getElementById("mybutton")
    let bodyIsDefault=true;
    function changeh1(){
        if(bodyIsDefault){
            bodyIsDefault=false
            myh1.className="headingstyle2"
            
        }else{
            bodyIsDefault=true
            myh1.className="headingstyle"
            
        }
        
    }
}