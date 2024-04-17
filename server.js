console.log('Hier komt je server voor Sprint 10. Gebruik uit Sprint 9 alleen de code die je mee wilt nemen.')


import express, { response } from 'express'
import fetchJson from './helpers/fetch-json.js'


const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

const apiUrl = 'https://fdnd-agency.directus.app/items/dh_services'

app.get('/', function (request, response) {
    // fetchJson("https://fdnd-agency.directus.app/admin/content/dh_services").then((apiData) => {

    response.render('index')
    })
// })
// app.get('/detail/:id', function(request, response) {
//     fetchJson('https://fdnd-agency.directus.app/items/dh_services?filter={"id": '+ request.params.id +'}').then((initiatiefDetail) => {
//       response.render('detail', {
//         initiatief: initiatiefDetail.data[0]
//       })
//     })
//   })
// app.get('/initiatieven/:id', function (request, response){
//     fetchJson('https://fdnd-agency.directus.app/items/dh_services?filter={"id":' + request.params.id + '}').then((initiatievenData) => {

//     response.render('initiatieven', {initiatieven: initiatievenData.data[0]})
//     })

// })


app.get('/initiatieven', function (request, response){
    fetchJson('https://fdnd-agency.directus.app/items/dh_services').then((initiatievenData) => {

    response.render('initiatieven', {initiatieven: initiatievenData.data})
  })
  
})

app.get('/detail/:id', function (request, response){
  fetchJson(apiUrl + '/' + request.params.id).then((initiatiefDetail) => {

    response.render('detail', {initiatief: initiatiefDetail.data})
    })
})

app.get('/aanmelden', function (request, response){
  fetchJson(apiUrl).then((initiatievenData) => {

    response.render('aanmelden', {initiatief: initiatievenData.data})
  })
})

app.set('port', process.env.PORT || 8009)

app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
