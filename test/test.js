const request = require('supertest');
const app = require('../index'); // assuming your main file is index.js

describe('Post /tasks', () => {
  it('responds with status 200 and contains "Hello World!"', async () => {
    const response = await request(app).get('/');
    const { expect } = await import('chai');
    expect(response.status).to.equal(200);
    expect(response.text).to.contain(' World!');
  });
});
