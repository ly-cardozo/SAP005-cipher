import cipher from './cipher.js';

const takeOriginalMsg = document.querySelector('#original-Msg');
const takeOffsetNumber = document.querySelector('#offset-Number');
const takeTranslatedMsg = document.querySelector('#translated-Msg');
const encryptButton = document.querySelector('#encrypt-Button');
const decryptButton = document.querySelector('#decrypt-Button');
const cleartButton = document.querySelector('#clear-Button');

encryptButton.addEventListener('click', function () {
    const originalMsg = string(takeOriginalMsg.value).toUpperCase();
    const offsetNumber = Number(takeOffsetNumber.value);
    const encryptMsg = cipher.encode(offsetNumber, originalMsg);
    takeTranslatedMsg.value = encryptMsg;
    //translatedMsg.innerHTML = encryptMsg; => posso fazer dessa forma também
})

decryptButton.addEventListener('click', function () {
    const originalMsg = string(takeOriginalMsg.value).toUpperCase();
    const offsetNumber = Number(takeOffsetNumber.value);
    const decryptMsg = cipher.encode(offsetNumber, originalMsg);
    takeTranslatedMsg.value = decryptMsg;
})

cleartButton.addEventListener('click', function () {
    originalMsg.value = '';
    offsetNumber.value = '';
    takeTranslatedMsg.value = '';
})

//Alguns métodos de acesso DOM => são formas do JS entender ao quê estamos referenciando. Tudo o que tenha document se refere ao arquivo html
//  => element.addEventListener() => ligar um evento de um objeto a uma função
//  => element.innerHTML() => troca o conteúdo de um elemento: [document.body.innerHTML = "";] (troca o conteúdo de body por uma string vazia)
//  => string.toUpperCase() => retorna valor da string original convertida em maiúscula

//Criei uma constante e chamei cada um dos meus id do arquivo index.html
//Aqui eu poderia usar o getElementById(id) porque usei uma id para meus textos
//mas preferi usar o querySelector(cssSelector) por ser mais rápido. Posso usar ('#') para id e ('.') para class
//Exemplo da outra forma: const originalMsg = document.getElementById('original-Msg');