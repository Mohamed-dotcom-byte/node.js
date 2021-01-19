const fs = require ('fs'); 
let nbreLines = fs.readFile(process.argv[2],(err,data)=>{
    if (err) throw err;
    console.log(data.toString().split('\n').length -1);
})