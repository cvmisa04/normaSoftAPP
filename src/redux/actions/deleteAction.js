import axios from 'axios'
import { DELETE_POST_FAIL, DELETE_POST_REQUEST, DELETE_POST_SUCCESS } from '../constans/deletePost'


export const deletePost = (id)=>async(dispatch)=>{

    try {

        dispatch({type:DELETE_POST_REQUEST});

      const {deletePost} = await axios.delete(`https://dummyapi.io/data/v1/post/${id}`,{
          headers:{
              'app-id':`616e75e7a7d1af6bb5db9735`
          }
      })

      dispatch({type:DELETE_POST_SUCCESS,
                payload:deletePost
    })
        
    } catch (error) {
        dispatch({type:DELETE_POST_FAIL,
                    payload:"ERROR"
        })
    }
}