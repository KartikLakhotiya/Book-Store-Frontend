// Basic fileSystem (fs) Module

const fs = require('fs');
fs.readFile('sample.txt','utf8',(err,data) => {
    if(err){
        console.error("An Error Occured",err)
        return
    }
    console.log("File Content : ",data)
})


// write function removes the content of the original file and write the content give in the quotes after the file name
fs.writeFile('sample.txt','this is my second content 1',(err) => {
    if(err){
        console.log("An Error occured",err)
        return
    }
    console.log("File written Successfully")
})


fs.appendFile('sample1.txt','Writing to a file using node js', (err) => {
    if(err){
        console.err("An Error Occured",err)
        return
    }
    console.log("Added Content to the file")
})

//comment1
// comment2