import axios from 'axios'


export const updatePost = async(id,post)=>{
 await axios.put(`https://dummyapi.io/data/v1/post/${id}`,post,{
        headers:{
            'app-id':`616e75e7a7d1af6bb5db9735`,
            'Content-Type': 'application/json',
            'accept': 'application/json'
        }
    })

} 