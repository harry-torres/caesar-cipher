import FormData from 'form-data';
import api from '../services/api';
import Cipher from '../models/Cipher';

class CipherController {
  async index(_, res) {
    const cipher = await Cipher.load();
    cipher.saveToFile();
    cipher.decode();
    cipher.saveToFile();
    cipher.hash();
    cipher.saveToFile();

    const form = new FormData();

    form.append('answer', cipher.getFileStream(), {
      filename: 'answer.json',
    });

    const { data } = await api.post('submit-solution', form, {
      params: { token: process.env.TOKEN },
      headers: form.getHeaders(),
    });

    return res.json(data);
  }
}

export default new CipherController();
