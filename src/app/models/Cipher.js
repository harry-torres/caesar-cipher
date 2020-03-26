import api from '../services/api';
import axios from 'axios';
import path from 'path';
import fs from 'fs';
import * as encoder from '../utils/encoder';
import crypto from 'crypto';
//'./tmp/answer.json'
const filePath = path.join(__dirname,'..','..','..','tmp','answer.json');

class Cipher {
  
  async load(){
    try{
      const {data} = await api
        .get('generate-data', {
          params: {token: process.env.TOKEN}
        });
      Object.assign(this, data);
      return this;
    } catch(e){

    }
  }

  saveToFile(){
    const data = JSON.stringify(this,null,2);
    fs.writeFileSync(filePath, data);
  }

  getFileStream(){
    return fs.createReadStream(filePath);
  }

  encode(){
    this.cifrado = 
      this.decifrado
        .toLowerCase()
        .replace(/[a-z]/g, char => encoder.getEncodedChar(char,this.numero_casas));
  }

  hash(){
    this.resumo_criptografico = 
      crypto.createHash("sha1").update(this.decifrado, "binary").digest("hex");
  }

  decode(){
    this.decifrado = 
      this.cifrado
        .toLowerCase()
        .replace(/[a-z]/g, char => encoder.getDecodedChar(char,this.numero_casas));  
  }
}

export default new Cipher();