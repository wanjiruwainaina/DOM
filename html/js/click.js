let number = 0;

function NewNumber() {
    number++;
    document.getElementById('number').innerHTML = number;
}

function reset() {
    number = 0;
    document.getElementById('number').innerHTML = number;
}