{
    const button= document.getElementById("some_button")
    function changeBackground(){
         document.body.style.background="violet"

        
    }
    button.addEventListener('click',changeBackground)
}

   
{
    button=document.getElementById("some_button")
    const text=document.getElementById("head")
    function changeH1(){
         text.style.color="green"
}
button.addEventListener('mouseover',changeH1)
// NOTE YOU CAN NOT USE TWO FUNCTIONS WITH THE SAME NAME
function changebackH1(){
    text.style.color="black"

}
button.addEventListener('mouseout',changebackH1)
}




    
    
