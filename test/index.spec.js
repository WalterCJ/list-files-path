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
            expect(files[0].startsWith('.')).to.be.false 
        })
    })
    after(function(done) {
        util.removeFolders()
        done()
    });
})