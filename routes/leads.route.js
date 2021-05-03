var express=require('express')
var leadsRouter=express.Router()
var controller=require('../Controller/leads.controller')

leadsRouter.post('/addlead',controller.addLead)
leadsRouter.get('/getleads',controller.getLeads)
leadsRouter.delete('/deletelead/:id',controller.deleteLead)
leadsRouter.put('/updatelead',controller.updateLead)
// leadsRouter.get('/getcount',controller.getCount)
leadsRouter.post('/getleadsbycourse',controller.leadsBy)
leadsRouter.post('/getleadsbyads',controller.getLeadsByAds)

module.exports=leadsRouter