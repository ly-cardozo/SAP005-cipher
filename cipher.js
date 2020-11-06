//  Segundo o vídeo do Daniel: ((códigoDaLetraASC - código1letra + deslocamento) %(módulo, que é o giro que vai dar) tamanhoAlfabeto) + código1letra
//                             ((códigoDaLetraASC -      65      + deslocamento) %(módulo, que é o giro que vai dar)      26        ) +      65
//  ["string".charCodeAt(número)] => ["A".charCodeAt(0)=65] essa função serve para saber o código da string em determinada posição. Nesse exemplo, código ASC
//  "string".length => contém o comprimento da string
//  "string".fromCharcode()
//  for (let i=0; i<input.lenght; i++) +> vai "olhar" cada um dos caracteres o elemento

 

const cipher = {

  encode: function (offsetNumber, originalMsg) {
    originalMsg = originalMsg.replace('Ç', 'C')
    let enigmaDoNerd = "";

    if (!offsetNumber || !originalMsg) {
      throw new TypeError('User did not enter the data correctly', 'cipher.js', 15);
    } else {
      for (let i=0; i <originalMsg.length; i++) {
        const positionAlphabet = originalMsg.charCodeAt(i) - 65;
        const newAlphabetCharcode = ((positionAlphabet + offsetNumber) % 26) + 65;
        const encryptLetter = String.fromCharCode(newAlphabetCharcode);

        enigmaDoNerd += encryptLetter;
      }
      return enigmaDoNerd;
    }
  },
  
  decode: function (offsetNumber, originalMsg) {
    let enigmaDoNerd = "";

    if (!offsetNumber || !originalMsg) {
      throw new TypeError('User did not enter the data correctly', 'cipher.js', 15);
    } else {
      for (let i = 0; i < originalMsg.length; i++) {
        const positionAlphabet = originalMsg.charCodeAt(i) + 65;
        const newAlphabetCharcode = ((positionAlphabet + offsetNumber) % 26) + 65;
        const encryptLetter = String.fromCharCode(newAlphabetCharcode);

        enigmaDoNerd += encryptLetter;
      }
      return enigmaDoNerd;
    }
  }
};

export default cipher;