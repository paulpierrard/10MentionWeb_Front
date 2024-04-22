let = document.querySelector('#loader');
window.addEventListener('load', ()=>{
    loader.classList.add('hideloader');
})


let icon1 = document.querySelector(".fa-question");
let text1 = document.querySelector(".mdp p");

icon1.addEventListener("click", ()=>{

    text1.classList.toggle("formule");
    

})

// affichage du mot de passe

let afficheMdp = document.querySelector('.fa-eye-slash');
let password = document.querySelector('#password')
afficheMdp.addEventListener('click', ()=>{

    switch (password.type) {
        case "password":
                password.setAttribute('type', 'text');
                afficheMdp.classList.replace("fa-eye-slash", "fa-eye");
            break;
            case "text":
                password.setAttribute('type', 'password');
                afficheMdp.classList.replace("fa-eye", "fa-eye-slash");
            break;
    }



})

// Validation du formulaire

let form = document.querySelector('form');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password2 = document.querySelector('#password2');

form.addEventListener('submit', (event)=>{

    event.preventDefault(); //Une méthode utilisée dans les événements JavaScript pour empêcher le comportement par défaut associé à un évenement de se produire.
    formVerif();

})

function formVerif(){
    // trim retir les espaces blanc au debut et a la fin des caractères 
    let userValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let password2 = password2.value.trim();

    console.log(userValue.length);
    if (userValue.length < 2) {

        console.log("ok");
        
    } else {

        console.log(userValue.length);

    }

}
