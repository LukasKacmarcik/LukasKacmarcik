const { expect } = require('chai');
const request = require('supertest');
const app = require('../app.js');

describe('testing app endpoints', () => {
  it('testing /rocket/fill endpoint', () => {
    request(app)
      .get('/rocket/fill?caliber=.25&amount=12500')
      .end((err, res) => {
        if (err) throw err;
        expect(res.body.received).eql('.25');
        expect(res.body.amount).eql(12500);
        expect(res.body.shipstatus).eql('full');
        expect(res.body.ready).eql(true);
      })
  });

  it('should return empty if ammo is 0', () => {
    request(app)
      .get('/rocket/fill?caliber=.25&amount=0')
      .end((err, res) => {
        if (err) throw err;
        expect(res.body.amount).eql(0);
      })
  });
});