const Resident = require('./resident')
const Agent = require('./agent')
const PermanentGuest = require('./permanentGuest')
const Community = require('./community')
const ServiceTicket = require('./serviceTicket')

/********** Associations **********/

/*** Resident to Community ***/
Community.hasMany(Resident, { as: 'residents' })
Resident.belongsTo(Community)

/*** Resident to PermanentGuests ***/
Resident.hasMany(PermanentGuest, { as: 'guests' })
PermanentGuest.belongsTo(Resident)

/*** ServiceTickets ***/
ServiceTicket.belongsTo(Community)
Community.hasMany(ServiceTicket, { as: 'tickets' })

ServiceTicket.belongsTo(Agent)
Agent.hasMany(ServiceTicket, { as: 'tickets' })

module.exports = { Resident, Agent, PermanentGuest, Community, ServiceTicket }
