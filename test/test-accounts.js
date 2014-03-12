var should = require('should'),
    request = require('supertest')

describe('Payables', function() {
    describe('Listing payables', function() {
        it('GET /payables should return status code 200', function(done) {
            request(app)
                .get('/payables')
                .expect(200, done)
        })
    })
})