const express = require('express')
const app = express()
const PORT = process.env.PORT || 2012

const chalk = require('chalk')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const path = require('path'); 
const https = require('https')
const fs = require('fs')
const dir = require('os').homedir()

const db = require('./db')

let server
let options

const createApp = () => {
  options = {
    key: fs.readFileSync( `${dir}/ssl/localhost/localhost.key` ),
    cert: fs.readFileSync( `${dir}/ssl/localhost/localhost.crt` ),
    requestCert: false,
    rejectUnauthorized: false
  }
  
  server = https.createServer(options, app)
  
  app.use(volleyball)
  app.use(express.json())
  app.use(express.urlencoded())
  app.use(express.static(path.join(__dirname, '..', 'public')))

  app.use('/api', require('./routes'))
  
  app.use('/static', express.static(path.join(__dirname, 'public')))
  app.use('*', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'public', 'index.html')))
}

const sync = () => {
  console.log(chalk.white.bgRed.bold('Sync Database'))
  return db.sync()
}

const startListening = () => {
  server.listen(PORT, () => console.log(chalk.white.bgGreen.bold(`We are live on port ${server.address().port}`)))
}

if (require.main === module) {
  sync()
  .then(createApp)
  .then(startListening)
} else {
  createApp()
}
