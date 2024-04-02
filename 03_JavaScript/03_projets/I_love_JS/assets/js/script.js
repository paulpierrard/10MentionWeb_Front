//------------------------- Dark mode -------------------//

let switchBox = document.querySelector('.switch');
// je stock l'élément div.switch
let container = document.querySelector('.container-fluid');
//je stock l'événement div.container
let navDark = document.querySelector('.navbar-desktop');
let textDark = document.querySelectorAll('.navbar-desktop a');
let hunDark = document.querySelector('.bannier-titre');
let btnChange = document.querySelector('.btn');
let icon = document.querySelector('.switch i');



switchBox.addEventListener('click', ()=>{

    // la div container change de couleur de fond
    container.classList.toggle('container-change');
    navDark.classList.toggle('nav-dark');
    hunDark.classList.toggle('text-d');
    btnChange.classList.toggle('btn-change');
    icon.classList.toggle('icone-change');
    switchBox.classList.toggle('switch-change');
    btnChange.classList.toggle('btn-dark');


 

    for (let lien of textDark) {

        lien.classList.toggle('text-d');
        
    }

    if (icon.classList.contains("bi-sun-fill")) {

        icon.classList.remove("bi-sun-fill");
        icon.classList.add("bi-moon-fill");
        
    } else {

        icon.classList.remove("bi-moon-fill");
        icon.classList.add("bi-sun-fill");
        
    }

} )

let smile = document.querySelector('.smil')

smile.addEventListener('click', ()=>{
    
    if (smile.classList.contains("bi-emoji-neutral")) {

        smile.classList.remove("bi-emoji-neutral");
        smile.classList.add("bi-emoji-heart-eyes");
        
    } else {

        smile.classList.remove("bi-emoji-heart-eyes");
        smile.classList.add("bi-emoji-neutral");
        
    }

})

let abonner = document.querySelector('.btn-abonner')

abonner.addEventListener('click', ()=>{

    if (abonner.classList.contains("abonnez-vous")) {

        abonner.classList.remove("abonnez-vous");
        abonner.classList.add("abonée <i class='bi bi-check2'></i>");
        
    } else {

        abonner.classList.remove("abonnez-vous");
        abonner.classList.add("abonée <i class='bi bi-check2'></i>");
        
    }

   
})
