import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import * as encoder from '../utils/encoder';
import api from '../services/api';

const filePath = path.join(__dirname, '..', '..', '..', 'tmp', 'answer.json');

class Cipher {
  async load() {
    const { data } = await api.get('generate-data', {
      params: { token: process.env.TOKEN },
    });
    Object.assign(this, data);
    return this;
  }

  saveToFile() {
    const data = JSON.stringify(this, null, 2);
    fs.writeFileSync(filePath, data);
  }

  getFileStream() {
    return fs.createReadStream(filePath);
  }

  encode() {
    this.cifrado = encoder.encode(this.decifrado, this.numero_casas);
  }

  hash() {
    this.resumo_criptografico = crypto
      .createHash('sha1')
      .update(this.decifrado, 'binary')
      .digest('hex');
  }

  decode() {
    this.decifrado = encoder.decode(this.cifrado, this.numero_casas);
  }
}

export default new Cipher();
