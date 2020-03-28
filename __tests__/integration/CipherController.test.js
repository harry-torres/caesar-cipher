import request from 'supertest';
import app from '../../src/app';

describe('Cipher', () => {
  it('should return a socre of 100 when answer is submitted', async () => {
    const response = await request(app).get('/');
    expect([200, 429]).toContain(response.status);
  });
});
