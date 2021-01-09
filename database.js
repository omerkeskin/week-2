const fs = require('fs')

const save = function (filename, data){
    fs.writeFileSync(filename,JSON.stringify(data))
}

const load = function (filename, handler){
   fs.readFile(filename, 'utf8', (err,file) => {
       if(err){
           console.log('An error occured\n',err);
           handler(err);
           return;
       }
       handler(null, JSON.parse(file));
   });
}

let readFile = (filename) => {
    return new Promise(((resolve, reject) => {
        fs.readFile(filename,'utf8', (err, contents) => {
            if(err){
                reject(err)
            }
            resolve(JSON.parse(contents))
        })
    }))

}

module.exports = {
    save,
    load,
    readFile
}