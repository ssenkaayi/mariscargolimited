import express from 'express'
import { createClient, deleteClient, getClient, getClients, updateClient } from '../controllers/clientController.js'

const route = express.Router()

route.post('/',createClient)
route.get('/',getClients)
route.put('/:id',updateClient)
route.get('/:id',getClient)
route.delete('/:id',deleteClient)


export default route

