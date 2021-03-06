import React,{useState} from 'react'
import './Projects.css'
import {NavLink} from 'react-router-dom'
import Payments from '../payments/Payment'

const Projects=()=>{
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

	const [pay,setPay]=useState({amount:0,title:'',show:false})

	return (
		<div className="projects">
			<Payments show={pay.show} onHide={()=>setPay({amount:0,title:'',show:false})} title={pay.title} amount={pay.amount} />
			<div className="hero">
				<div className="title">
					<h4>Projects</h4>
					<h1>Join our projects<br/>to develop AI for the<br/>benefit of everyone.</h1>
				</div>
      </div>
			<div className="container projects-list p-1">
				<div className="row">
					{projects?projects.map((val,idx)=>{
						return(
							<div className="col-sm-12 col-md-6 col-xs-4 col-12 text-center" key={idx}>
								<div className="card m-3">
									<img src="https://media.istockphoto.com/vectors/human-brain-and-artificial-intelligence-concept-vector-id1138745016?k=6&m=1138745016&s=612x612&w=0&h=gdBMRwTv_5d97OgSQSq1XRZ2kMLqEpXBcV1hS21I2wY=" alt="..." className="img-fluid"/>
									<div className="card-body">
										<h5 className="card-title">{val.title}</h5>
										<p className="card-text">{val.description}</p>
										<div className="buttons" style={{textAlign:'right'}}>
										<button onClick={()=>{
												setPay({amount:val.price,title:val.title,show:true})
												}} className="btn btn-warning m-2"> 
												Enroll Now
											</button>			

											<NavLink to={`/projects/${val._id}`} className="btn btn-primary m-2">Read More...</NavLink>
										</div>
									</div>
								</div>
							</div>
						)
					}):""}
				</div>
			</div>

			{/* <div className="text-center">
				<button onClick={()=>{
					setPaymentData({...paymentData,amount:700})
					setShow(true)
					}} className="btn btn-warning text-dark"> 
					Buy Now for 700
				</button>
			</div> */}
		</div>
	)
}

export default Projects;