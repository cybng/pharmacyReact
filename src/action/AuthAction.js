import {authStatus,regStatus,otpStatus,generalStatus} from "./Status";
// import axios from '../helper/Axios';
import axios from 'axios';
export const LoginPage=(userLogin)=>{ 
	console.log(userLogin)
	return async (dispatch)=>{ 
		dispatch({type:authStatus.LOGIN_REQUEST});
		const res = await axios.post("http://localhost:3000/api/login",userLogin);
		
		if(res.status===200){

			if(res.data.user.role==="Admin"){
			const {token,user} = res.data; 
			localStorage.setItem("loginToken",token);
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
	 
	return async (dispatch)=>{
      dispatch({type:regStatus.REG_REQUEST});
      const res = await axios.post("http://localhost:3000/api/reg",userReg); 
      if(res.status===200){
      	if(res.data){
      		const {token,user} = res.data;
      		console.log({token,user})
      		localStorage.setItem("otpToken",token);
      		localStorage.setItem("user",JSON.stringify(user));
      		dispatch({
      			type:regStatus.REG_SUCCESS,
      			payload:{token,user}
      		})
      	}
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
		const generalToken = localStorage.getItem("generalToken");
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

export const otpVerification=(otpCredentials)=>{
	return async(dispatch)=>{
		dispatch({type:otpStatus.OTP_REQUEST});
		const res = await axios.post("http://localhost:3000/api/otpVerification",otpCredentials);
		if(res.status===200){
			if(res.data){
		    const {token,user} = res.data;
			localStorage.setItem("generalToken",token);
			localStorage.setItem("user",JSON.stringify(user));
		    dispatch({
		    	type:otpStatus.OTP_SUCCESS,
		    	payload:{
		    		token,user
		    	}
		    })
		    window.localStorage.removeItem("otpToken")
		    }

		}
		if(res.status===201){
			dispatch({
				type:otpStatus.OTP_FAILED,
			    payload:res.data.message
			})
		}

	}
}