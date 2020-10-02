import Axios from 'axios';
import {GET_RECIPES , APP_ID , APP_KEY , URL} from './types';

export const getRecipes = (query) => dispatch =>{
        Axios.get(URL,{
            params:{
                q:query,
                from:0,
                to:15,
                app_id:APP_ID,
                app_key:APP_KEY,
            }
        }).then((res)=>{
            // console.log(res)
            dispatch({
                type:GET_RECIPES,
                payload:res.data.hits,
            })
        })
        .catch((err)=>{console.log(err)})
}