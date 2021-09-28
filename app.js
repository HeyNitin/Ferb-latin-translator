var btnTranslate = document.querySelector("#btn")
var textInput = document.querySelector("#txt-input")
var outputdisplay = document.querySelector("#output")


var url = "https://api.funtranslations.com/translate/ferb-latin.json"


function getTranslatURL(input){

    return url + "?text=" + input

}

function errorHandler(error){

    console.log("Error", error);
    alert("Something went wrong")

}

function clickHandler(){

    var inputText = textInput.value;

    fetch(getTranslatURL(inputText))
    .then(response => response.json())
    .then(json => {

        var translatedText = json.contents.translated;
        outputdisplay.innerText = translatedText;


    }
    )

    .catch(errorHandler)

}



btnTranslate.addEventListener("click", clickHandler);