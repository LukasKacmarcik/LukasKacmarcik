const { expect } = require('chai');
const request = require('supertest');
const app = require('../app.js');

describe('/yondu   endpoint testing', () => {
  it('with correct input everithing shoud be ok', () => {
    request(app)
      .get('/yondu?distance=10&time=2')
      .end((err, res) => {
        if (err) throw err;
        expect(res.status).eql(200);
        expect(res.body).eql({ distance: '10', time: '2', speed: 5 });
      })
  })

  it('with no input everithing shoud be bad', () => {
    request(app)
      .get('/yondu')
      .end((err, res) => {

        expect(res.status).eql(400);
        expect(res.body).to.have.property('error');
        expect(res.body.error).eql('Define distance and time');
      })
  })
});