import 'dotenv/config';
import FormData from 'form-data';
import api from './app/services/api';
import Cipher from './app/models/Cipher';

async function main() {
  const cipher = await Cipher.load();
  cipher.saveToFile();
  cipher.decode();
  cipher.saveToFile();
  cipher.hash();
  cipher.saveToFile();

  const form = new FormData();

  form.append('answer', cipher.getFileStream(), {
    filename: 'answer.json'
  });

  const response = await api.post('submit-solution', form, {
    params: { token: process.env.TOKEN },
    headers: form.getHeaders()
  });

  console.log(response);
}

main();

/*
import api from './app/services/api';
import assert from 'assert';
import {getEncodedChar} from './app/utils/encoder';

const text = "a ligeira raposa marrom saltou sobre o cachorro cansadoz";
const numero_casas = 3;

// test
  console.time('res');
  const encoded = 
  text
    .toLowerCase()
    .replace(/[a-z]/g, char => getEncodedChar(char,numero_casas));
  console.timeEnd('res');
  console.log(encoded);
  assert(encoded === "d oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgrc");

*/

// function encode(charCode) {
//   // todo: verificar numero_casas > lastCharCode

//   const encodedCharCode =  charCode + numero_casas <= lastCharCode ?
//     charCode + numero_casas : charCode + numero_casas - firstCharCode;
//     console.log(charCode, encodedCharCode);
//     return String.fromCharCode(encodedCharCode);
// }
