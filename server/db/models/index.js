const Resident = require('./resident')
const Agent = require('./agent')
const PermanentGuest = require('./permanentGuest')
const Community = require('./community')
const ServiceTicket = require('./serviceTicket')
const PropertyManager = require('./propertyManager')
const Visit = require('./visit')

/********** Associations **********/

/*** Resident to Community ***/
Community.hasMany(Resident, { as: 'residents' })
Resident.belongsTo(Community)

/*** Resident to PermanentGuests ***/
Resident.hasMany(PermanentGuest, { as: 'guests'})
PermanentGuest.belongsTo(Resident)

Visit.belongsTo(PermanentGuest)
PermanentGuest.hasMany(Visit, { as: 'visits' })

Resident.hasMany(Visit, { as: 'visits' })
Visit.belongsTo(Resident)

/*** ServiceTickets ***/
ServiceTicket.belongsTo(Community)
Community.hasMany(ServiceTicket, { as: 'tickets' })

ServiceTicket.belongsTo(Agent)
Agent.hasMany(ServiceTicket, { as: 'tickets' })

/*** Community to PropertyManager ***/
Community.hasOne(PropertyManager)


/********** Scopes ***********/
Community.addScope('community-home', { include: ['residents', PropertyManager] })
Resident.addScope('resident-homepage', { include: ['guests', 'visits'] })
ServiceTicket.addScope('ticket-queue', { include: [{ model: Community }]})

module.exports = { Resident, Agent, PermanentGuest, Community, ServiceTicket, PropertyManager, Visit }
