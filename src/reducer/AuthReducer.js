import {authStatus,regStatus,otpStatus} from '../action/Status';

const initialData = {
	token:null,
	user:{
	    fname:"",
	    lname:"",
	    email:""
	},
	authenticate:false,
	authenticating:false,
	otpVerification:false,
	generalVerification:false,
	loading:false,
	error:null,
	message:""

};

export default (state=initialData,action)=>{
	 console.log(action)
	 switch(action.type){
	 	case authStatus.LOGIN_REQUEST:
	 		state={
	 		    ...state,
	 		    authenticating:true
	 		}
	 	break; 
	 	case authStatus.LOGIN_SUCCESS:
	 	    state={
	 	    	...state,
	 	    	user:action.payload.user,
	 	    	token:action.payload.token,
	 	    	authenticate:true,
	 	        authenticating:false

	 	    }
	 	break;
	 	case regStatus.REG_REQUEST:
	 	    state={
	 	    	...state,
	 	    	authenticating:true,
	 	    }
	 	break;
	 	case regStatus.REG_SUCCESS:
	 	     state={
	 	     	...state,
	 	     	otpVerification:true,
	 	     	authenticating:true,
	 	     	authenticate:false,
	 	     	token:action.payload.token,
	 	     	user:action.payload.user

	 	     }
	 	break;

	 	case otpStatus.OTP_REQUEST:
	 	     state={
              ...state,
	 	     	otpVerification:true,
	 	     }
	 	     break;
	 	case otpStatus.OTP_SUCCESS:
	 	     state={
              ...state,
              token:action.payload.token,
              user:action.payload.user,
              otpVerification:false,
              generalVerification:true
	 	     }
	 	     break;
	 	case otpStatus.OTP_FAILED:
	 		 state={
	 		 	...state,
	 		 	message:action.payload
	 		 }
	 		 break;             
	 }

	 return state;
}