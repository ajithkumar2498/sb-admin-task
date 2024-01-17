export function CounterReducer (state,payload){
    
        console.log(state)
        console.log(payload)
        switch(payload.action){
          case "INCREMENT": return{
             value : state.value+1
          }
          case "DECREMENT": if (state.value>0)  return {
           
            value : state.value-1
          }
          default: return{
            value : state.value=0
          }
          
        }
      
      
}