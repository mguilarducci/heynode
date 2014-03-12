var should = require('should')
var app = require('../server.js')

describe('app', function() {
    it('should exist', function(done) {
        should.exist(app)
        done()
    })
})
