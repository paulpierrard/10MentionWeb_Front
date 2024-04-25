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
let message = "";

form.addEventListener('submit', (event)=>{

    event.preventDefault(); //Une méthode utilisée dans les événements JavaScript pour empêcher le comportement par défaut associé à un évenement de se produire.
    formVerif();

})

function formVerif(){
    // trim retir les espaces blanc au debut et a la fin des caractères 
    let userValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();

    // console.log(userValue.length);
    // if (userValue.length < 2) {

    //     console.log("ok");
        
    // } else {

    //     console.log(userValue.length);

    // }


    //user name verify

    if (userValue == "") {// verifie si le champ username est vide 

        message = 'username ne peut pas être vide';
        setError(username, message);
        
    }
    if (emailValue == "") {// verifie si le champ username est vide 

        message = 'email ne peut pas être vide';
        setError(email, message);
        
    }
    if (passwordValue == "") {// verifie si le champ username est vide 

        message = 'password ne peut pas être vide';
        setError(password, message);
        
    }
    if (password2Value == "") {// verifie si le champ username est vide 

        message = 'password confirm ne peut pas être vide';
        setError(password2, message);
        
    }

}
function setError(element, infos) {

    let formControl = element.parentElement; /* La propriété `parentElement` renvoie l'élément parent de l'élément
    spécifié dans le DOM (Document Object Model). Dans l'extrait de code
    fourni, « element.parentElement » est utilisé pour accéder à l'élément
    parent de « element » qui contient le message d'erreur. Ceci est
    couramment utilisé pour parcourir la hiérarchie DOM et manipuler des
    éléments en fonction de leurs éléments parents. */
    let small = formControl.querySelector('small');
    small.innerText = infos;
    
}

