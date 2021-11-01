import {authStatus} from "./Status";
import axios from '../helper/Axios';
export const LoginPage=(userLogin)=>{
    console.log(userLogin)
	return async (dispatch)=>{ 
		dispatch({type:authStatus.LOGIN_REQUEST});
		const res = await axios.post(`/login`,{...userLogin});
		if(res.status===200){
			console.log(res.data);
		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}