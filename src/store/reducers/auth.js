import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utitliy';

const initialState={
    token:null,
    userId:null,
    error:null,
    isLoading:false
}

const reducer=(state=initialState,action)=>{
    switch (action.type){
        case actionTypes.AUTH_START:
        return{
            ...state,
             error:null,
             isLoading:true
        }
        case actionTypes.AUTH_SUCCESS:
            return updateObject(state,{
                token:action.idToken,
                userId:action.userId,
                error:null,
                isLoading:false
            })
        case actionTypes.AUTH_FAIL:
        return updateObject(state,{
            error:action.error,
            isLoading:false
        })
        default:{
            return{
                ...state
            }
        }

    }
    
}

export default reducer;