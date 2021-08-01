import React, { useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import logoname from '../../assets/images/logoname.png'
import { getUserList } from '../../redux/actions/user'
import SpTable from './SpTable'
import NoRecords from './NoRecords'
import './Admin.css'
import { getJoinRequest, getProjectRequest } from '../../redux/actions/instructor'
import JoinTable from './JoinTable'
import ProjectTable from './ProjectTable'
import PaymentTable from './PaymentTable'
import FileTable from './FileTable'
import { getPayments } from '../../redux/actions/paymentlist'
import { getFiles } from '../../redux/actions/files'

const userCol=["#","Name","Email","Phone","Gender","Education","Address","Registered"]
const joinCol=["#","Name","Email","Status","Submitted"]
const submitCol=["#","Project Name","Email","Status","Submitted"]
const payCol=["#","Order ID","Payment ID","Project ID","Amount","Message","Txn Date"]
const fileCol=["#","File Name","Created On"]
const Admin =()=>{
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getUserList())
    dispatch(getJoinRequest())
    dispatch(getProjectRequest())
    dispatch(getPayments())
    dispatch(getFiles())
  },[])
  const current=useSelector(state=>state.users.current)
  const users=useSelector(state=>state.users.users)
  const joinrequest=useSelector(state=>state.instructor.joinrequest)
  const submitrequest=useSelector(state=>state.instructor.submission)
  const payments=useSelector(state=>state.payment.paymentData)
  const files=useSelector(state=>state.files.fileList)
  //console.log(files)
  return (current?current.admin?
    <div className="admin">
      <div className="container text-center pb-5">
        <img className="img-fluid" src={logoname} alt="..."/>
        <u><h1 className="text-primary">Welcome to <strong>Admin Panel</strong></h1></u>
      </div>
      <div className="container pb-5">
        <h5><strong>Registered users</strong></h5>
        {users?
        <SpTable tableCol={userCol} data={users}/>:<NoRecords/>}
      </div>
      <div className="container pb-5">
        <h5><strong>Join Requests</strong></h5>
        {joinrequest?
        <JoinTable tableCol={joinCol} data={joinrequest}/>:<NoRecords/>}
      </div>
      <div className="container pb-5">
        <h5><strong>Project Requests</strong></h5>
        {joinrequest?
        <ProjectTable tableCol={submitCol} data={submitrequest}/>:<NoRecords/>}
      </div>
      <div className="container pb-5">
        <h5><strong>Payments</strong></h5>
        {joinrequest?
        <PaymentTable tableCol={payCol} data={payments}/>:<NoRecords/>}
      </div>
      <div className="container pb-5">
        <h5><strong>Uploaded files</strong></h5>
        {files?
        <FileTable tableCol={fileCol} data={files}/>:<NoRecords/>}
      </div>
    </div>
    :<Redirect to="/dash"/>
    :<div className="admin">Login please</div>
  )
}
export default Admin;