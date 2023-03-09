const http = require('http')
const fs = require('fs')

const server=http.createServer((req,res)=>{


    const stream = fs.createReadStream('./demo.txt')

    stream.on('data',(sdata)=>{
        res.end(sdata)
    })

    stream.on('end',()=>{
        console.log("end")
    })


    stream.on('error',(err)=>{
        console.log(err);
    })
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('server is started')
})