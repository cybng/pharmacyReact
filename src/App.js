import React,{useEffect,useState} from 'react'
import { BrowserRouter as Router, Route,Switch, Link } from 'react-router-dom'
import {UserRoute,AdminRoute,OtpRoute} from './privateRoute/PrivateRoute';
import {useDispatch,useSelector} from 'react-redux'
import {AllreadyLogin} from './action'
import Home from './component/home';
import Detail from "./component/detail/ProductDetail";
import Login from "./auth/Login";
import Reg from "./auth/Reg";
import Admin from "./admin/Admin"
import AddCategory from './admin/AddCategory';
import Gst from './component/gst';
import Otp from './auth/OtpVerification';
import DetailVerification from './auth/DetailVerification';
export default function App() {
   
       const dispatch = useDispatch();
       const auth = useSelector(state=>state.auth);

       useEffect(()=>{
         if(!auth.authenticate){
            dispatch(AllreadyLogin());
         }
         // if(auth.authenticate){
         //  dispatch(getInitialData());
         // }
       },[auth.authenticate])




  return (
    <div>
     
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/detail" component={Detail} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/reg" component={Reg} />
    <AdminRoute path="/admin" exact component={Admin}/>
    <AdminRoute exact path="/admin/addcategory" component={AddCategory} />
    <Route exact path="/gst" component={Gst} />
    <OtpRoute exact path="/otp" component={Otp}/>
    <Route exact path="/general" component={DetailVerification}/>
    </Switch>
     
      
    </div>
  )
}