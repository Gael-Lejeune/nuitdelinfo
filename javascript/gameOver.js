var a = true;
var b = false;
var c = false;
var d = false;
var e = false;
var nule= null;
var counter = 2;

function gagner() {
    document.location.href="i109.php"
}

function test() {
    if (a == true) {
        document.getElementById("bouton1").style.display = "none";
        document.getElementById("bouton2").removeAttribute("style")
        a = false;
        b = true;
    } else if (b == true) {
        document.getElementById("bouton2").style.display = "none";
        document.getElementById("bouton3").removeAttribute("style")
        b = false;
        c = true;
    } else if (c == true) {
        document.getElementById("bouton3").style.display = "none";
        document.getElementById("bouton4").removeAttribute("style");
        c = false;
        d = true;
    } else if (d == true) {
        document.getElementById("bouton4").style.display = "none";
        document.getElementById("bouton5").removeAttribute("style");
        d = false;
        e = true;
    } else if (e == true) {
        gagner();
}
}