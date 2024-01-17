import Card from "./Card"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { Action } from "../../Utils/Action";
import {useContext} from "react"
import { GeneralContext } from "../../main";
import { UserContext } from "../../Utils/UserContextComponent";
function Dashboard(){
    let data =[{
        isProgress:false,
        title:"Earnings (Monthly)",
        value:"$40,000",
        icon:"fa-calendar",
        color:"primary"
    },
    {
        isProgress:false,
        title:"Earnings (Annual)",
        value:"$215,000",
        icon:"fa-dollar-sign",
        color:"success"
    },
    {
        isProgress:true,
        title:"Tasks",
        value:"50",
        icon:"fa-clipboard-list",
        color:"info"
    },
    {
        isProgress:false,
        title:"Pending Requests",
        value:"18",
        icon:"fa-comments",
        color:"warning"
    }
]
    let nav = useNavigate()
    const gContext= useContext(GeneralContext)
const userContext=useContext(UserContext)
    return <>
    
    <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    </div>
                    <div className="row">
                     {data.map((e,i)=>{
                      return <Card key={i} 
                       isProgress={e.isProgress} 
                       title={e.title} 
                       value={e.value} 
                       color={e.color} 
                       icon={e.icon}/>
                     })}
                    </div>
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h3 className="h3 mb-0 text-gray-800">User List</h3>
                    </div>
                    <div className="row">
                        <div className="container-fluid">
                            <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email-id</th>
                                        <th>Mobile.No</th>
                                        <th>Batch</th>
                                        <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {
                                        userContext.user.map((e,i)=>{
                                            return <tr key={i}>
                                               <td>{i+1}</td>
                                               <td>{e.firstname}</td>
                                               <td>{e.lastname}</td>
                                               <td>{e.email}</td>
                                               <td>{e.mobile}</td>
                                               <td>{e.batch}</td>
                                               <td>
                                                <Button variant='info' onClick={()=>nav(`/edit-user/${i}`)}>Edit</Button>
                                                &nbsp; &nbsp;
                                                <Button variant='danger' onClick={()=> userContext.UserDispatch({action:Action.DELETE,id:1})}>Delete</Button>
                                               </td> 
                                            </tr>

                                        })
                                       }
                                    </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Dashboard