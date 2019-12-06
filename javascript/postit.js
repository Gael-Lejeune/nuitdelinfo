etat = "nonvisible";

function afficherFenetre(id_de_la_fenetre) {
    if (etat == "nonvisible"){
        document.getElementById(id_de_la_fenetre).style.visibility = "visible"; //modifie la propriété css visibility de la div fenetre
        etat = "visible";
    }else if (etat == "visible") {
        document.getElementById(id_de_la_fenetre).style.visibility = "hidden";
        etat = "nonvisible";
    }
}

function checkCode() {
    var cde = document.getElementById('codelife');
    if(cde.value == '1664'){
        afficherFenetre('code');
        afficherFenetre('code');
    }
}