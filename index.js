const fs = require ('fs')
const path = require('path')

/**
 * List all files in this path.
 * @param {string} originPath - Path to directory origin
 * @returns {string[]} A list of files from originPath
 */
const listFilePath = function(originPath){
    //Check if path exist
    if (!fs.existsSync(originPath)){
        throw new Error(originPath +' does not exist!')       
    } 
    return fs.readdirSync(originPath)
            .filter(file => {
                    const stats = fs.statSync(path.join(originPath, file))            
                    return ( !isUnixHiddenPath(file) && stats.isFile() )
                })
}

/**
 * Checks whether a path starts with or contains a hidden file or a folder.
 * @param {string} path - The path of the file that needs to be validated.
 * @returns {boolean} - `true` if the source is blacklisted and otherwise `false`.
 */
const isUnixHiddenPath = function (path) {
    return (/(^|\/)\.[^\/\.]/g).test(path)
}

module.exports = {listFilePath}