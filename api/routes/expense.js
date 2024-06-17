import express from 'express'
import { createExpense, getExpenses } from '../controllers/expenseController.js'

const route = express.Router()

route.post('/',createExpense)
route.get('/',getExpenses)


export default route