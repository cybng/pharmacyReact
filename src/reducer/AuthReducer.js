import {authStatus} from '../action/Status';

const initialData = {

}

export default (state=initialData,action)=>{
	 console.log(action.type)
	 switch(action.type){
	 	case authStatus.LOGIN_REQUEST:
	 		state={
	 		    ...state,
	 		}
	 	break; 
	 }

	 return state;
}