import {categoryStatus} from '../action/Status';

const initialData = {
  allCategory:""
};

export default (state=initialData,action)=>{
	 console.log(action)
	 switch(action.type){
	 	case categoryStatus.CATEGORY_REQUEST:
	 		state={
	 		    ...state,
	 		 }
	 	break; 
	 	case categoryStatus.CATEGORY_SUCCESS:
	 	    state={
	 	    	...state,
	 	    	allCategory:action.payload.category, 

	 	    }
	 	break;    
	 }

	 return state;
}