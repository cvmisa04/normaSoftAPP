import axios from 'axios'

import {
    GET_POST_REQUEST,
    GET_POST_SUCCESS,
    GET_POST_ERROR,

} from '../constans/getPost'

export const showAllPost = () => async (dispatch) => {
    try {
        dispatch({ type: GET_POST_REQUEST })

        const { data } = await axios.get('https://dummyapi.io/data/v1/post', {
            headers: {
                'app-id': `616e75e7a7d1af6bb5db9735`
            }
        }
        )

        dispatch({
            type: GET_POST_SUCCESS,
            payload: data
        })

    } catch (error) {

        dispatch({
            type: GET_POST_ERROR,
            payload: error.response.data.message
        })

    }


}

//Show post by Id


export const showPostById = async (id) =>  {

    return await axios.get(`https://dummyapi.io/data/v1/post/${id}`, {
                headers: {
                    'app-id': `616e75e7a7d1af6bb5db9735`
                }
            })
    // try {
    //     dispatch({type:GET_POST_BY_ID_REQUEST})
    //     const {idPost} =  await axios.get(`https://dummyapi.io/data/v1/post/${id}`, {
    //         headers: {
    //             'app-id': `616e75e7a7d1af6bb5db9735`
    //         }
    //     }
    //     )

    //     dispatch({
    //         type: GET_POST_BY_ID,

    //         payload: idPost
    //     })
    // } catch (error) {
    //     console.log('An error occurred')
    // }
}

export const showComments = async(id) => {



   return await axios.get(`https://dummyapi.io/data/v1/post/${id}/comment`,{
        headers: {
            'app-id': `616e75e7a7d1af6bb5db9735`
        }
    })

  
    


}