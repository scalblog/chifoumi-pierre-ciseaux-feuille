"use strict";  // pour avoir un code JavaScript proprement exécuter.

/* ici 
Dans cette méthode on envisage dans IF le cas où l'ordinateur et le joueur font égalité, puis dans les IF ELSE 
on envisage les cas où le Joueur peut gagner et enfin le ELSE désigne ce qui reste : à savoir que les autres cas de figure 
qui font que l ordinateur gagne.
*/

var choixUtilisateur ;
var choixOrdi ;
var result;

choixUtilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?").toLowerCase();
choixOrdi = Math.random();

console.log("choixUtilisateur = " + choixUtilisateur);

if (choixOrdi <= 0.33) {
	choixOrdi = "pierre";
} 

else if(choixOrdi <= 0.67) {
	choixOrdi = "feuille";
} 

else {
	choixOrdi = "ciseaux";
}

console.log("Ordinateur a choisi : " + choixOrdi);


if (choixUtilisateur == choixOrdi) {
    result = "Egalité ! rejouez...";
}

else if (choixUtilisateur == "pierre" && choixOrdi == "ciseaux") {
    result = "Vous avez gagné !";
}

else if (choixUtilisateur == "ciseaux" && choixOrdi == "feuille") {
    result = "Vous avez gagné !";
}

else if (choixUtilisateur == "feuille" && choixOrdi == "pierre") {
    result = "Vous avez gagné !";
}

else {
    result = "L'ordinateur a gagné, désolé..."
}


/*  avec Swicth... case... cest possible aussi
attention : Default est censé stocker les cas pour les erreurs : ici quand l utilisateur 
n a pas saisi pierre feuille ciseaux

'use strict';

// déclaration des variables
var random;
var computer;
var player;
var message;


// récupérer le choix du joueur
player = window.prompt('Que choisissez-vous : pierre, feuille ou ciseau ?');
player = player.toLowerCase().trim();

// récupérer le choix de l'ordinateur entre 0 et 1
random = Math.random();

if(random < 0.33){
    computer = 'pierre';
} else if ( random < 0.66){
    computer = 'feuille';
} else {
    computer = 'ciseau';
}

console.log(computer +' vs '+ player);

if(computer == player){
    message = "<p>Vous avez joué tous les deux la même chose : égalité</p>";
} else {

    switch(player){
        case 'pierre':
            if(computer == "ciseaux"){
                message = "<p>La pierre écrase les ciseaux, vous avez gagné</p>";
            } else {
                message ='<p>La feuille enveloppe la pierre vous avez perdu</p>';
            }
            break;
            
        case 'feuille':
            if(computer == "pierre"){
                message = "<p>La feuille enveloppe la pierre vous avez gagné</p>";
            } else {
                message = '<p>La feuille est découpé par les ciseaux vous avez perdu</p>';
            }
            break;
            
        case 'ciseaux':
            if(computer == "pierre"){
                message = "<p>La pierre écrase les ciseaux, vous avez perdu</p>";
            } else if(computer == 'feuille'){
                message ='<p>La feuille est découpé par les ciseaux vous avez gagné</p>';
            }
            break;
            
        default : 
            message = '<p class="error">je n\'ai pas compris votre réponse</p>';
    }

}


document.write(message);

*/


document.write("<p>Vous avez choisi : </p>" + choixUtilisateur);
document.write("<p>L'ordi a choisi : </p>" + choixOrdi);
document.write("<p></p>" + result);
