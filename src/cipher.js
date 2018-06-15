window.cipher = {
encode : (text, key) => {
    let asciiToLetter;
    let i = 0;
    for (i; i < text.length; i++) {
        let  ascii = text.charCodeAt(i);
        if (ascii >= 65 && ascii <=90){
            let formula = ((ascii - 65 + key)%26 + 65);
            resultEncrypt[i] = formula;
            console.log(formula);
            } else if (ascii >= 97 && ascii <= 122) {
                let formulaDos = ((ascii - 97 + key)%26 + 97);             
                resultEncrypt[i] = formulaDos;
            } else {
                let formulaAscii = ascii;
                resultEncrypt[i] = formulaAscii;
            }
            console.log(resultEncrypt);
        }
    let iTwo = 0;
    for (iTwo; iTwo < resultEncrypt.length; iTwo++){
        asciiToLetter = String.fromCharCode(resultEncrypt[iTwo]); 
        resultEncrypt[iTwo] = asciiToLetter; 
    }
    return resultEncrypt;
},

decode : (resultEncrypt, key) => { 
    let iThree = 0;
    for (iThree; iThree < resultEncrypt.length; iThree++) {
        let asciiDos = resultEncrypt[iThree].charCodeAt();
        if (asciiDos <= 91 && asciiDos >= 61) {
            let formulaTres = (((asciiDos + 65) - key)%26 + 65);
            resultDecrypt[iThree] = formulaTres;
            } else if (asciiDos <= 122 && asciiDos >= 95) {
                let formulaCuatro = (((asciiDos - 122) - key)%26 + 122);
                resultDecrypt[iThree] = formulaCuatro;
            } else {
               let formulaAsciiDos = asciiDos;
               resultDecrypt[iThree] = formulaAsciiDos;
            }
        }
            console.log(resultDecrypt);
            for (let iFour = 0; iFour < resultDecrypt.length; iFour++){
                let asciiToLetterTwo = String.fromCharCode(resultDecrypt[iFour]);
                resultDecrypt[iFour] = asciiToLetterTwo;
            }
        return resultDecrypt;
}
}
