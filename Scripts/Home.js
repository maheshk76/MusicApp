document.querySelector("body").onscroll = close();
document.querySelector("body").onload = load();

$("#tabs").click(function (e) {
    e.stopPropagation();
    close();
});
$("#mySidenav > span").click(function () {
    var x = $(this).attr("id");
    if (x == "0") {
        $("#home").show();
        $("#search").hide();

        $("#playlists").hide();

        $("#favs").hide();
    } else if (x == "1") {
        $("#home").hide();
        $("#search").show();

        $("#playlists").hide();

        $("#favs").hide();
    } else if (x == "2") {
        $("#home").hide();
        $("#search").hide();

        $("#playlists").show();

        $("#favs").hide();
    } else if (x == "3") {
        $("#home").hide();
        $("#search").hide();

        $("#playlists").hide();

        $("#favs").show();
    }
    openNav();
});

function load() {
    $("#home").show();
    $("#search").hide();

    $("#playlists").hide();

    $("#favs").hide();
    var uname = document.getElementById("uname");
    if (uname.innerHTML.length > 10) {
        uname.innerHTML = uname.innerHTML.slice(0, 10) + "...";
    }
}

function openNav() {
    var x = document.getElementById("mySidenav");
    if (x.style.width == "250px") {
        x.style.width = "0";
        document.getElementById("tabs").style.marginLeft = "0";

    } else {
        x.style.width = "250px";

        document.getElementById("tabs").style.marginLeft = "250px";
    }
}


function openNavRight() {
    var x = document.getElementById("mySidenavRight");
    if (x.style.width == "150px") {
        x.style.width = "0";
    } else {
        x.style.width = "150px";
    }
}

function close() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenavRight").style.width = "0";

    document.getElementById("tabs").style.marginLeft = "0";
}