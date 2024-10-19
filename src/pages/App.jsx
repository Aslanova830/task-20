import React, { useState } from "react"
import Butoon from '../components/button/Butoon'

function Counter() {
 
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Reqem: {count}</h1>

      <button className="btn-primary" onClick={() => setCount(count + 1)}>  +  </button>
      <button className="btn-success" onClick={() => setCount(count - 1)}>  -  </button>
    </div>
  );
}





export default Counter ;


