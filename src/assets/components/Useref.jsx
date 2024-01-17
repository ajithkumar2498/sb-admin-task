import React,{useState,useEffect,useRef} from 'react'
import Button from 'react-bootstrap/Button';
function Useref() {
    // let [name,setName]=useState(0)
    // let count = useRef(0)
    // console.log(count.current)
    // useEffect(()=>{
    //     count.current+=1;
    // })
  return <>
  {/* <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <div className="container-fluid">
                    <label>Name:</label><input type="text" onChange={(e)=>setName(e.target.value)}/>  name is:{name}
                   <br/> */}
                 <Useref1/>
                 {/* The Component Rendered {count.current} times
                </div>
           </div>
    </div> */}
                
  </>
}

function Useref1(){
let inp1=useRef(null)
let inp2=useRef(null)
let inp3=useRef(null)
let inp4=useRef(null)
const reset =()=>{
  inp1.current.value=''
  inp2.current.value=''
  inp3.current.value=''
  inp4.current.value=''
  inp1.current.focus()
}
useEffect(()=>{
 reset()
},[])
let handleClick=()=>{
  let value =inp1.current.value+inp2.current.value+inp3.current.value+inp4.current.value
  if (value.length===4){
    alert(`otp is ${value}` )
  }
 else{
  reset()
  alert("Invalid OTP")
  
 }
}

 return<>
 <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <div className="container-fluid">
 <h4>OTP</h4>
  <input ref={inp1} onChange={()=>{inp2.current.focus()}}/>
  <input ref={inp2} onChange={()=>{inp3.current.focus()}}/>
  <input ref={inp3} onChange={()=>{inp4.current.focus()}}/>
  <input ref={inp4} onChange={()=>{handleClick()}}/>
  <Button variant='primary' onClick={()=>handleClick()}>Submit</Button>
  </div>
           </div>
    </div> 
 </> 
  
}
export default Useref