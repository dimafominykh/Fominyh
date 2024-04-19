
function checkFirst() {
    let first = document.getElementById("first").value;
    let regex = /^[[а-яА-ЯёЁa-zA-Z\s]{2,15}$/;


    if (regex.test(first)) { 
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Теперь правильно)";
        return true;
    }
    else {
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Ведите от 2 до 15 символов";
        return false;
    }
}


function checkLast() {
    let last = document.getElementById("last").value;
    let regex = /^[а-яА-ЯёЁa-zA-Z\s]{0,20}$/;

    if (regex.test(last)) { 
        document.getElementById("last_Check").style.color = "green";
        document.getElementById("last_Check").innerHTML = "Теперь правильно)";
        return true;
    }
    else {
        document.getElementById("last_Check").style.color = "red";
        document.getElementById("last_Check").innerHTML = "Ведите от 2 до 20 символов";
        return false;
    }
}


function checkDest() {
    let dest = document.getElementById("dest").value;
    let regex = /^[а-яА-ЯёЁa-zA-Z0-9\s\.\,\d\ ]{5,50}$/;

    if (regex.test(dest)) { 
        document.getElementById("dest_Check").style.color = "green";
        document.getElementById("dest_Check").innerHTML = "Теперь правильно)";
        return true;
    }
    else {
        document.getElementById("dest_Check").style.color = "red";
        document.getElementById("dest_Check").innerHTML = "Ведите от 5 до 50 символов";
        return false;
    }
}


function checkPhone() {
    let phone = document.getElementById("phone").value;
    let regex = /^\d{3} (\d{3})-\d{2}-\d{2}$/;

    if (regex.test(phone)) { 
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Теперь правильно)";
        return true;
    }
    else {
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Данные введены неверно";
        return false;
    }
}






