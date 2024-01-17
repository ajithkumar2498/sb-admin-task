import React,{useState,useContext} from 'react'
import Button from 'react-bootstrap/Button';
import { Action } from '../../Utils/Action';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import {  UserContext } from "../../Utils/UserContextComponent";

function AddUser() {
  
  const userContext = useContext(UserContext)
  let [firstname,setFname]=useState("")
  let [lastname,setLname]=useState("")
  let [email,setEmail]=useState("")
  let [mobile,setMobile]=useState("")
  let [batch,setBatch]=useState("")
  let navigate=useNavigate()

  // console.log(setFname)
  
  let handleSubmit= ()=>{
   
   userContext.UserDispatch({action:Action.ADD,data:{
    firstname,
    lastname,
    email,
    mobile,
    batch
   }})
   navigate('/dashboard')


  }

  return <>
  <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Add User</h1>
                    </div>
                    <Form>
                      <Form.Group className="mb-3" >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" onChange={(e)=>setFname(e.target.value)}/>
                      </Form.Group>
                      <Form.Group className="mb-3" >
                      <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" onChange={(e)=>setLname(e.target.value)} />
                      </Form.Group>
                      <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                      </Form.Group>
                      <Form.Group className="mb-3" >
                        <Form.Label>Mobile No</Form.Label>
                        <Form.Control type="text" placeholder="Enter Mobile No" onChange={(e)=>setMobile(e.target.value)}/>
                      </Form.Group>
                      <Form.Group className="mb-3" >
                        <Form.Label>Batch ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter Batch ID" onChange={(e)=>setBatch(e.target.value)} />
                      </Form.Group>
                      <Button variant="primary" onClick={()=> handleSubmit()}>
                        Submit
                      </Button>
                   </Form>
                </div>
            </div>
      </div>
                    
  </>
}

export default AddUser