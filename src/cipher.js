//  Segundo o vídeo do Daniel: ((códigoDaLetraASC - código1letra + deslocamento) %(módulo, que é o giro que vai dar) tamanhoAlfabeto) + código1letra
//                             ((códigoDaLetraASC -      65      + deslocamento) %(módulo, que é o giro que vai dar)      26        ) +      65
//  ["string".charCodeAt(número)] => ["A".charCodeAt(0)=65] essa função serve para saber o código da string em determinada posição. Nesse exemplo, código ASC
//  Alguns métodos de acesso DOM => são formas do JS entender ao quê estamos referenciando. Tudo o que tenha document se refere ao arquivo html [ATENÇÃO COLOCAR ISSO NO ARQUIVO INDEX.JS]
//    getElementById(id) => [document.getElementById]
//    getElementsByClassName(className)
//    getElementsByTagName(tagName)
//    querySelector(cssSelector)               
//    querySelectorAll(cssSelector)
//    addEventListener => ligar um evento de um objeto a uma função
//    innerHTML => troca o conteúdo de um elemento: [document.body.innerHTML = "";] (troca o conteúdo de body por uma string vazia)

const cipher = {
  encode(offset, originalMsg) {
    offset = offset % 26;
    originalMsg = originalMsg.toUpperCase()

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let key = alphabet.charAt(offset);
    let splitAlphabet = alphabet.split(key);

    let newAlphabet = key + splitAlphabet[1] + splitAlphabet [0]
    let newMsg = '';
    for(let i=0; i < originalMsg.lenght; i++){
      if(originalMsg.charAt(i) == ''){
        newMsg+= '';
    }else if(originalMsg.charAt(i) == ','){
      newMsg+= ',';
    }
      else{
        let number = alphabet.indexOf(originalMsg.charAt(i));
        newMsg += newAlphabet[number];
      }
  }
  return newMsg;
}

export default cipher;
