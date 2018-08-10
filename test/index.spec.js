const path = require('path')
const file = require('../index.js')
const util = require('./util/handleFolders')
var expect = require('chai').expect;

describe('listFilePath', function () {
    before(function(done) { 
        util.createFiles()
        done()
    });
    describe('listFilePath', function () {
        const dirname = path.join(__dirname, '/util/files_origin')        
        it('Should return a list of files name', function () {
            const files = file.listFilePath(dirname)       
            expect(files).to.be.a('array');
        })
        it('Should return a list without hidden files', function () {
            const files = file.listFilePath(dirname)
            expect(files).to.not.include('.files0')
        })
        it('Should return a list without folders', function () {
            const files = file.listFilePath(dirname)
            expect(files).to.be.an('array').to.not.include('.test')
            expect(files).to.be.an('array').to.not.include('test2')
        })
    })
    after(function(done) {
        util.removeFolders()
        done()
    });
})