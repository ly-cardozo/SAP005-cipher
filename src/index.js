import cipher from './cipher.js';

console.log(cipher);

//Alguns métodos de acesso DOM => são formas do JS entender ao quê estamos referenciando. Tudo o que tenha document se refere ao arquivo html
//  => addEventListener() => ligar um evento de um objeto a uma função
//  => innerHTML() => troca o conteúdo de um elemento: [document.body.innerHTML = "";] (troca o conteúdo de body por uma string vazia)
//  => toUpperCase() => retorna valor da string original convertida em maiúscula

//Criei uma constante e chamei cada um dos meus id do arquivo index.html
//Aqui eu poderia usar o getElementById(id) porque usei uma id para meus textos
//mas preferi usar o querySelector(cssSelector) por ser mais rápido. Posso usar ('#') para id e ('.') para class
//Exemplo da outra forma: const originalMsg = document.getElementById('original-Msg');
const originalMsg = document.querySelector('#original-Msg');
const offsetNumber = document.querySelector('#offset-Number');
const encryptButton = document.querySelector('#encrypt-Button');
const decryptButton = document.querySelector('#decrypt-Button');
const cleartButton = document.querySelector('#clear-Button');
const translatedMsg = document.querySelector('#translated-Msg');


encryptButton.addEventListener('click', function () {
    const textOriginal = string(originalMsg.value).toUpperCase();
    const offset = Number(offsetNumber.value);
    const encryptMsg = cipher.encode(offset, textOriginal);
    translatedMsg.value = encryptMsg;
})

decryptButton.addEventListener('click', function () {
    const textOriginal = string(originalMsg.value).toUpperCase();
    const offset = Number(offsetNumber.value);
    const decryptMsg = cipher.encode(offset, textOriginal);
    translatedMsg.value = decryptMsg;
})

cleartButton.addEventListener('click', function () {
    originalMsg.value = '';
    offsetNumber.value = '';
    translatedMsg.value = '';
})
