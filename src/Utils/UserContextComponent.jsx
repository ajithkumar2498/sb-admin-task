import React,{useReducer} from 'react'
import {Action} from "./Action"
export const UserContext = React.createContext(null)
const initialvalues = [
  {
    firstname:"Ajith",
    lastname:"kumar",
    email:"ajith24@gmail.com",
    mobile:"9854578945",
    batch:'b15'
  },
  {
    firstname:"Ajith",
    lastname:"kumar",
    email:"ajith24@gmail.com",
    mobile:"9854578945",
    batch:'b15'
  },
  {
    firstname:"Ajith",
    lastname:"kumar",
    email:"ajith24@gmail.com",
    mobile:"9854578945",
    batch:'b15'
  }
]
function userReducer(state,payload){
  switch(payload.action){
    case Action.DELETE:{
      let {id}=payload;
      let newArray = [...state]
      newArray.splice(id,1)
      return newArray
    }
    case Action.ADD:{
      let {data} = payload
      let newArray=[...state]
      newArray.push(data)
      return newArray
    }
    case Action.EDIT:{
      let {data,id}=payload
      let newArray = [...state]
      newArray.splice(id,1,data)
      return newArray
    }
  }

}
function UserContextComponent({children}) {
    let [user,UserDispatch]=useReducer(userReducer,initialvalues)
  return (
    <UserContext.Provider value={{user,UserDispatch}}>
     {children}
    </UserContext.Provider>
  )
}

export default UserContextComponent