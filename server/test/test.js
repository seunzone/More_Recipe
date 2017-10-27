import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app';

const { expect } = chai;

chai.use(chaiHttp);

describe('Test API', () => {

  describe('GET /', () => {
    // Test for index route
    it('Should return 200', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
    // Test for undefined routes
    it('Undefined Routes Should Return 404', (done) => {
      chai.request(app)
        .post('/another/undefined/route')
        .send({ random: 'random' })
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });
  describe('POST recipe', () => {
    it('Should return 400 for post without recipe name', (done) => {
      chai.request(app)
        .post('/api/v1/recipes')
        .send({
          id: 6,
          userId: 12,
          ingredients: ['something'],
          description: 'description',
          downVote: 6,
          upVote: 12
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        });
    });
  });
  describe('API to Get all recipes', () => {
    it('Should return 200', (done) => {
      chai.request(app)
        .get('/api/v1/recipes')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
    it('Should return an object', (done) => {
      chai.request(app)
        .get('/api/v1/recipes')
        .end((err, res) => {
          expect(res.body).to.have.property('status').equal('success');
          done();
        });
    });
  });
  describe('API to update recipe', () => {
    it('Should return 200 if successful', (done) => {
      chai.request(app)
        .put('/api/v1/recipes/1')
        .send({
          name: 'Some Name',
          ingredients: 'Ingridients of some sort',
          description: 'Quickly describe'
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.have.property('status').equal('success');
          done();
        });
    });
  });
  describe('Test for review', () => {
    it('Should return 201 if successful', (done) => {
      chai.request(app)
        .post('/api/v1/recipes/1/review')
        .send({
          reviewer: 6,
          content: 'Just a test content',
          recipe: 3
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          done();
        });
    });
    it('Should return 400 if empty parameters', (done) => {
      chai.request(app)
        .post('/api/v1/recipes/1/review')
        .send({
          content: 'Just a test content',
          recipe: 3
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        });
    });
  });
  describe('API delete recipe', () => {
    it('Should return 200 for succesful delete request ', (done) => {
      chai.request(app)
        .delete('/api/v1/recipes/3')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
    it('Should return 404 if parameter is not found', (done) => {
      chai.request(app)
        .delete('/api/v1/recipes/200')
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });
});
