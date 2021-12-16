import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {useDispatch,useSelector} from 'module'

export const UserRoute=({component:Component,...rest})=>{
     return <Route {...rest} component={(props)=>{
     	const userToken = window.localStorage.getItem("userToken");
     	if(userToken){
     		return <Component {...props} />
     	}else{
     		return <Redirect to={"/login"} />
     	}
     }} />
}

export const AdminRoute=({component:Component,...rest})=>{
     return <Route {...rest} component={(props)=>{
          const adminToken = window.localStorage.getItem("adminToken");
           if(adminToken){
              return <Component {...props} />
           }else{
               return <Redirect to={"/login"} />
          }
     }} />
}

export const OtpRoute=({component:Component,...rest})=>{
     return <Route {...rest} component={(props)=>{
          const otpToken = window.localStorage.getItem("otpToken");
          if(otpToken){
               return <Component {...props} />
          }else{
               return <Redirect to={"/login"} />
          }
     }} />
}


