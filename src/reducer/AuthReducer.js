import {authStatus} from '../action/Status';

const initialData = {
	token:null,
	user:{
	    fname:"",
	    lname:"",
	    email:""
	},
	authenticate:false,
	authenticating:false,
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
	 }

	 return state;
}