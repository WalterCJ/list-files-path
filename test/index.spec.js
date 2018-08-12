const path = require('path')
const file = require('../index.js')
const util = require('./util/handleFolders')
var expect = require('chai').expect;

describe('listFilePath', function () {
    let dirname,files
    before(async function() { 
        await util.createFiles()
        dirname = path.join(__dirname, '/util/files_origin')
        files = file.listFilePath(dirname) 
    });
    describe('listFilePath', function () {        
        it('Should throw a error if path does not exist', function () {
            
        })        
        it('Should return a list of files name', function () { 
            expect(files).to.be.a('array');
        })
        it('Should return a list without hidden files', function () {
            expect(files).to.not.include('.files0')
        })
        it('Should return a list without folders', function () {
            expect(files).to.be.an('array').to.not.include('.test')
            expect(files).to.be.an('array').to.not.include('test2')
        })
    })
    after(function(done) {
        util.removeFolders()
        done()
    });
})