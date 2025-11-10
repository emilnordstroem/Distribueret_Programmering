const express = require('express')
const session = require('express-session')

const app = express()

// MIDDLEWARE AFDELING
app.use(express.static('assets'))
app.set('view engine', 'pug')
app.use(session({
  secret: 'CE5DFB6B-4FFF-45BF-A45D-8F5D86013640',
  saveUninitialized: true,
  resave: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

function checkSecretPages(request, response, next) {
  let secretPages = '/secret'
  if (request.url === secretPages) {
    if (!request.session.isLoggedIn) {
      console.log('Forsøg på ulovlig indtrængen 👩🏿‍✈️')
      response.redirect('/')
    } else {
      next()
    }
  } else {
    next()
  }
}

app.use(checkSecretPages)

// ENDPOINT/ROUTES AFDELING
app.get('/', (request, response) => {
  let isLoggedIn = false
  if (request.session.isLoggedIn) {
    isLoggedIn = true
  }
  response.render('home', { knownUser: isLoggedIn })
})

app.get('/earthquakes/:place', (request, response)=>{
  const place = request.params.place
  response.render('detail', {place:place})
})

app.post('/login', (request, response) => {
  const { username, password } = request.body
  if (checkUser(username, password)) {
    request.session.isLoggedIn = true
    request.session.username = username
  }
  response.redirect('/')
})

app.get('/secret', async (request, response) => {
  const eq = await getEarthquakes()
  response.render('secret', {
    knownUser: request.session.isLoggedIn, 
    user: request.session.username,
    eq: eq
  })
})

app.get('/logout', (request, response) => {
  request.session.destroy()
  response.redirect('/')
})

// START AFDELINGEN
app.listen(8000, () => {
  console.log('Juhuuu, nu kører det for dig🔥')
})

// simulering af databaseopkald
function checkUser(username, password) {
  let returnvalue = false
  if (username == 'BENT' && password == '123') {
    returnvalue = true
  }
  return returnvalue
}

async function getEarthquakes() {
  const earthquakeUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson'
  let json = await get(earthquakeUrl)
  return selectEarthquakes(json)
}

async function get(url) {
  const respons = await fetch(url);
  if (respons.status !== 200) // OK
    throw new Error(respons.status);
  return await respons.json();
}

function selectEarthquakes(earthquakes) {
  return earthquakes.features
    .filter(quake => quake.properties.mag >= 6)
    .sort((quake1, quake2) => quake2.properties.mag - quake1.properties.mag);
}