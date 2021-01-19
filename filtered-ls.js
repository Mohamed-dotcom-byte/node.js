fs = require('fs');
const data = process.argv[2]
const extension = process.argv[3]
const readFile = fs.readdir(data,(err,list)=>{
    let ex = '';
    list.map((data)=>{
        data.split('.')[1] === extension ? console.log(data) : data;
    })
})
