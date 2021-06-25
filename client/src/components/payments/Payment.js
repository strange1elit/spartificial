import React,{useState} from 'react'
import axios from 'axios'
const Payment=()=>{
  const [paymentData,setPaymentData]=useState({amount:1000,reciept:Date.now()});

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
    e.preventDefault({amount:50000,reciept:Date.now()})
    setPaymentData({})
    const res=await loadScript("https://checkout.razorpay.com/v1/checkout.js")
    if(!res){
      alert("Razorpay SDK failed to load!")
      return;
    }
    const result=await axios.post("http://localhost:3000/payments/orders",paymentData);
    if(!result){
      alert("Server error!!!")
      return;
    }
    //console.log(result.data)
    const {amount,id:order_id,currency}=result.data;
    const options = {
      key: "rzp_test_Fh3AgbAXuwfXuF", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Spartificial",
      description: "Creating a community of revolutionary passionate SP-ARTIFICIAL nerds.",
      image: "./logo192.png",
      order_id: order_id,
      handler: async function (response) {
          const data = {
              orderCreationId: order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
          };

          const result = await axios.post("http://localhost:3000/payments/success", data);

          alert(JSON.stringify(result.data));
      },
      notes: {
          address: "Spartificial",
      },
    };
    const paymentObject=new window.Razorpay(options)
    paymentObject.open()
  }

  return(
      <button type="button" onClick={displayRazorpay}>
        Go to Payment
      </button>
  )
}

export default Payment