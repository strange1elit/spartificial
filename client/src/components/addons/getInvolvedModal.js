import React, {useState} from 'react'
import {Modal} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { postInvolve } from '../../redux/actions/involved'
import './addOns.css'
const InvolvedModal=({show,onHide,appType,title})=>{
  const dispatch=useDispatch()
  const [formData,setFormData]=useState({name:'',email:'',phone:'',type:'',proposal:''})
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const hideAddOn=()=>{
    setFormData({name:'',email:'',phone:'',type:'',proposal:''})
    onHide()
  }
  const submitForm=(e)=>{
    e.preventDefault()
    formData.type=appType
    dispatch(postInvolve(formData))
    hideAddOn()
    
  }
  return(
    <Modal show={show} backdrop="static" centered onHide={onHide}>
      <Modal.Header style={{backgroundColor:'orangered',color:'aliceblue'}}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <form onSubmit={submitForm}>
        <Modal.Body>
          <div className="addons">
            <input required type="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange}/>

            <input required type="email" name="email" placeholder="Your Email Id" value={formData.email} onChange={handleChange}/>

            <input required minLength="10" maxLength="10" type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange}/>
            
            <textarea rows="5" required type="text" name="proposal" placeholder="Your Proposal" value={formData.proposal} onChange={handleChange}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={()=>hideAddOn()}type="button">Cancel</button>
          <button className="btn btn-primary" type="submit">Submit</button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}

export default InvolvedModal