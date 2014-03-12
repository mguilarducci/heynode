app.get('/payables', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify({'collection' : []}))
    res.end()
});
