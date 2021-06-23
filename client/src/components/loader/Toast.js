import React from 'react'
import {Modal,Toast} from 'react-bootstrap'

const Toaster =({show,message,handler})=>{
  return(
    <Toast style={{position:'absolute',top:'10%',right:'5%'}}>
      <Toast.Body className="text-center" >
        {message}
      </Toast.Body>
    </Toast>
  )
}

export default Toaster;