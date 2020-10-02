import {GET_RECIPES} from '../action/types';

const initialState = {
    recipeList:[],
};

const recipeReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_RECIPES :
            return {
                ...state,
                recipeList:action.payload
            }
        default :
            return state
    }
}

export default recipeReducer