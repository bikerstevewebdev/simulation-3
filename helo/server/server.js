const express = require('express')
const session = require('express-session')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const massive = require('massive')
const c = require('./controller')
require('dotenv').config()

const { SESSION_SECRET, SERVER_PORT, DOMAIN, CLIENT_ID, CLIENT_SECRET, CALLBACK_URL, CONNECTION_STRING } = process.env

const port = SERVER_PORT


const app = express()
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(express.json())

app.use(passport.initialize())  //unclear as the why, but needed to use passport
app.use(passport.session())  // hands the session over to Passport

passport.use( new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, (accessToken, refreshToken, extraParams, profile, done) => {
    const { id, displayName, picture } = profile
    
    const db = app.get('db')
    

    // console.log(`profile: ${profile}`)
    // console.log(`profile: ${profile} id: ${profile.id} display name:${profile.displayName} picture:${profile.picture}`)
    
    
    db.get_user([id]).then( users => {

        console.log(`getUser users: ${users[0].id}`)

        if ( users[0] ){
          return done(null, users[0])
        } 
        else { //when someone is logginG in for the first time. 
        console.log(`users: ${users} profile: ${profile} id: ${profile.id} display name:${profile.displayName} picture:${profile.picture}`)
            
          db.create_user([displayName, picture, id]).then( createdUser => {
              console.log(`Maybean arr after db create: ${createdUser}`)
            return done(null,{ id: createdUser.id } )
          } )
        }
      } ).catch(err => {
          console.log(err)
      })
      console.log('listening?')
}) )

app.get('/auth', passport.authenticate('auth0'))

app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/dashboard',
    failureRedirect: 'http://localhost:3000/AUTHFAIL'
}))
// app.get('/auth', passport.authenticate('auth0', {
    //     successRedirect: 'http://localhost:3000' //,
    //     // failureRedirect: 'http://localhost:3000'
    // }))
    
    passport.serializeUser((user, done) => {
        console.log(`serial user ${user}`)
        done(null, user)
    })
    passport.deserializeUser((user, done) => {
        app.get('db').find_session_user([user.id])
    .then( user => {
        console.log(`Deserial User: ${user}`)
      return done(null, user[0]);
    })
    })

// app.post('')
app.get('/user', c.getUser)

app.get('/posts/:id', c.getPosts)

app.get('/posts/search', c.filterPosts)
    
    
    massive(CONNECTION_STRING).then( db => {
        app.set('db', db)
        app.listen(port, () => {
            console.log(`Authentication with HELO! Port ${port}`)
        })
      })
    