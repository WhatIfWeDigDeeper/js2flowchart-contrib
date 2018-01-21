const app = require('../');
const request = require('supertest').agent(app.listen);

describe('site', () => {
  it('should have welcome msg', (done) => {
    request
      .get('/')
      .expect('Koa says hi')
      .end(done);
  });
});
