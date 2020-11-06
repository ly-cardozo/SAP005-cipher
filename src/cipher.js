//  Segundo o vídeo do Daniel: ((códigoDaLetraASC - código1letra + deslocamento) %(módulo, que é o giro que vai dar) tamanhoAlfabeto) + código1letra
//                             ((códigoDaLetraASC -      65      + deslocamento) %(módulo, que é o giro que vai dar)      26        ) +      65
//  ["string".charCodeAt(número)] => ["A".charCodeAt(0)=65] essa função serve para saber o código da string em determinada posição. Nesse exemplo, código ASC
//  "string".length => contém o comprimento da string
//  "string".fromCharcode()
//  for (let i=0; i<input.lenght; i++) +> vai "olhar" cada um dos caracteres o elemento
//  originalMsg.charCodeAt(i) - 65 => identifica a letra do alfabeto
//  (positionAlphabet + offsetNumber) % 26) + 65 => 

 

const cipher = {

  encode: function (offsetNumber, originalMsg) {
    originalMsg = originalMsg.replace('Ç', 'C');
    originalMsg = originalMsg.replace('', '');
    const offsetNumberError = !offsetNumber;
    const originalMsgError = !originalMsg
    let enigmaDoNerd = "";

    if (offsetNumberError || originalMsgError) {
      throw new TypeError('User did not enter the data correctly', 'cipher.js', 19);
    } else {
      for (let i=0; i <originalMsg.length; i++) {
        const positionAlphabet = originalMsg.charCodeAt(i) - 65;
        const newAlphabetCharCode = ((positionAlphabet + offsetNumber) % 26) + 65;
        const encryptLetter = String.fromCharCode(newAlphabetCharCode);

        enigmaDoNerd += encryptLetter;
      }
      return enigmaDoNerd;
      console.log(enigmaDoNerd)
    }

  },
  
  decode: function (offsetNumber, originalMsg) {
    let enigmaDoNerd = "";

    if (!offsetNumber || !originalMsg) {
      throw new TypeError('User did not enter the data correctly', 'cipher.js', 19);
    } else {
      for (let i = 0; i < originalMsg.length; i++) {
        const positionAlphabetDecrypt = originalMsg.charCodeAt(i) - 65;
        const newAlphabetCharCode = ((positionAlphabetDecrypt - offsetNumber) % 26) + 65;
        const decryptLetter = String.fromCharCode(newAlphabetCharCode);

        enigmaDoNerd += decryptLetter;
      }
      return enigmaDoNerd;
    }
  }
};

export default cipher;