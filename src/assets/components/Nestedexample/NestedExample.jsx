import React,{useEffect} from 'react'
import { Outlet,useNavigate } from 'react-router-dom'

function NestedExample() {
    let nav=useNavigate()

     useEffect(() => {
      
    nav('class')
      
    }, [])
    

  return  <>
    <div className='nested-wrapper'>
        <h3>Nested Routing Example</h3>
        <div className='list-wrapper'>
            <ul className='list'>
                <li onClick={()=>nav('class')}>Class</li>
                <li onClick={()=>nav('query')}>Query</li>
                <li onClick={()=>nav('task')}>Task</li>
            </ul>
        </div>
        <div className='content-wrapper'>
            <Outlet/>
        </div>
    </div>

    </>
}

export default NestedExample