// fileSystem(fs) module with promises.

const fs = require('fs').promises;

async function FileOperations(){
    try{
        const data = await fs.readFile('sample.txt','utf-8');
        console.log("File Content : ",data)

        await fs.writeFile('sample1.txt','modified using file module promises');
        console.log("File written successfully")

        await fs.appendFile('sample2.txt','Appended file using filemodule with promises');
        console.log("Added Content to the file.")
    }
    catch(err){
        console.error('An Error Occured : ',err)
    }
}

FileOperations();