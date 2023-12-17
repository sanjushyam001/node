const axios=require('axios')

const data=JSON.stringify({
    name:'John Doe',
    job:'Content Writer'
})

axios.post('https://reqres.in/api/users',data)
.then((res)=>{
    console.log("Status Code: ",res.status);
    console.log(`Body: ${JSON.stringify(res.data)} `,);
})
.catch((err)=>{
    console.log(err);

})