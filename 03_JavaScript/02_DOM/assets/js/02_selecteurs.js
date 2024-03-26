// alert('baclava');

/*
    Afin de modifier les intéractions d'utilisateur , nous allons modifier notre DOM grâce à JavaScript
*/

//------------------------------------------------
// SELECTIONER LES ELEMENTS
//-------------------------------------------------

// Selection via tag

    let title = document.getElementsByTagName('h1');
    console.log(title);

    let lesP = document.getElementsByTagName('p');// on cherche tous les paragraphe de notre page
    //on reccuper un array (tableau) d'éléments
    console.log(lesP);

// Grâce a ma variable dans laquelle j'ai sélectionné tous les p, je peux viser un seul des éléments gr^ca à son index. Pour faire du CSS j'utillise la propriété 'style' suivi des mêmes déclarations que j'utilise en CSS, avec du camelCase à la place de kebab-case;
// la propriete style permet d'acceder finement au styles qui concernent un élément particulier.


    lesP[0].style.backgroundColor = " red ";
    lesP[0].style.color = "#fff";
    lesP[0].style.fontWeight = "bold";


// Selection via ID

    let titre = document.getElementById("titre");
    console.log(titre);


// Seletion via classe

    let selectClass = document.getElementsByClassName("selectClass");
    console.log(selectClass);

// Lorsqu'on sélectionne plusieurs éléments en même temps avec getElementsByClassName, on crée un array en JavaScript qui affiche dans la console avec l'intitulé HTMLCollection. Comme un tableau, le premier élément aura l'index 0.

    console.log(selectClass[1]);
    console.log(selectClass[1].innerHTML);

// innerHTML est une propriété en JavaScript qui permet d'accéder ou de définir le contenu HTML d'un élément. Elle renvoie ou modifie le contenu HTML (c'est-à-dire les balises et le texte) à l'intérieur de l'élément spécifié.

// MINI EXO 1 : modifier le contenu du h2 qui a la classe .subtitle : 'Je change le titre, youhou'

    let aChanger = document.getElementsByClassName('subtitle');
    
    aChanger[0].innerHTML = "<strong>Je change le titre, youhou</strong>";

// MINI EXO 3 : Sélectionner tous les p dans la page et changer le texte en majuscules.

    // lesP[0].style.textTransform = "uppercase";
    // lesP[1].style.textTransform = "uppercase";
    // lesP[2].style.textTransform = "uppercase";
    // lesP[3].style.textTransform = "uppercase";
    // lesP[4].style.textTransform = "uppercase";

    // for (let i = 0; i < lesP.length; i++) {

    //     lesP[i].style.textTransform = "uppercase";
        
    // }

    // Boucle for of : je déclare une variable p qui représente chaque élément dans le tableau lesP, au niveau de l'instruction à exécuter j'appelle la variable p en lui attribuant le style souhaité avec la propriété style.

    for ( let p of lesP) {

        p.style.textTransform = "uppercase";
        
    }
    






        