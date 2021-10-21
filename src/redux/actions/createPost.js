import axios from 'axios'


export const createPost =async(data)=>{
return await axios.post('https://dummyapi.io/data/v1/post/create', data , {
        headers:{
            'app-id':`616e75e7a7d1af6bb5db9735`,
            "Content-Type": "application/json",
            
           
            
        }
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log('Desila se greska', err))
}