import {authStatus,regStatus} from "./Status";
// import axios from '../helper/Axios';
import axios from 'axios';
export const LoginPage=(userLogin)=>{ 
	console.log(userLogin)
	return async (dispatch)=>{ 
		dispatch({type:authStatus.LOGIN_REQUEST});
		const res = await axios.post("http://localhost:3000/api/login",userLogin);
		// console.log(res)
		if(res.status===200){

			if(res.data.user.role==="admin"){
			const {token,user} = res.data;
			localStorage.setItem("adminToken",token);
			localStorage.setItem("user",JSON.stringify(user));
			dispatch({
				type:authStatus.LOGIN_SUCCESS,
				payload:{
					token,user
				}
			})
		    }
		    if(res.data.user.role==="user"){
		    const {token,user} = res.data;
			localStorage.setItem("userToken",token);
			localStorage.setItem("user",JSON.stringify(user));
		    dispatch({
		    	type:authStatus.LOGIN_SUCCESS,
		    	payload:{
		    		token,user
		    	}
		    })
		    }

		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}

export const RegPage=(userReg)=>{
	console.log(userReg);
	return async (dispatch)=>{
      dispatch({type:regStatus.REG_REQUEST});
      const res = await axios.post("http://localhost:3000/api/reg",{...userReg});
      console.log(res);
      if(res.status===200){
      	console.log(res.data);
      }else{
      	if(res.status===201){
      		console.log(res.data);
      	}
      }
	}
}


export const AllreadyLogin=()=>{
	return async (dispatch)=>{
		const userToken = localStorage.getItem("userToken");
		const adminToken = localStorage.getItem("adminToken");
		if(userToken){
			const userData = JSON.parse(localStorage.getItem("user"));
		    dispatch({
		    	type:authStatus.LOGIN_SUCCESS,
		    	payload:{
		    		userToken,userData
		    	}
		    });
		}else if(adminToken){
			const adminData = JSON.parse(localStorage.getItem("user"));
			dispatch({
				type:authStatus.LOGIN_SUCCESS,
				payload:{
					 adminToken,adminData
				}
			})
		}else{
			dispatch({
				type:authStatus.LOGIN_FAILED,
				payload:{error:"Failed to Login"}
			});
		}
	}
}