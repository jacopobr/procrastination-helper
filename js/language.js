/*Dictionaries for italian and English translation*/

var lang = navigator.language || navigator.userLanguage;
const translation = {
    "it": {

        "main_header":"Forza, buttiamo via del tempo prezioso!",
        "sub_header": "Sei nel bel mezzo di una sessione di procrastinazione? <br> Premi il bottone per avere un'idea su come buttare il tuo tempo.",
        "choice_button":"Premi qui"

    },
    "eng": {
        "main_header":"Let's waste some time!",
        "sub_header":"Are you in the middle of a procrastination session? <br> Push the button to get an idea on how to spend your time.",
        "choice_button":"Push me"
    }
}

if (lang == "it-IT" || lang == "it" || lang == "it-it"){
    lang = "it";
} else {
    lang = "eng";
}


document.onreadystatechange = function () {

    if (document.readyState === 'complete') {
        document.getElementById('main-header').innerHTML= translation[lang]["main_header"];
        document.getElementById('sub-header').innerHTML= translation[lang]["sub_header"];
        document.getElementById('choice-button').innerHTML= translation[lang]["choice_button"];
    }
  }
