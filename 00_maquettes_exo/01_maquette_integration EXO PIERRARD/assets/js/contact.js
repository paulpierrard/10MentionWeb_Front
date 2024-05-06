let form = document.querySelector("#form");
let email = document.querySelector("#email");
let sujet = document.querySelector("#subject");
let votreMessage = document.querySelector("#message");
let allSmall = form.querySelectorAll("small");
let myAlert = document.querySelector('#alert');
let message = "";

function setError(element, infos = null){

    let formControl = element.parentElement;
    let small = formControl.querySelector('small');

    small.innerText = infos;
    formControl.className = "form-control error";

}

function setSuccess(element){

    let formControl = element.parentElement;
     formControl.className = "form-control success";

}

function setValidation(element, infos) {

    let formControl = element.parentElement;
    let small = formControl.querySelector('small');

    if (infos != null) {
        small.innerText = infos;
        formControl.className = "form-control error";
    } else {
        formControl.className = "form-control success";
    }


}

form.addEventListener('submit', (event)=> {

    event.preventDefault()
    
    let emailValue = email.value.trim();
    let sujetValue = sujet.value.trim();
    let messageValue = votreMessage.value.trim();
    let totalForm = document.querySelectorAll(".form-control");
    let donnee = [emailValue , sujetValue, messageValue];
    let regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,6}$/;
    let regexSujet = /^[a-zA-Z]/;
    let regexMessage = /^(?=.*[a-zA-Z0-9]).{20,200}$/
    ;

    /* condition principal */

    if (donnee.includes("")) {

         myAlert.innerHTML = '<p class="alert alert-danger" role="alert">Veuillez renseigner tout les champs</p>';
    

         for (let form of totalForm ) {

           form.classList.add("error");
           
           
         }

         for (let sml of allSmall) {

           sml.style.visibility = "hidden"; 
           
         }
    
    } else {
          
        myAlert.innerHTML = "";

        // la condition du mail
   
        if (!regexEmail.test(emailValue)) {

            message = 'Email n\est pas valide';
            setValidation(email, message) ;
             
        } else {

            setValidation(email);

        }

        // la condition du suject
  
  
        if(!regexSujet.test(sujetValue)) {

             message = 'Le mot de passe n\'est pas valide';  
             setValidation(sujet, message) ;

        } else {

             setValidation(sujet);
        }

        // la condition du message
      
        if(!regexMessage.test(messageValue)){

             message = 'La confirmation du mot de passe ne correspondent pas  ';  
             setValidation(votreMessage, message) ;

        } else {

             setValidation(votreMessage);
    
        }

    }

    // dernière condition

    if (myAlert.innerHTML == "" && message == "") {

           myAlert.innerHTML = '<p>Bravo vous êtes sur internet</p>';
           
    }
       
})