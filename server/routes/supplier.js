import express from 'express'
import { createSupplier, deleteSupplier, getSupplier, getSuppliers, updateSupplier,} from '../controllers/supplierController.js'


const route = express.Router()


route.post('/', createSupplier)
route.put('/:id', updateSupplier)
route.delete('/:id',deleteSupplier)
route.get('/:id',getSupplier)
route.get('/',getSuppliers)


export default route