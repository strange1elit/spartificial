import React,{useState} from 'react'
import axios from 'axios'
import {Modal} from 'react-bootstrap'
const url="http://localhost:3000/api/payments"

const Payments=({show,amount,onHide,title})=>{
	const [paymentData,setPaymentData]=useState({reciept:Date.now(),referal:''})

	const [isValid,setValid]=useState({message:null,discount:0})


	//console.log(amount)
	const referalCodes=[
		{
			"code":"SPART100",
			"discount":"100"
		},
		{
			"code":"SP150",
			"discount":"150"
		},
		{
			"code":"AI099",
			"discount":"99"
		},
		{
			"code":"SPART200",
			"discount":"200"
		},
		{
			"code":"ART399",
			"discount":"399"
		},
	]
	const onModalHide=()=>{
		setValid({message:null,discount:0})
		setPaymentData({reciept:Date.now(),referal:''})
    onHide()
	}
	const onChangeReferral=(e)=>{
		//console.log(e.target.value)
		var cod=referalCodes.filter(code=>code.code===e.target.value)[0]
		if(cod) {setValid({message:"Discount of Rs. "+cod.discount,discount:cod.discount})}
		else setValid({message:"Invalid Code",discount:0})
		if(e.target.value==='') setValid({message:null,discount:0})
		setPaymentData({...paymentData,referal:e.target.value})
	}

	const loadScript=(src)=>{
    return new Promise((resolve)=>{
      const script=document.createElement("script");
      script.src=src;
      script.onload=()=>{
        resolve(true);
      }
      script.onerror=()=>{
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }
  async function displayRazorpay(e){
    e.preventDefault()
		if(isValid.message!=="Invalid Code"){
			//console.log(paymentData)
			const res=await loadScript("https://checkout.razorpay.com/v1/checkout.js")
			if(!res){
				alert("Razorpay SDK failed to load!")
				return;
			}
			//paymentData.amount=amount?amount*100-isValid.discount*100:0
			//console.log(paymentData)
			const result=await axios.post(url+"/orders",paymentData);
			if(!result){
				alert("Server error!!!")
				return;
			}
			setPaymentData({reciept:Date.now(),referal:''})
			//console.log(result.data)
			const {amount,id:order_id,currency}=result.data;
			const options = {
				key: "rzp_test_Fh3AgbAXuwfXuF", // Enter the Key ID generated from the Dashboard
				amount: amount.toString(),
				currency: currency,
				name: "Spartificial",
				description: "",
				image: "./logo192.png",
				order_id: order_id,
				handler: async function (response) {
						const data = {
								orderCreationId: order_id,
								razorpayPaymentId: response.razorpay_payment_id,
								razorpayOrderId: response.razorpay_order_id,
								razorpaySignature: response.razorpay_signature,
								amount:amount/100
						};

						const result = await axios.post(url+"/success", data);

						alert(JSON.stringify(result.data));
				},
				notes: {
						address: "Spartificial",
				},
			};
			onModalHide()
			const paymentObject=new window.Razorpay(options)
			paymentObject.open()
		}
  }

	return (
			<Modal backdrop="static" size="lg" centered show={show} onHide={()=>onModalHide()}>

				<Modal.Header style={{backgroundColor:'magenta',color:'aliceblue',fontWeight:'bold'}}>Enroll in {title}</Modal.Header>
				<form onSubmit={displayRazorpay}>
					<Modal.Body>
						<div className="row payment">
							<div className="col-sm-6">
								<label htmlFor="amount">Amount:</label>
								<input id="amount" disabled required type="number" name="amount" value={amount} placeholder="Amount"/>							
							</div>
							<div className="col-sm-6">
								<label htmlFor="referal">Referral Code:</label>
								<input id="referal" type="text" name="amount" value={paymentData.referal} onChange={onChangeReferral} placeholder="Referral Code"/>	
								{isValid.message==="Invalid Code"?<small className="text-danger text-right">{isValid.message}</small>:<small className="text-right">{isValid.message}</small>}						
							</div>
						</div>
						<div className="refund text-center p-3">
							<small className="text-muted">By paying you agree to our <a href="#refund">Refund Policy</a>. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac</small>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<button className="btn btn-danger" type="button" onClick={onHide}>Cancel</button>
						<button className="btn btn-primary" type="submit" onClick={()=>paymentData.amount=(amount-isValid.discount)*100}>Pay {amount-isValid.discount}</button>
					</Modal.Footer>
				</form>
			</Modal>
	)
}

export default Payments;