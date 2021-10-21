import { GET_POST_REQUEST,GET_POST_SUCCESS } from "../constans/getPost";


export const getAllPost = (state={data:[]},action)=>{

    switch(action.type){
        case GET_POST_REQUEST: 
        return{
            ...state

        }
        case GET_POST_SUCCESS:
        
            return{
                ...state,
                data:action.payload
            }
            default: return state
}
}

// export const getPostById = (state={data:{}},action)=>{

//     switch(action.type){
//     case GET_POST_BY_ID_REQUEST:
//         return{
//             ...state
//         }
//     case GET_POST_BY_ID:
//         return{
//             ...state,
//             data:action.payload
//         }


//         default: return state;
//     }
// }

