import React,{useState,useEffect, useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Action } from '../../Utils/Action';
import { useParams, useNavigate } from 'react-router-dom'
import {  UserContext } from "../../Utils/UserContextComponent";

function EditUser() {
  let params = useParams()
  let nav = useNavigate()
  const userContext=useContext(UserContext)
  let [firstname,setFname]=useState("")
  let [lastname,setLname]=useState("")
  let [email,setEmail]=useState("")
  let [mobile,setMobile]=useState("")
  let [batch,setBatch]=useState("")

 useEffect(()=>{
  if(params.id<userContext.user.length){
    setFname(userContext.user[params.id].firstname)
    setLname(userContext.user[params.id].lastname)
    setEmail(userContext.user[params.id].email)
    setMobile(userContext.user[params.id].mobile)
    setBatch(userContext.user[params.id].batch)
  }else{
  alert("invalid User Id"+params.id)
  nav('/dashboard')
  }
 },[])

  const handleEdit=(()=>{
    userContext.UserDispatch({action:Action.EDIT,data:{ firstname,
    lastname,
    email,
    mobile,
    batch}, id:params.id})
   nav('/dashboard')
  })
  return <>
  <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
                    </div>
                    <Form>
                      <Form.Group className="mb-3" >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" value={firstname} onChange={(e)=>setFname(e.target.value)}/>
                      </Form.Group>
                      <Form.Group className="mb-3" >
                      <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" value={lastname} onChange={(e)=>setLname(e.target.value)} />
                      </Form.Group>
                      <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                      </Form.Group>
                      <Form.Group className="mb-3" >
                        <Form.Label>Mobile No</Form.Label>
                        <Form.Control type="text" placeholder="Enter Mobile No" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                      </Form.Group>
                      <Form.Group className="mb-3" >
                        <Form.Label>Batch ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter Batch ID" value={batch} onChange={(e)=>setBatch(e.target.value)} />
                      </Form.Group>
                      <Button variant="primary" onClick={()=> handleEdit()}>
                        Submit
                      </Button>
                   </Form>
                </div>
            </div>
      </div>
  </>
}

export default EditUser