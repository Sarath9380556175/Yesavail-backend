const express=require('express')

const router=express.Router();
 
const signupcontroller=require('../controllers/signup')

const ordercontroller=require('../controllers/order')

const rateuscontroller=require('../controllers/rateus')

const addresscontroller=require('../controllers/address')

const locationcontroller=require('../controllers/locations')

const statecontroller=require('../controllers/states')

const cartcontroller=require('../controllers/cart')

router.post('/signup', signupcontroller.getsignupdetails)

router.post('/login', signupcontroller.getlogindetails)

router.post('/orders', ordercontroller.getorderdetails)

router.post('/rateus', rateuscontroller.getrateusdetails)

router.post('/address' ,addresscontroller.getaddressdetails)

router.get('/getsignupdetails',signupcontroller.postsignupdetails)

router.get('/locations', locationcontroller.getlocations);

router.post('/states', statecontroller.getstates);

router.post('/order', ordercontroller.getmyorderdetails)

router.post('/cart', cartcontroller.postcartdetails)

router.post('/getcartdetails', cartcontroller.getcartdetails)

module.exports=router;