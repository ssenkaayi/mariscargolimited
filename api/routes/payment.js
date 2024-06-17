import express from 'express'
import { createPayment, getPayments, getPayment, deletePayment,updatePayment } from '../controllers/paymentController.js'

const route = express.Router()

route.post('/',createPayment)
route.get('/',getPayments)
route.get('/:id',getPayment)
route.put('/:id',updatePayment)
route.delete('/:id',deletePayment)
export default route