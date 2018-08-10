const fs = require('fs')
const path = require('path')
var rimraf = require('rimraf')
const dirnameOrigin = path.join(__dirname, 'files_origin')
const dirnameDestination = path.join(__dirname, 'files_destination')


function createFiles(){ 
    fs.mkdirSync(dirnameOrigin)
    fs.mkdirSync(dirnameDestination)
    const fiveDays = 24*60*60*1000*5
    
    for(let i=0; i< 10;i++) {
        let filePath 
        if(i==0){
            filePath = path.join(dirnameOrigin, `.files${i}`)
        }else{
            filePath = path.join(dirnameOrigin, `files${i}`)
        }
        fs.writeFile(filePath,i, (error) => {
            if(error) throw error;
    
            const time = (Date.now() - i*fiveDays)/1000
            fs.utimes(filePath,time,time,(error) => {
                if(error) throw error
            })
        })
    }
}

function removeFolders(){
    rimraf(dirnameOrigin, function () {});
    rimraf(dirnameDestination, function () {});
}

module.exports = {
    createFiles,
    removeFolders
};
