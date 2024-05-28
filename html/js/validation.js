{
    {
        let button = document.getElementById("button")
        sampleNumbers ="0123456789"
        sampleSpecial ="#\\|*&%^$£"
        samplecharacters="abcdefghijklmnopqrstuvwxyz"
        function checkpassword(password, regular) {
            for(i =0;i<regular.length;i++){
                if(password.includes(regular[i])){
                    return true
                }
            }
            return false
        }
        function validatePassword(){
            let par=document.getElementById("par")
            let password = document.getElementById("input").value
            if (password==""){
                par.innerHTML="password is required"
            }
            else if(checkpassword(password, sampleNumbers) && checkpassword(password, sampleSpecial)&& checkpassword(password,samplecharacters)){
                par.innerHTML="welcome"
            }else if(password.length<8){
                 par.innerHTML="add more characters"
            }else{ 
                par.innerHTML="password must contain one special character and atleat one number"
            }
        }
        button.addEventListener('click', validatePassword)
    }
}
