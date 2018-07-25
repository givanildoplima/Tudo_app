module.exports = function(req, res, next){
    res.reader('Access-Control-Allow-Origin', '*')
    res.reader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELET')
    res.reader('Access-Control-Allow-Headers', 'Origin, X-Requested, Content-Type, Accept')
    next()
}