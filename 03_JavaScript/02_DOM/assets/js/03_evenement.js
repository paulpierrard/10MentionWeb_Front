/* 
    Les évènement vont me permettre de déclencher une fonction c'est à dire une série d'instruction, suite à une action de mon utilisateur..
    // OBJECTIF : Étre en mesure de capturer ces évènements afin d'exécuter une fonction 
    Les Évènement MOUSE (Souris):

        click   : au click sur un élément
        mouseenter : la souris passe au dessus de le zone d'un élément
        mouseleave  : la souris sort de la zone d'un élément*
    
    Les Évènements KEYBOARD (Clavier):

        Keydown  : une touche du clavier est enfoncée
        Keyup   : une touche du clavier a été relachée

    Les Évènements WINDOW (Fenêtre)

        scroll   : défilement de la fenêtre 
        resize   : redimensionnement de la fenêtre

    Les Évènements FORM (formulaire)

        Change    : pour les éléments <input>, <select> et <textearea>
        submit   : à l'envoi du formulaire 
        input     : pour capter la saisie  d'un utilisateur sur un champ <input>

        ------------------ Les écouteurs d'évènements -------------------

    Pour attacher un évènement un élèment, ou autrement dit, pour déclencher un écouteur d'évènement qui se chargera de déclencher une fonction, je vais utliser la syntaxe suivante
         selecteur.addEventListener('évènement', fonction);

          Etape 1 -> selectionner les elements
          Etape 2 -> Créer les fonctions qui seront executé par l'evenement
          Etape 3 -> Poser l'écouteur d'evenement pour l'intéraction
*/

// div #rouge

    let divRouge = document.querySelector('#rouge');//je selectionne ma div par son id ensuite je lui ajoute un écouteur d'évenement 
    divRouge.addEventListener('click',fDivRouge);
    // l'écouteur d'évenement se décompose en deux argument
    //1 -> l'action ici le click
    // 2 -> le nom de la fonction ici fDivRouge
    function fDivRouge() {

        divRouge.style.backgroundColor= "gold";
        divRouge.style.borderRadius= "50%";
        divRouge.innerText = "GOLD";
        
    }

    function fP1() {

        alert('le paragraphe est cliqué');
        
    }

// div #orange

    let divOrange = document.querySelector('#orange');
    divOrange.addEventListener('dblclick', function(){

        divOrange.style.backgroundColor= "gold";
        divOrange.style.borderRadius= "50%";
        divOrange.innerText = "GOLD";

    })

    // Le h2 avec ondblclick

    function dbl() {

        alert('suite a mon dbl click');
        
    }

// div #bleu

    let divBleu = document.querySelector('#bleu');
    divBleu.addEventListener('mouseover', ()=>{
        
        divBleu.style.backgroundColor= "gold";
        divBleu.style.borderRadius= "50%";
        divBleu.innerText = "GOLD";

    })


// div #primary

    let divPrimary = document.querySelector('#primary');
    divPrimary.addEventListener('mouseout', ()=>{
        
        divPrimary.style.backgroundColor= "gold";
        divPrimary.style.borderRadius= "50%";
        divPrimary.innerText = "GOLD";

    })

// div #success

    let divChangeCouleur = document.getElementById('success');
    divChangeCouleur.addEventListener('click', ()=>{

        if (divChangeCouleur.classList.contains('vert')) {//je vérifie si la div contien la classe vert dans la liste des classes
            divChangeCouleur.classList.remove('vert');
            divChangeCouleur.classList.add('gold');
            divChangeCouleur.style.borderRadius = "50%";
            divChangeCouleur.innerText = "GOLD";
            
        } else {

            divChangeCouleur.classList.remove('gold');
            divChangeCouleur.classList.add('vert');
            divChangeCouleur.style.borderRadius = "0";
            divChangeCouleur.innerText = "#success";

        }

    })

// cache-cache

    let imgChat = document.querySelector('img');
    imgChat.style.width = "300px";
    

// exercice

    let lesPs = document.querySelectorAll(".lesPs p");
    // let i=0;
    // while (i < lesPs.length) {

    //     lesPs[i].style.color = "#ff3366";
    //     lesPs[i].style.textDecoration = "underline";
    //     lesPs[i].style.fontWeight = "bold";
        
        
    //   i++;  
    // }
    console.log(lesPs);
//for of
    for (let p of lesPs) {

        p.style.color = "#ff3366";
        p.style.textDecoration = "underline";
        p.style.fontWeight = "bold";
        
    };


lesPs[0].addEventListener('click', ()=>{

    imgChat.classList.add('hide');

})
lesPs[1].addEventListener('click', ()=>{

    imgChat.classList.remove('hide');

})
lesPs[2].addEventListener('click', ()=>{

    imgChat.classList.toggle('hide');

})


 



