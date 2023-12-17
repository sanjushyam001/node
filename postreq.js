const http=require('https')

const data=JSON.stringify({
    name:"John Doe",
    job:"Content Writer"
})

const options={
    hostname:'reqres.in',
    path:'/api/users',
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    }
}
const req=http.request(options,(response)=>{

    let body=''
    console.log('Status Code : ',response.statusCode);
    response.on('data',(chunk)=>{
        body+=chunk
    })
    response.on('end',()=>{
        console.log('Body: ',JSON.parse(body));
    })
})
req.write(data)
req.end()
