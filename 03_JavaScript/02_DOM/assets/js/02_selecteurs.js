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
    title[0].style.backgroundColor = "pink";


    //selection via queryselectorv (selectioner le premier élément trouvé)

    let div = document.querySelector('div');
    console.log(div);

    div.style.border = "2px solid black";

    // La méthode querySelector() retourne le 1er élément trouvé spécifié en paramètres.
// L'avantage de querySelector c'est qu'il utilise la syntaxe de sélection CSS -> #monId .maClass <balise>.


// Selection via querySelectorAll()(selectione tous les éléments trouvés)
// sélectionne toutes les balises en ensemble et retourne un array d'elements

    let query = document.querySelectorAll('.selectClass')

    console.log(query);// on a 3 paragraphe qui on la classe selectClass

    for (let i = 0; i < query.length; i++) {

        console.log(query[i].innerText);
        
    }

//La propriété innerText est similaire à innerHTML, mais elle fonctionne avec le texte brut à l'intérieur d'un élément, plutôt qu'avec le HTML. Elle permet d'accéder au texte contenu dans un élément HTML et de le modifier si nécessaire.

    let rajout = document.querySelector(".bg-success p");

    rajout.innerText = "Je suis la";

// Création d'un nouvel élément

    let section = document.querySelector('section');
// pour crée un élément nous utillison la methode createElement(), puis nous l'integrons dans le noeud souhaité.7

    let nouveauParaFin = document.createElement('p');

    nouveauParaFin.innerHTML = "<strong> Coucou, je suis ton nouveau paragraphe à la fin de section </strong>";

    nouveauParaFin.style.color = "red";

    section.append(nouveauParaFin);// append() -> insère du contenu à la fin de la section. // append() accepte tous les élements (balise ou string).

    let nouveauParaDebut = document.createElement('p');

    nouveauParaDebut.innerHTML = "<strong> Coucou, je suis ton nouveau paragraphe au début de le section </strong>";

    nouveauParaDebut.style.color = "green";

    section.prepend(nouveauParaDebut);// prepend() -> insére du contenu au debut de la section

// DEPLACER UN ELEMENT 

// pour déplacer un élément il faut trois paramètres

    /*
    * -> le parent qui va acceuillire l'elemenet 
    * -> l'element à déplacer 
    * -> l'elemnet qui vient après
    */

    let parent = document.querySelector('main');
    let jeBouge = document.querySelector('h4');
    let h2 = document.querySelector('.subtitle');
    parent.insertBefore(jeBouge, h2);

    // SUPPRIMER UN ELEMENT

    // Pour supprimer un élément il faut 2 paramètres :

    /*
    * -> le parent 
    * -> l'element a supprimer
    */

    let ul = document.querySelector('ul');

    let li = document.querySelector('ul :nth-child(2)');
    // let li = document.getElementsByTagName('li')[1];
    console.log(li);

    // pour supprimer , on utillise .removeChild()
    ul.removeChild(li);

// CREE UN TTRIBUT ET SA VALEUR

    // setAttribute() : méthode pour ajouter un nouvel attribut ou pour changer la valeur d'un attribut existant pour un élément

    let baliseA = document.querySelector('a');
    baliseA.setAttribute("attribut", "valeurAttribut");// je rajoute un attribut à la balise a

    baliseA.setAttribute("href", "o1_introduction.html");// Changer la valeur de l'attribut href

    let lesA = document.querySelectorAll('a');

    let valeurA = lesA[3].getAttribute('href');

    console.log(valeurA);


// Grâce à votre script, créez une balise a dans la balise h1 avec le lien vers la documentation JS () qui s'affiche sur un nouvel onglet.
// Ce lien sera de couleur blanche et non souligné


    // elem.setAttribute("href", "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/link");
    // elem.setAttribute('target', '_blank');

    // elem.style.color = "white";
    // elem.style.textDecoration = "none";
    // elem.innerText = "Documentation JS";
    // contener.append(elem);
    // console.log(elem);



    titre. innerHTML = "<a href = 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/link' target= '_blank' >Cours JavaSript</a>";
    let elem = document.querySelector('h1 a');
    elem.style.color = "white";
    elem.style.textDecoration = "none";

    

        