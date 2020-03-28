const charset = Array.from('abcdefghijklmnopqrstuvwxyz');
const charsetSize = charset.length;

function getEncodedCharCode(charCode, secret) {
  return charCode + secret < charsetSize
    ? charCode + secret
    : getEncodedCharCode(charCode, secret - charsetSize);
}

function getEncodedChar(char, secret) {
  const charCode = charset.indexOf(char);
  const encodedCharCode = getEncodedCharCode(charCode, secret);
  return charset[encodedCharCode];
}

function getDecodedCharCode(charCode, secret) {
  return charCode - secret >= 0
    ? charCode - secret
    : getDecodedCharCode(charCode, secret - charsetSize);
}

function getDecodedChar(char, secret) {
  const charCode = charset.indexOf(char);
  const decodedCharCode = getDecodedCharCode(charCode, secret);
  return charset[decodedCharCode];
}

function process(text, secret, func) {
  const processedText = text
    .toLowerCase()
    .replace(/[a-z]/g, (char) => func(char, secret));
  return processedText;
}
export function encode(decifrado, numero_casas) {
  return process(decifrado, numero_casas, getEncodedChar);
}

export function decode(cifrado, numero_casas) {
  return process(cifrado, numero_casas, getDecodedChar);
}
