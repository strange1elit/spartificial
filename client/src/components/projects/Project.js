import React, { useState } from 'react'
import Payments from '../payments/Payment'

const Project =({match}) =>{
  const [show,setShow]=useState(false)
  const projects = [
		{
			"_id":"1",
			"image":"https://www.pngkit.com/png/full/96-967001_artificial-intelligence-grant-introduction-to-formal-languages-and.png",
      "message":"Do this project with. Learn and Enjoy",
      "title":"Gesture Controlled Drone",
			"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum erat nec lorem bibendum, non volutpat nisl pellentesque. Mauris at rutrum tellus. Donec non tincidunt lorem. Etiam tincidunt nisi finibus velit dapibus cursus. Praesent tempor ipsum ut urna vestibulum, ac condimentum diam tristique. Aenean ut eros sapien. Pellentesque lacinia arcu ac pulvinar iaculis. Donec sed scelerisque erat, non pellentesque mi. Morbi vehicula malesuada lacus, blandit lacinia est eleifend ut. Sed quis eleifend arcu. Praesent vel mi vitae ante porttitor imperdiet pulvinar et purus. Donec sit amet turpis tortor. Nulla pellentesque augue pulvinar mattis finibus. Sed tincidunt laoreet urna, non blandit lorem sodales vel. Suspendisse sit amet risus fringilla, pretium velit sed, elementum ante. Nulla vulputate eget enim sit amet rhoncus.\nSed suscipit nisi est, molestie tincidunt quam hendrerit nec. Ut vel hendrerit turpis. Fusce luctus nulla sem, vel porttitor tortor pellentesque ac. Donec a facilisis nisi, et egestas risus. Cras mattis diam nisl, eu laoreet eros congue mollis. Donec maximus, augue vitae bibendum pretium, tellus libero placerat leo, eget molestie metus turpis ut ipsum. Donec elit est, ultrices ut faucibus sit amet, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"objectives":["Lorem ipsum dolor sit amet, consectetur adipiscing elit."," Nulla pellentesque augue pulvinar mattis finibus. Sed tincidunt laoreet urna, non blandit lorem sodales vel.","Cras mattis diam nisl, eu laoreet eros congue mollis. Donec"],
      "price":"900",
			"instructors":[
				{
					"name":"Aalok Kumar",
          "photo":"https://media-exp3.licdn.com/dms/image/C4E03AQHmwWdj522ikg/profile-displayphoto-shrink_200_200/0/1606141897977?e=1630540800&v=beta&t=El3BHETguyYnudMGA4QA67qsVJCLkksffUwi_eKZSTE"
				},
				{
					"name":"Vaibhaw Kumar",
          "photo":"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
				}
			]
		},
		{
			"_id":"12",
			"image":"https://www.pngkit.com/png/full/96-967001_artificial-intelligence-grant-introduction-to-formal-languages-and.png",
      "message":"Do this project with. Learn and Enjoy",
      "title":"Gesture Controlled Drone",
			"description":"Lorem ipsum dolor \nsit amet, consectetur adipiscing elit. Etiam bibendum erat nec lorem bibendum, non volutpat nisl pellentesque. Mauris at rutrum tellus. Donec non tincidunt lorem. Etiam tincidunt nisi finibus velit dapibus cursus. Praesent tempor ipsum ut urna vestibulum, ac condimentum diam tristique. Aenean ut eros sapien. Pellentesque lacinia arcu ac pulvinar iaculis. Donec sed scelerisque erat, non pellentesque mi. Morbi vehicula malesuada lacus, blandit lacinia est eleifend ut. Sed quis eleifend arcu. Praesent vel mi vitae ante porttitor imperdiet pulvinar et purus. Donec sit amet turpis tortor. Nulla pellentesque augue pulvinar mattis finibus. Sed tincidunt laoreet urna, non blandit lorem sodales vel. Suspendisse sit amet risus fringilla, pretium velit sed, elementum ante. Nulla vulputate eget enim sit amet rhoncus.\nSed suscipit nisi est, molestie tincidunt quam hendrerit nec. Ut vel hendrerit turpis. Fusce luctus nulla sem, vel porttitor tortor pellentesque ac. Donec a facilisis nisi, et egestas risus. Cras mattis diam nisl, eu laoreet eros congue mollis. Donec maximus, augue vitae bibendum pretium, tellus libero placerat leo, eget molestie metus turpis ut ipsum. Donec elit est, ultrices ut faucibus sit amet, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"objectives":["Lorem ipsum dolor sit amet, consectetur adipiscing elit."," Nulla pellentesque augue pulvinar mattis finibus. Sed tincidunt laoreet urna, non blandit lorem sodales vel.","Cras mattis diam nisl, eu laoreet eros congue mollis. Donec"],
      "price":"700",
			"instructors":[
				{
					"name":"Aalok Kumar",
          "photo":"https://media-exp3.licdn.com/dms/image/C4E03AQHmwWdj522ikg/profile-displayphoto-shrink_200_200/0/1606141897977?e=1630540800&v=beta&t=El3BHETguyYnudMGA4QA67qsVJCLkksffUwi_eKZSTE"
				},
				{
					"name":"Vaibhaw Kumar",
          "photo":"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
				}
			]
		},
		{
			"_id":"123",
			"image":"https://www.pngkit.com/png/full/96-967001_artificial-intelligence-grant-introduction-to-formal-languages-and.png",
      "message":"Do this project with. Learn and Enjoy",
      "title":"Gesture Controlled Drone",
			"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum erat nec lorem bibendum, non volutpat nisl pellentesque. Mauris at rutrum tellus. Donec non tincidunt lorem. Etiam tincidunt nisi finibus velit dapibus cursus. Praesent tempor ipsum ut urna vestibulum, ac condimentum diam tristique. Aenean ut eros sapien. Pellentesque lacinia arcu ac pulvinar iaculis. Donec sed scelerisque erat, non pellentesque mi. Morbi vehicula malesuada lacus, blandit lacinia est eleifend ut. Sed quis eleifend arcu. Praesent vel mi vitae ante porttitor imperdiet pulvinar et purus. Donec sit amet turpis tortor. Nulla pellentesque augue pulvinar mattis finibus. Sed tincidunt laoreet urna, non blandit lorem sodales vel. Suspendisse sit amet risus fringilla, pretium velit sed, elementum ante. Nulla vulputate eget enim sit amet rhoncus.\nSed suscipit nisi est, molestie tincidunt quam hendrerit nec. Ut vel hendrerit turpis. Fusce luctus nulla sem, vel porttitor tortor pellentesque ac. Donec a facilisis nisi, et egestas risus. Cras mattis diam nisl, eu laoreet eros congue mollis. Donec maximus, augue vitae bibendum pretium, tellus libero placerat leo, eget molestie metus turpis ut ipsum. Donec elit est, ultrices ut faucibus sit amet, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"objectives":["Lorem ipsum dolor sit amet, consectetur adipiscing elit."," Nulla pellentesque augue pulvinar mattis finibus. Sed tincidunt laoreet urna, non blandit lorem sodales vel.","Cras mattis diam nisl, eu laoreet eros congue mollis. Donec"],
      "price":"600",
			"instructors":[
				{
					"name":"Aalok Kumar",
          "photo":"https://media-exp3.licdn.com/dms/image/C4E03AQHmwWdj522ikg/profile-displayphoto-shrink_200_200/0/1606141897977?e=1630540800&v=beta&t=El3BHETguyYnudMGA4QA67qsVJCLkksffUwi_eKZSTE"
				},
				{
					"name":"Vaibhaw Kumar",
          "photo":"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
				}
			]
		},
		{
			"_id":"1234",
			"image":"https://www.pngkit.com/png/full/96-967001_artificial-intelligence-grant-introduction-to-formal-languages-and.png",
      "message":"Do this project with. Learn and Enjoy",
      "title":"Gesture Controlled Drone",
			"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum erat nec lorem bibendum, non volutpat nisl pellentesque. Mauris at rutrum tellus. Donec non tincidunt lorem. Etiam tincidunt nisi finibus velit dapibus cursus. Praesent tempor ipsum ut urna vestibulum, ac condimentum diam tristique. Aenean ut eros sapien. Pellentesque lacinia arcu ac pulvinar iaculis. Donec sed scelerisque erat, non pellentesque mi. Morbi vehicula malesuada lacus, blandit lacinia est eleifend ut. Sed quis eleifend arcu. Praesent vel mi vitae ante porttitor imperdiet pulvinar et purus. Donec sit amet turpis tortor. Nulla pellentesque augue pulvinar mattis finibus. Sed tincidunt laoreet urna, non blandit lorem sodales vel. Suspendisse sit amet risus fringilla, pretium velit sed, elementum ante. Nulla vulputate eget enim sit amet rhoncus.\nSed suscipit nisi est, molestie tincidunt quam hendrerit nec. Ut vel hendrerit turpis. Fusce luctus nulla sem, vel porttitor tortor pellentesque ac. Donec a facilisis nisi, et egestas risus. Cras mattis diam nisl, eu laoreet eros congue mollis. Donec maximus, augue vitae bibendum pretium, tellus libero placerat leo, eget molestie metus turpis ut ipsum. Donec elit est, ultrices ut faucibus sit amet, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"objectives":["Lorem ipsum dolor sit amet, consectetur adipiscing elit."," Nulla pellentesque augue pulvinar mattis finibus. Sed tincidunt laoreet urna, non blandit lorem sodales vel.","Cras mattis diam nisl, eu laoreet eros congue mollis. Donec"],
      "price":"400",
			"instructors":[
				{
					"name":"Aalok Kumar",
          "photo":"https://media-exp3.licdn.com/dms/image/C4E03AQHmwWdj522ikg/profile-displayphoto-shrink_200_200/0/1606141897977?e=1630540800&v=beta&t=El3BHETguyYnudMGA4QA67qsVJCLkksffUwi_eKZSTE"
				},
				{
					"name":"Vaibhaw Kumar",
          "photo":"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
				}
			]
		}
	]

  const project=projects.filter(project=>project._id===match.params.project_id)[0]

  return(project?
    <div className="project-desc">
      <Payments show={show} amount={project.price} onHide={()=>setShow(false)} title={project.title}/>
      <div className="container">
        <div className="row pb-5">
          <div className="col-sm-6 col-12 text-center align-self-center">
            <h2 className="m-3" style={{fontWeight:'600'}}><i>{project.title}</i></h2>
            <p className="m-2">{project.message}</p>
            <button className="btn btn-primary btn-sm" onClick={()=>setShow(true)}><strong>Enroll Now</strong></button><br/>
            <small><strong>@</strong> <br/>Rs.{project.price} and <br/>get discounts upto Rs. 300</small>
          </div>
          <div className="col-sm-6 align-self-center p-3 top">
            <div style={{textAlign:'right'}}>
              <img src={project.image} alt="..." className="img-fluid"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4 style={{borderBottom:'1px solid #c4c4c4'}}>Project Description</h4>
            <p className="p-3 mb-3">{project.description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4 style={{borderBottom:'1px solid #c4c4c4'}}>Project Objectives</h4>
            <ol style={{paddingLeft:'25px'}}>
              {project.objectives.map((val,idx)=>{
                return <li key={idx}>{val}</li>
              })}
            </ol>
          </div>
        </div>
        <div className="row justify-content-center">
          <h4 style={{borderBottom:'1px solid #c4c4c4'}}>Our Instructors</h4>
          {project.instructors.map((val,idx)=>{
            return(
              <div className="col-6 col-sm-4 col-md-3 text-center" key={idx}>
                <div className="card mb-4">
                  <img src={val.photo} alt="..." className="img-fluid"/>
                  <div className="card-img-overlay" style={{backgroundColor:'transparent'}}>
                    <h6 style={{position:'absolute',bottom:'0',left:'5px',right:'5px',backgroundColor:'#0a0e2abe',color:'white',borderRadius:'20px',padding:'3px 4px', fontSize:'14px'}}>{val.name}</h6>
                  </div>
                </div>
              </div>  
            )
          })}
        </div>
      </div>
    </div>:""
  )
}

export default Project;