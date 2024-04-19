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

    // smile.classList.toggle('bi-emoji-wink-fill')

})

//------------------------------ bouton abonnez vous ------------------------------------//

let abonner = document.querySelector('.btn-abonner')

abonner.addEventListener('click', ()=>{

    if (abonner.innerText===("abonnez-vous")) {

        abonner.innerText = "abonnez-vous";
        abonner.innerHTML = "abonée <i class='bi bi-check2'></i>";
        
    } else {

        abonner.innerText="abonnez-vous";
        
    }

   
})

// cookies ------------------------------------------------------------------------

let btnCookies = document.querySelector(".btn-success");

let cookies = document.querySelector(".cookies")

btnCookies.addEventListener("click", ()=>{
    
    cookies.style.opacity = "0";
    
})

//---------------- carrousel ----------------------------//

let left = document.querySelector(".left");
let auto = document.querySelector(".automatique");
let right = document.querySelector(".right");
let img = document.querySelector("img");
let autoIcon = document.querySelector(".automatique i")
let i = 1;
let statut = null;

right.addEventListener("click", ()=>{

    i++;
    img.setAttribute('src', `assets/img/${i}.jpg`)

    if (i == 7) {

        i = 1 ;
        img.setAttribute('src', `assets/img/${i}.jpg`);

        
    } 
})

left.addEventListener("click", carrousel)

    function carrousel (){

    i--;
    img.setAttribute('src', `assets/img/${i}.jpg`)

    if (i == 0) {

        i = 6 ;
        img.setAttribute('src', `assets/img/${i}.jpg`);

        
    } 
}

auto.addEventListener("click", ()=>{

    autoIcon.classList.toggle('bi-pause-fill');

    if (statut == null) {

        statut = window.setInterval(carrousel, 1500);
        
    } else {

        window.clearInterval(statut);

        statut = null;
        
    }

})

//---------------- loader ----------------------------//


let = document.querySelector('#loader');
window.addEventListener('load', ()=>{
    loader.classList.add('hideloader')
})

