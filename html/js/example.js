{
    function validateinput(){
        let myinput=document.getElementById("numb")
    let user_value=myinput.value
       if(isNaN(user_value)||!(user_value>=1 && user_value<=10)){
            alert("wrong input")
        }else{
            alert("correct")
        }
    }
    function changeToUpperCase(){
        let myInput= document.getElementById("numb");
        myInput.value = myInput.value.toUpperCase()
    }
}