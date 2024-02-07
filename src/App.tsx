import React, { createContext, useContext, useState } from "react";

const MyContext  = createContext<any>({});

function Button(){
  const {onIncrement} : any = useContext(MyContext);
  return( 
    <>
    <button onClick={onIncrement}>increment</button>
    </>
  )
}

function Label(){

  const {count} : any = useContext(MyContext);
  return( 
    <>
   <p>{count}</p>
    </>
  )
}


function Counter() {
const [count, setCount] = useState(0);



  return (
    <MyContext.Provider value={{count,
    onIncrement: () => setCount(count +1)}}>
    <Button/>
    <Label/>
    </MyContext.Provider>
  );
}

export default Counter;