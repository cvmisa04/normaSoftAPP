import {
    DELETE_POST_REQUEST,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAIL
} from '../constans/deletePost'


export const deleteReducer = (state={},action)=>{

    switch(action.type){
        case DELETE_POST_REQUEST:
            return{
                ...state
            }
        case DELETE_POST_SUCCESS:
            return{
                ...state,
                isDeleted:action.payload
            }
        case DELETE_POST_FAIL:
            return{
                ...state,
                error:action.payload
            }
        default: return state
    }
}