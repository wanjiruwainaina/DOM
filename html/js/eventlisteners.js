{
    const button=document.getElementById("mybutton")
    const heading=document.getElementById("myh1")
    function changestyle(){
        heading.innerHTML=`<h3>hello Dom</h3`;
        heading.style.color="red"
        heading.style.fontSize="5em"
 }
 button.addEventListener("click",changestyle)
    

}