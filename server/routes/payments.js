const express= require('express');
const Razorpay=require('razorpay');
const config=require('../config');
var crypto=require('crypto')
const router=express.Router();

const Payments = require('../models/payments');
const { nextTick } = require('process');
router.post("/orders", async (req, res) => {
    //console.log('called')
  try {
      const instance = new Razorpay({
          key_id: config.razorpay.KEY_ID,
          key_secret: config.razorpay.KEY_SECRET,
      });
      //console.log(req.body)
      const options = {
          amount: req.body.amount, // amount in smallest currency unit
          currency: "INR",
          receipt: req.body.reciept,
      };

      const order = await instance.orders.create(options);

      if (!order) return res.status(500).send("Some error occured");

      res.json(order);
  } catch (error) {
      res.status(500).send(error);
  }
});

router.post("/success", async (req, res, next) => {
  try {
      const {
          orderCreationId,
          razorpayPaymentId,
          razorpayOrderId,
          razorpaySignature,
      } = req.body;

      const shasum = crypto.createHmac("sha256", config.razorpay.KEY_SECRET);

      shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

      const digest = shasum.digest("hex");

      if (digest !== razorpaySignature)
          return res.status(400).json({ msg: "Transaction not legit!" });
      const payment=new Payments({message:"Succcessful payment",orderId:razorpayOrderId,paymentId:razorpayPaymentId})
      payment.save().then((payment)=>{
        if(payment){
          res.json(payment);
          }
      },err=>next(err))
  } catch (error) {
      res.status(500).send(error);
  }
});
module.exports = router;