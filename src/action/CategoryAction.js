import React from 'react'
import axios from "../helper/Axios";
import {categoryStatus} from './Status';
export const GetCategory=()=>{
	return async (dispatch)=>{
	    dispatch({type:categoryStatus.CATEGORY_REQUEST});
	    const res = await axios.get("http://localhost:3000/api/getcategory");

	    if(res.status===200){
	    	const {categoryList} = res.data;
	    	 
	    	dispatch({
	    		type:categoryStatus.CATEGORY_SUCCESS,
	    		payload:{category:categoryList}
	    	})
	    }else{
	    	if(res.status===201){
	    	    dispatch({
	    	    	type:categoryStatus.LOGIN_FAILED,
	    	    	payload:{
	    	    		error:"Category Failed"
	    	    	}
	    	    });
	    	}
	    }
	}
}