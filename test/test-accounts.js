var should = require('should'),
    request = require('supertest')

describe('Payables', function() {
    describe('Listing payables', function() {
        it('GET /payables should return status code 200', function(done) {
            request(app).get('/payables').expect(200, done)
        })

        it('GET /payables respond with json', function(done) {
            request(app).get('/payables').expect('Content-Type', /json/, done)
        })

        it('GET /payables should return a "collection" property', function(done) {
            request(app).get('/payables').expect(hasCollectionKey).end(done)
        })
    })
})

function hasCollectionKey(res) {
    if (!('collection' in res.body))
        return "missing collection key";
}