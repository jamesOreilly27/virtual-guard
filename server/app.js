const express = require('express')
const app = express()
const session = require('express-session')
const PORT = process.env.PORT || 2012

const chalk = require('chalk')
const volleyball = require('volleyball')
const path = require('path'); 
const https = require('https')
const fs = require('fs')
const dir = require('os').homedir()

const db = require('./db')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const sessionStore = new SequelizeStore({db})
const passport = require('passport')


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

  // passport registration
  passport.serializeUser((user, done) => done(null, user.id))

  passport.deserializeUser((pk, done) =>
    db.models.agent.findByPk(pk)
      .then(user => done(null, user))
      .catch(done))
  
  app.use(volleyball)
  app.use(express.json())
  app.use(express.urlencoded())
  app.use(express.static(path.join(__dirname, '..', 'public')))

  app.use(session({
    secret: process.env.SESSION_SECRET || 'Three may keep a secret, if two of them are dead',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
  }));

  app.use(passport.initialize())
  app.use(passport.session())

  app.use('/api', require('./routes'))
  app.use('/auth', require('./auth'))
  
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
