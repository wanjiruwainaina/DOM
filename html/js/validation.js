{
    {   
        let button = document.getElementById("button")
        sampleNumbers ="0123456789"
        sampleSpecial ="#\\|*&%^$£"
        samplecharacters="abcdefghijklmnopqrstuvwxyz"
        othercharacters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
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
                input.style.border ="1px solid red"
            }else if(checkpassword(password, sampleNumbers) && checkpassword(password, sampleSpecial)&& checkpassword(password,samplecharacters)&&checkpassword(password,othercharacters)){
                par.innerHTML="welcome"
                input.style.border =" "
            }else if(password.length<8){
                 par.innerHTML="add more characters"
                 input.style.border ="1px solid red"
            }else if(!checkpassword(password,othercharacters)){
                par.innerHTML="add uppercase characters"
                input.style.bordercolour= "red"
            }
            else{ 
                par.innerHTML="password must contain one special character and atleat one number lower and uppercase characters"
                input.style.border = "1px solid red";
            }
        }
        button.addEventListener('click', validatePassword)
    }
}
let sample_pass = "dan1234#%"
sample_numbers = "0123456789"
sample_special = "#/|\\*&%$@.`~!^:;?"
sample_uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
sample_lowercase = "abcdefghijklmonpqrstuvwxyz"
const button = document.getElementById("myButton")
function checkPassword(password, regular){
    for(i = 0; i<regular.length; i++){
        if(password.includes(regular[i])){
            return true
        }
    }
    return false;
}
let input = document.getElementById("myInput")
function validateInpiut(){
    password = input.value
    let par = document.getElementById("message")
    if(checkPassword(password, sample_numbers) && checkPassword(password, sample_special) && checkPassword(password, sample_uppercase) && checkPassword(password, sample_lowercase) && password.length >=8){
        par.innerHTML = `<h3>Correct</h3>`
        input.style.borderColor = "green"
    }else if(!checkPassword(password, sample_numbers)){
        par.innerHTML = `<h3>Lack numbers</h3>`
        input.style.borderColor = "red"
    }else if(!checkPassword(password, sample_special)){
        par.innerHTML = `<h3>Lack special</h3>`
        input.style.borderColor = "red"
    }else if(!checkPassword(password, sample_lowercase)){
        par.innerHTML = `<h3>Lack lowecase</h3>`
        input.style.borderColor = "red"
    }else if(!checkPassword(password, sample_uppercase)){
        par.innerHTML = `<h3>Lack uppercase</h3>`
        input.style.borderColor = "red"
    }else if(password.length < 8){
        par.innerHTML = `<h3>Should be 8 or more characters</h3>`
        input.style.borderColor = "red"
    }else{
        par.innerHTML = `<h3>Incorrect</h3>`
        input.style.borderColor = "red"
    }
}
button.addEventListener("click", validateInpiut)
input.addEventListener("input", validateInput)
11:46
HTML FILE FOR PASSWORD CHECKER:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Password Checker</h1>
    <input id="myInput" type="text" class="passInput" oninput="validateInpiut()">
    <p id="message"></p>
    <button id="myButton">Submit</button>
    <script src="../js/passwordChecker.js"></script>
</body>
<style>
    .passInput{
        border: 5px solid black;
        padding: 5px;
        border-radius: 10%;
        font-size: 1.5em;
    }
</style>
</html>
