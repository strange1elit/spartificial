import React from 'react'
import { Link } from 'react-router-dom'

const ProRef=({projects,referals,title})=>{
  const deleteReferal=(ref)=>{
    if(window.confirm(`Delete Referal Link:\n${ref}`)){
      alert("Deleted")
    }
  }
  return(
    <div className="container proref">
      <div className="row pb-2">
        <div className="col-12">
          <h5><strong>{title}</strong></h5>
        </div>
      </div>
      <div className="row justify-content-center">
        {projects.length>0?projects.map((val,idx)=>{
          console.log(val)
          return(
            <div className="col-sm-6 col-12" key={idx}>
              <div className="card m-1">
                <img src={val.image} alt="..." className="img-fluid"/>
                <div className="overlay">
                  <h5><strong>{val.title}</strong></h5>
                  <h6><p>{val.description}</p>...</h6>
                  <Link to={`/projects/us=${btoa(val.project_id)}`} className="btn btn-success btn-sm">Check</Link>
                </div>
              </div>
            </div>
          )
        }):<div className="col-12 text-center p-5">No Projects Submitted</div>}
      </div>
      <div className="row">
        <div className="col-12">
          <h5><strong>My Referrals</strong></h5>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 table-responsive ">
          <table className="table table-hover table-sm table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Link</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {referals.length>0?referals.map((val,idx)=>{
                return <tr key={idx}>
                  <th scope="row">{idx+1}</th>
                  <td>{val}</td>
                  <td onClick={()=>deleteReferal(val)}><strong>Delete</strong></td>
                </tr>
              }):<tr style={{textAlign:'center'}}>
                  <td></td>
                  <td>No Referrals Created!</td>
                  <td></td>
                </tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProRef;