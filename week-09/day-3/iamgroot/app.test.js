'use strict';

const request = require('supertest');
const app = require('./app');

describe('groot endpoint', () => {
  // TODO: implement it
  test('With right input status and response should be ok', (done) => {
    request(app)
      .get('/groot?message=Halooo')
      .end((err, res) => {
        expect(err).toBeNull();
        expect(res.status).toBe(200);
        expect(res.body.received).toBe("Halooo");
        expect(res.body.translated).toBe("I am Groot!");
        done();
      })
  });

  test('With right input status and response should be ok (async)', async () => {
    let res = await request(app)
      .get('/groot?message=Halooo')

    expect(res.status).toBe(200);
    expect(res.body.received).toBe("Halooo");
    expect(res.body.translated).toBe("I am Groot!");
  })


  test('If qs dosent contain message shoud send err', (done) => {
    request(app)
      .get('/groot')
      .end((err, res) => {
        expect(res.status).toBe(404);
        expect(res.body).toHaveProperty('error');
        done();
      })
  })

  test('If qs dosent contain message shoud send err (async)', async () => {
    let res = await request(app)
      .get('/groot')

    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('error');
    expect(res.body).toHaveProperty('error');
  })
});