function showHide() {
    var temp1 = document.getElementById("pass");
    var temp2 = document.getElementById("cpass");
    if (temp1.type === "password" && temp2.type == "password") {
        temp1.type = "text";
        temp2.type = "text";
    } else {
        temp1.type = "password";
        temp2.type = "password";
    }
}

function checkPassword() {
    var temp1 = document.getElementById("pass");
    var temp2 = document.getElementById("cpass");
    if (temp1.value == temp2.value) {
        temp1.style.borderBottom = "2px solid lightgray";
        temp2.style.borderBottom = "2px solid lightgray";

        document.getElementById("error").innerHTML = "";
    } else {
        temp2.style.borderBottom = "2px solid red";
        temp1.style.borderBottom = "2px solid red";

        document.getElementById("error").innerHTML = "<i class='fa fa-exclamation-circle'></i> passwords should be match";
    }
}