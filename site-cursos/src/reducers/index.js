import {combineReducers} from "redux";

import contatoReducer from './contato-reducer'
//import contatoReducer from './curso-reducer'

const reducers = combineReducers({
    contato : contatoReducer
    //curso : cursoReducer
})

export default reducers