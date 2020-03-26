const charset = Array.from('abcdefghijklmnopqrstuvwxyz');
const charsetSize = charset.length;

function getEncodedCharCode(charCode, secret) {
  return charCode + secret < charsetSize
    ? charCode + secret
    : getEncodedCharCode(charCode, secret - charsetSize);
}

export function getEncodedChar(char, secret) {
  const charCode = charset.indexOf(char);
  const encodedCharCode = getEncodedCharCode(charCode, secret);
  return charset[encodedCharCode];
}

function getDecodedCharCode(charCode, secret) {
  return charCode - secret >= 0
    ? charCode - secret
    : getDecodedCharCode(charCode, secret - charsetSize);
}

export function getDecodedChar(char, secret) {
  const charCode = charset.indexOf(char);
  const decodedCharCode = getDecodedCharCode(charCode, secret);
  return charset[decodedCharCode];
}

// const assert = require('assert');
// // test
// const encoded = 'd oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgrc';
// const numeroCasas = 3;
// const decoded = encoded
//   .toLowerCase()
//   .replace(/[a-z]/g, char => getDecodedChar(char, numeroCasas));
// assert(decoded === 'a ligeira raposa marrom saltou sobre o cachorro cansadoz');
// console.log(decoded);
// const lastCharCode = "z".charCodeAt();  // 122
// const firstCharCode = "a".charCodeAt(); //  97
// const charsetSize = lastCharCode - firstCharCode + 1;

// function getEncodedCharCode(charCode, secret) {
//   return  charCode + secret <= lastCharCode ?
//     charCode + secret :
//     getEncodedCharCode(charCode, secret - charsetSize);
// }

// export function getEncodedChar(char, secret) {
//   // todo: verificar numero_casas > lastCharCode
//   const charCode = char.charCodeAt(0);
//   const encodedCharCode = getEncodedCharCode(charCode, secret);
//   return String.fromCharCode(encodedCharCode);
// }

// const lastCharCode = "z".charCodeAt();  // 122
// const firstCharCode = "a".charCodeAt(); //  97
// const charsetSize = lastCharCode - firstCharCode + 1;

// function getEncodedCharCode(charCode, secret = numero_casas) {
//   return  charCode + secret <= lastCharCode ?
//     charCode + secret :
//     getEncodedCharCode(charCode, secret - resetCharCode);
// }

// export function getEncodedChar(char) {
//   // todo: verificar numero_casas > lastCharCode
//   const charCode = char.charCodeAt(0);
//   const encodedCharCode = getEncodedCharCode(charCode);
//   console.log(charCode, encodedCharCode);
//   return String.fromCharCode(encodedCharCode);
// }
