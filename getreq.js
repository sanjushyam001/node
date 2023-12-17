const http=require('http')

// const server=http.createServer((req,res)=>{
//     res.statusCode=200
//     res.setHeader('Content-Type','text/plain')
//     res.end("Welcome to tutorial")
// })
// server.listen(5000,"localhost",()=>{
//     console.log("Server has been started..");
// })
const url = 'http://jsonplaceholder.typicode.com/posts'
http.get(url,(response)=>{
    let data=""
response.on('data',(chunk)=>{
    data+=chunk
})
response.on('close',()=>{
    let receivedData=JSON.parse(data)
    console.log(receivedData);
})
})