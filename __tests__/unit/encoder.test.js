import * as encoder from '../../src/app/utils/encoder';

describe('Encode', () => {
  it('should decode an encoded message', async () => {
    const encoded = 'd oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgrc';
    const numeroCasas = 3;
    const decoded = encoder.decode(encoded, numeroCasas);
    expect(decoded).toBe(
      'a ligeira raposa marrom saltou sobre o cachorro cansadoz'
    );
  });
  it('should encode a decoded message', async () => {
    const decoded = 'a ligeira raposa marrom saltou sobre o cachorro cansadoz';
    const numeroCasas = 3;
    const encoded = encoder.encode(decoded, numeroCasas);
    expect(encoded).toBe(
      'd oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgrc'
    );
  });
});
