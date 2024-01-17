
import Sidebar from './assets/components/Sidebar'
import Dashboard from './assets/components/Dashboard'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import AddUser from './assets/components/AddUser'
import EditUser from './assets/components/EditUser'
import UserContextComponent from './Utils/UserContextComponent'
import NestedExample from './assets/components/Nestedexample/NestedExample'
import Class from './assets/components/Nestedexample/Class'
import Task from './assets/components/Nestedexample/Task'
import Query from './assets/components/Nestedexample/Query'
import Useref from './assets/components/UseRef'
import UseReducer from './assets/components/UseReducer'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <div id="wrapper">
       <Sidebar />
       <Routes>
        <Route path='/dashboard' element={ <UserContextComponent> <Dashboard/> </UserContextComponent>}/>   
        <Route path='/add-user' element={<UserContextComponent><AddUser/></UserContextComponent> }/>    
        <Route path= "/edit-user/:id" element={ <UserContextComponent> <EditUser/> </UserContextComponent>}/>  
        <Route path="/nested-example" element={<NestedExample/>}>
            <Route path='class' element={<Class/>}/>
            <Route path='query' element={<Query/>}/>
            <Route path='task' element={<Task/>}/>
        </Route>
        <Route path='/useref' element={<Useref/>}/>
        <Route path='/usereducer' element={<UseReducer/>}/>
        <Route path="*" element={<Navigate to="/dashboard"/>}/>
       </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
