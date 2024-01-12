import { types } from "../types/types";

const inicialState={
    uid:13265465,
    name:'Serguey'
}


 export const authReducer = (state=inicialState,action) => {

    switch (action.type) {
        case types.login:
            return{
                uid:action.payload.uid ,
                name:action.payload.displayName
            }
        case types.logout:
            return{}
            
    
        default:
            return state
    }
  
 }