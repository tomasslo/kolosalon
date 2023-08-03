'use strict';
let celkovacena;
let cenakol = 0;
let pocetdnuzapujcky = 5;
let muzeZaplatit = 0;
let mohuZaplatit = false;

document.formObjKola.horskeHod.value = 0;
document.formObjKola.detskeHod.value = 0;
document.formObjKola.silnicniHod.value = 0;
document.formObjKola.gravelHod.value = 0;
document.formObjKola.muzeZaplatitHod.value = 0;

function zobrazCelkovouCenu() {
    cenakol = 0;
    if (document.getElementById("horske").checked == true) {
        cenakol += parseInt(document.formObjKola.horskeHod.value) * 500;
    }
    if (document.getElementById("detske").checked == true) {
        cenakol += parseInt(document.formObjKola.detskeHod.value) * 200;
    }
    if (document.getElementById("silnicni").checked == true) {
        cenakol += parseInt(document.formObjKola.silnicniHod.value) * 1500;
    }
    if (document.getElementById("gravel").checked == true) {
        cenakol += parseInt(document.formObjKola.gravelHod.value) * 2500;
    }
    
    pocetdnuzapujcky = parseInt(document.formObjKola.dobazap.value);
    celkovacena = cenakol * pocetdnuzapujcky;

    if (document.getElementById("cyklonosic1").checked == true) {
        celkovacena = celkovacena + 0.05 * celkovacena;
    }
    if (document.getElementById("cyklonosic2").checked == true) {
        celkovacena = celkovacena + 0.1 * celkovacena;
    }

    muzeZaplatit = parseInt(document.formObjKola.muzeZaplatitHod.value);

    if (celkovacena <= muzeZaplatit) {
        document.formObjKola.oznameniOObjednavceHod.classList.remove('oznameniOObjednavceHodKO');
        document.formObjKola.oznameniOObjednavceHod.classList.add('oznameniOObjednavceHodOK');
        document.formObjKola.oznameniOObjednavceHod.value = "Objednávka je ve Vašich finančních možnostech.";
        mohuZaplatit = true;
    } else {
        document.formObjKola.oznameniOObjednavceHod.classList.remove('oznameniOObjednavceHodOK');
        document.formObjKola.oznameniOObjednavceHod.classList.add('oznameniOObjednavceHodKO');
        document.formObjKola.oznameniOObjednavceHod.value = "Objednávka není ve Vašich finančních možnostech.";
        mohuZaplatit = false;
    }

    document.formObjKola.celkovaCenaHod.value = celkovacena;
    
}

function kontrolamailu()
{  
var x=document.formObjKola.email.value;  
var atposition=x.indexOf("@");  
if (atposition<1 || mohuZaplatit == false){  
  alert("Zadejte prosím správný e-mail, popř. zkontrolujte,\nje-li objednávka ve Vašich finančních možnostech");  
  return false;  
  }  
}  