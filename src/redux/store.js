import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { deleteReducer } from './reducers/deleteReducer';
import { getAllPost} from './reducers/getPost';



const rootReducer = combineReducers({
  dataPost:getAllPost,
  // dataId:getPostById
  delPost:deleteReducer,



})

const initialState={

}

let middlware = [thunk]


export const store = createStore(rootReducer,initialState,applyMiddleware(...middlware))