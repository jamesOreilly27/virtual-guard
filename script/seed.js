const db = require('../server/db')
const { Agent, Community, PermanentGuest, Resident, ServiceTicket, PropertyManager, Visit } = require('../server/db/models')
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
    Resident.create({ userName: 'testuser', email: 'test1@email.com', password: '123', firstName: 'Cathy', lastName: 'Bauder', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(786), communityId: communities[0].id }),
    Resident.create({ userName: 'testuser', email: 'test2@email.com', password: '123', firstName: 'Carin', lastName: 'Pearson', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(786), communityId: communities[0].id, }),
    Resident.create({ userName: 'testuser', email: 'test3@email.com', password: '123', firstName: 'Shari', lastName: 'Mcgillivray', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(786), communityId: communities[0].id, }),
    Resident.create({ userName: 'testuser', email: 'test4@email.com', password: '123', firstName: 'Erin', lastName: 'Freese', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(786), communityId: communities[0].id, }),
    Resident.create({ userName: 'testuser', email: 'test5@email.com', password: '123', firstName: 'Jacquelyne', lastName: 'Rickman', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(850), communityId: communities[1].id }),
    Resident.create({ userName: 'testuser', email: 'test6@email.com', password: '123', firstName: 'Vonnie', lastName: 'Pye', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(850), communityId: communities[1].id }),
    Resident.create({ userName: 'testuser', email: 'test7@email.com', password: '123', firstName: 'Annalisa', lastName: 'Lodi', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(850), communityId: communities[1].id }),
    Resident.create({ userName: 'testuser', email: 'test8@email.com', password: '123', firstName: 'Cristen', lastName: 'Dingman', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(850), communityId: communities[1].id  }),
    Resident.create({ userName: 'testuser', email: 'test9@email.com', password: '123', firstName: 'Roselyn', lastName: 'Lueck', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[2].id }),
    Resident.create({ userName: 'testuser', email: 'test10@email.com', password: '123', firstName: 'Phylis', lastName: 'Casas', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[2].id }),
    Resident.create({ userName: 'testuser', email: 'test11@email.com', password: '123', firstName: 'Latisha', lastName: 'Hilty', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[2].id }),
    Resident.create({ userName: 'testuser', email: 'test12@email.com', password: '123', firstName: 'Catherin', lastName: 'Steffensmeier', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[2].id }),
    Resident.create({ userName: 'testuser', email: 'test13@email.com', password: '123', firstName: 'Norbert', lastName: 'Riggle', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[3].id }),
    Resident.create({ userName: 'testuser', email: 'test14@email.com', password: '123', firstName: 'Milagro', lastName: 'Huling', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[3].id }),
    Resident.create({ userName: 'testuser', email: 'test15@email.com', password: '123', firstName: 'Shandi', lastName: 'Gardin', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[2].id }),
    Resident.create({ userName: 'testuser', email: 'test16@email.com', password: '123', firstName: 'Pearle', lastName: 'Sottile', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[3].id }),
    Resident.create({ userName: 'testuser', email: 'test17@email.com', password: '123', firstName: 'Hellen', lastName: 'Gosse', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[3].id }),
    Resident.create({ userName: 'testuser', email: 'test18@email.com', password: '123', firstName: 'Yesenia', lastName: 'Bickett', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(850), communityId: communities[1].id}),
    Resident.create({ userName: 'testuser', email: 'test19@email.com', password: '123', firstName: 'Lemuel', lastName: 'Stucky', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(786), communityId: communities[0].id }),
    Resident.create({ userName: 'testuser', email: 'test20@email.com', password: '123', firstName: 'Chasity', lastName: 'Peete', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(850), communityId: communities[1].id }),
    Resident.create({ userName: 'testuser', email: 'test21@email.com', password: '123', firstName: 'Soledad', lastName: 'Merkel', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[2].id }),
    Resident.create({ userName: 'testuser', email: 'test22@email.com', password: '123', firstName: 'Alisia', lastName: 'Campa', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(786), communityId: communities[0].id }),
    Resident.create({ userName: 'testuser', email: 'test23@email.com', password: '123', firstName: 'Shonna', lastName: 'Rosebrock', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[3].id }),
    Resident.create({ userName: 'testuser', email: 'test24@email.com', password: '123', firstName: 'Palma', lastName: 'Laplant', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[3].id }),
    Resident.create({ userName: 'testuser', email: 'test25@email.com', password: '123', firstName: 'Marvis', lastName: 'Bissonette', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[3].id }),
    Resident.create({ userName: 'testuser', email: 'test26@email.com', password: '123', firstName: 'Clarita', lastName: 'Elvira', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[3].id }),
    Resident.create({ userName: 'testuser', email: 'test27@email.com', password: '123', firstName: 'Gil', lastName: 'Faux', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[3].id }),
    Resident.create({ userName: 'testuser', email: 'test28@email.com', password: '123', firstName: 'Isa', lastName: 'Letchworth', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(941), communityId: communities[3].id }),
    Resident.create({ userName: 'testuser', email: 'test29@email.com', password: '123', firstName: 'Penelope', lastName: 'Garibay', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(813), communityId: communities[4].id }),
    Resident.create({ userName: 'testuser', email: 'test30@email.com', password: '123', firstName: 'Slyvia', lastName: 'Marland', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(813), communityId: communities[4].id }),
    Resident.create({ userName: 'testuser', email: 'test31@email.com', password: '123', firstName: 'Jeromy', lastName: 'Milbourne', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(813), communityId: communities[4].id }),
    Resident.create({ userName: 'testuser', email: 'test32@email.com', password: '123', firstName: 'Herbert', lastName: 'Plasse', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(813), communityId: communities[4].id }),
    Resident.create({ userName: 'testuser', email: 'test33@email.com', password: '123', firstName: 'Pauletta', lastName: 'Ranieri', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(813), communityId: communities[4].id }),
    Resident.create({ userName: 'testuser', email: 'test34@email.com', password: '123', firstName: 'Regenia', lastName: 'Lucas', address: generateRandomAddress('Laurel Drive'), phoneNum: generatePhoneNumber(813), communityId: communities[4].id }),
    Resident.create({ userName: 'testuser', email: 'test35@email.com', password: '123', firstName: 'James', lastName: 'OReilly', address: generateRandomAddress('Laurel Drive'), phoneNum: '516-476-6739', communityId: communities[4].id })
  ])

  const agents = await Promise.all([
    Agent.create({ firstName: 'James', lastName: 'OReilly', userName: 'joreilly', email: 'james.oreilly926@gmail.com', password: '123456', serviceCount: 0, isAdmin: true }),
    Agent.create({ firstName: 'Roy', lastName: 'Papsedeiro', userName: 'roypaps', email: 'james.oreilly926@gmail.com', password: 'abcdef', serviceCount: 0, isAdmin: true }),
    Agent.create({ firstName: 'Alison', lastName: 'Papsedeiro', userName: 'allpaps', email: 'james.oreilly926@gmail.com', password: 'abcdef', serviceCount: 0, isAdmin: false })
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

  const visits = await Promise.all([
    Visit.create({ startWindow: new Date('December 3, 2019 06:00:00'), endWindow: new Date('December 3, 2019 07:00:00'), codeWasUsed: true, startTime: new Date('December 3, 2019 06:30:00'), endTime: new Date('December 3, 2019 08:30:00'), residentId: 35, permanentGuestId: 1 }),
    Visit.create({ startWindow: new Date('December 5, 2019 06:00:00'), endWindow: new Date('December 5, 2019 07:00:00'), startTime: null, endTime: null, codeWasUsed: false, residentId: 35, permanentGuestId: 1 })
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
  