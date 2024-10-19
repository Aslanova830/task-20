
import React, { useState } from "react"
import Butoon from '../components/button/Butoon'

function ToggleButton() {

    const [show,setshow] = useState(false);
  
    
    const toggle = () => {
      setshow (!show)
    };
  
    return (
      <div>
       
        <button onClick={toggle}>
          {show ? 'OFF' : 'ON'}
        </button>
        {show &&
        <div>
            :)
            </div>}
        
      </div>
    );
  }

export default ToggleButton
