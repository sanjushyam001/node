// console.log("Hello friends!");

const http=require("http")
const hostname="127.0.0.1"
const port=5000
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.write(`Welcome to Node JS tutorial Server has been started successfully,Its running on http://${hostname}/${port}`)
    // res.statusCode=200
    // res.setHeader("Content-Type","text/plain")
    // res.end(`Welcome to Node JS tutorial Server has been started successfully,Its running on http://${hostname}/${port}`)

})

server.listen(port,hostname,()=>{
    console.log(`Server has been started successfully,Its running on http://${hostname}/${port}`);
})

