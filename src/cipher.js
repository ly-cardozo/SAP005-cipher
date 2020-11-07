const cipher = {

  encode: function (offsetNumber, originalMsg) {
    originalMsg = originalMsg.replace('Ç', 'C');
    let enigmaDoNerd = "";

    if (!offsetNumber || !originalMsg) {
      throw new TypeError('User did not enter the data correctly', 'cipher.js', 8);
    } else {
      for (let i=0; i <originalMsg.length; i++) {
        const positionAlphabet = originalMsg.charCodeAt(i) - 65;
        const newAlphabetCharCode = ((positionAlphabet + offsetNumber) % 26) + 65;
        const encryptLetter = String.fromCharCode(newAlphabetCharCode);

        enigmaDoNerd += encryptLetter;
      }
      return enigmaDoNerd;
    }

  },
  
  decode: function (offsetNumber, originalMsg) {
    let enigmaDoNerd = "";

    if (!offsetNumber || !originalMsg) {
      throw new TypeError('User did not enter the data correctly', 'cipher.js', 8);
    } else {
      for (let i = 0; i < originalMsg.length; i++) {
        const positionAlphabetDecrypt = originalMsg.charCodeAt(i) + 65;
        const newAlphabetCharCode = ((positionAlphabetDecrypt - offsetNumber) % 26) + 65;
        const decryptLetter = String.fromCharCode(newAlphabetCharCode);

        enigmaDoNerd += decryptLetter;
      }
      return enigmaDoNerd;
    }
  }
};

export default cipher;

//  Segundo o vídeo do Daniel: ((códigoDaLetraASC - código1letra + deslocamento) %(módulo, que é o giro que vai dar) tamanhoAlfabeto) + código1letra
//                             ((códigoDaLetraASC -      65      + deslocamento) %(módulo, que é o giro que vai dar)      26        ) +      65 [Criptar]
//                             ((códigoDaLetraASC -      65      + deslocamento) %(módulo, que é o giro que vai dar)      26        ) +      65 [Criptar]
//  ["string".charCodeAt(número)] => ["A".charCodeAt(0)=65] essa função serve para saber o código da string em determinada posição. Nesse exemplo, código ASC
//  "string".length => contém o comprimento da string
//  "string".charCodeAt() => passa de código  ASCII para 0 a 25
//  string".fromCharCode() => pega esse código de 0 a 25 e retorna para ASCII 
//  "string".replace => permite substituir uma sequência de caracteres por outro, no caso, substitui o Ç por C
//  for (let i=0; i<input.lenght; i++) +> vai "olhar" cada um dos caracteres o elemento
//  originalMsg.charCodeAt(i) - 65 => identifica a letra do alfabeto