const db = require('../server/db')
const { Agent, Community, PermanentGuest, Resident, ServiceTicket, PropertyManager } = require('../server/db/models')
const chalk = require('chalk')

const generateRandomNumber = () => Math.floor(Math.random() * 9)

const generateXNums = x => {
  let string = ''
  for(i = 0; i < x; i++) {
    string = `${string}${generateRandomNumber()}`
  }
  return string
}

const generatePhoneNumber = areaCode => {
  let phone = `${areaCode}${generateXNums(3)}${generateXNums(4)}`
  return phone
}

const generateRandomAddress = streetName => {
  return `${generateXNums(3)} ${streetName}`
}


async function seed() {
  await db.sync({ force: true })
  console.log(chalk.bgBlue.white.bold('db synced!'))

  const communities = await Promise.all([
    Community.create({ name: 'Sunny Pines', gateOpen: false }),
    Community.create({ name: 'Florida Estates', gateOpen: false }),
    Community.create({ name: 'Orlando Suites', gateOpen: false }),
    Community.create({ name: 'Golden Bridges', gateOpen: false }),
    Community.create({ name: 'Westmire Estates', gateOpen: false })
  ])

  const residents = await Promise.all([
    Resident.create({ firstName: 'Cathy', lastName: 'Bauder', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(786), communityId: communities[0].id }),
    Resident.create({ firstName: 'Carin', lastName: 'Pearson', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(786), communityId: communities[0].id, }),
    Resident.create({ firstName: 'Shari', lastName: 'Mcgillivray', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(786), communityId: communities[0].id, }),
    Resident.create({ firstName: 'Erin', lastName: 'Freese', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(786), communityId: communities[0].id, }),
    Resident.create({ firstName: 'Jacquelyne', lastName: 'Rickman', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(850), communityId: communities[1].id }),
    Resident.create({ firstName: 'Vonnie', lastName: 'Pye', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(850), communityId: communities[1].id }),
    Resident.create({ firstName: 'Annalisa', lastName: 'Lodi', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(850), communityId: communities[1].id }),
    Resident.create({ firstName: 'Cristen', lastName: 'Dingman', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(850), communityId: communities[1].id  }),
    Resident.create({ firstName: 'Roselyn', lastName: 'Lueck', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[2].id }),
    Resident.create({ firstName: 'Phylis', lastName: 'Casas', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[2].id }),
    Resident.create({ firstName: 'Latisha', lastName: 'Hilty', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[2].id }),
    Resident.create({ firstName: 'Catherin', lastName: 'Steffensmeier', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[2].id }),
    Resident.create({ firstName: 'Norbert', lastName: 'Riggle', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[3].id }),
    Resident.create({ firstName: 'Milagro', lastName: 'Huling', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[3].id }),
    Resident.create({ firstName: 'Shandi', lastName: 'Gardin', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[2].id }),
    Resident.create({ firstName: 'Pearle', lastName: 'Sottile', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[3].id }),
    Resident.create({ firstName: 'Hellen', lastName: 'Gosse', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[3].id }),
    Resident.create({ firstName: 'Yesenia', lastName: 'Bickett', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(850), communityId: communities[1].id}),
    Resident.create({ firstName: 'Lemuel', lastName: 'Stucky', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(786), communityId: communities[0].id }),
    Resident.create({ firstName: 'Chasity', lastName: 'Peete', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(850), communityId: communities[1].id }),
    Resident.create({ firstName: 'Soledad', lastName: 'Merkel', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[2].id }),
    Resident.create({ firstName: 'Alisia', lastName: 'Campa', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(786), communityId: communities[0].id }),
    Resident.create({ firstName: 'Shonna', lastName: 'Rosebrock', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[3].id }),
    Resident.create({ firstName: 'Palma', lastName: 'Laplant', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[3].id }),
    Resident.create({ firstName: 'Marvis', lastName: 'Bissonette', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[3].id }),
    Resident.create({ firstName: 'Clarita', lastName: 'Elvira', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[3].id }),
    Resident.create({ firstName: 'Gil', lastName: 'Faux', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[3].id }),
    Resident.create({ firstName: 'Isa', lastName: 'Letchworth', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[3].id }),
    Resident.create({ firstName: 'Penelope', lastName: 'Garibay', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(813), communityId: communities[4].id }),
    Resident.create({ firstName: 'Slyvia', lastName: 'Marland', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(813), communityId: communities[4].id }),
    Resident.create({ firstName: 'Jeromy', lastName: 'Milbourne', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(813), communityId: communities[4].id }),
    Resident.create({ firstName: 'Herbert', lastName: 'Plasse', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(813), communityId: communities[4].id }),
    Resident.create({ firstName: 'Pauletta', lastName: 'Ranieri', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(813), communityId: communities[4].id }),
    Resident.create({ firstName: 'Regenia', lastName: 'Lucas', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(813), communityId: communities[4].id }),
    Resident.create({ firstName: 'James', lastName: 'OReilly', address: generateRandomAddress('Laurel Drive'), phoneNum: '516-476-6739', communityId: communities[4].id })
  ])

  const agents = await Promise.all([
    Agent.create({ firstName: 'James', lastName: 'OReilly', serviceCount: 0, isAdmin: true }),
    Agent.create({ firstName: 'Roy', lastName: 'Papsedeiro', serviceCount: 0, isAdmin: true }),
    Agent.create({ firstName: 'Alison', lastName: 'Papsedeiro', serviceCount: 0, isAdmin: false })
  ])

  const permanentGuests = await Promise.all([
    PermanentGuest.create({ firstName: 'Roy', lastName: 'Paps', plateNumber: 'HND4553', phoneNumber: '7726319771', licenseNumber: '123456789', residentId: residents[residents.length - 1].id })
  ])

  const propertyManagers = await Promise.all([
    PropertyManager.create({ userName: 'SunnyPinesManager', email: 'Manager@sunnypines.com', password: '123', communityId: communities[0].id }),
    PropertyManager.create({ userName: 'FloridaEstatesManager', email: 'Manager@FE.com', password: '123', communityId: communities[1].id }),
    PropertyManager.create({ userName: 'OrlandoSuitesManager', email: 'Manager@OS.com', password: '123', communityId: communities[2].id }),
    PropertyManager.create({ userName: 'GoldenBridgesManager', email: 'Manager@GB.com', password: '123', communityId: communities[3].id }),
    PropertyManager.create({ userName: 'WestmireEstatesManager', email: 'Manager@WE.com', password: '123', communityId: communities[4].id })
  ])
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log(chalk.white.bgRed.bold('closing db connection'))
    db.close()
    console.log(chalk.white.bgGreen.bold('db connection closed'))
  })
  