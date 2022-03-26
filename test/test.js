let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

// Nossa suite de teste relacionada a artigos
describe('Carros', () => {
  
  describe('/GET Carros', () => {
        it('Testando GET todos os Carros', (done) => {
            chai.request('http://localhost:3000')
                .get('/api/carros')
                .end((err, res) => {
                    res.should.have.status(200);
                    //res.body.should.be.a('json');
                  done();
                });
        });
    });

  
})