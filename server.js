console.log('Hier komt je server voor Sprint 10. Gebruik uit Sprint 9 alleen de code die je mee wilt nemen.')


import express, { response } from 'express'
import fetchJson from './helpers/fetch-json.js'


const app = express()
const apiUrl = 'https://fdnd-agency.directus.app/items/dh_services'

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// const fetchFromApi = async (endpoint) => {
//     const response = await fetchJson(apiUrl + endpoint);
//     return response.data;
//   };

// const fetchData = async () => {
//     const allDataAdvertisements = await fetchFromApi("/items/dh_services");
//     return allDataAdvertisements;
//   };

// let initiatievenData = await fetchData();

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

// // POST-route voor het liken van een service
// app.post("/like", async function (request, response) {
//     const { like_id } = request.body;
//     console.log("Like verzoek voor service met ID:", like_id);
//     const initiatief = initiatievenData.find(
//       (initiatief) => initiatief.id === parseInt(like_id)
//     );
//     if (initiatief) {
//       // Up het aantal likes voor de service
//       initiatief.likes = (initiatief.likes || 0) + 1;
//       // Update het aantal likes in de Directus API
//       try {
//         await fetchJson(apiUrl + `/items/dh_services/${like_id}`, {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ likes: initiatief.likes }),
//         });
//       } catch (error) {
//         console.error(
//           "Fout bij het patchen van het aantal likes in de Directus API:",
//           error
//         );
//         // Hier kun je een fout behandelen voor de user.
//       }
//       //Laat het weten als het liken succesvol is.
//       console.log("Aantal likes bijgewerkt voor service:", initiatief); // Log het bijgewerkte service object
//     } else {
//       // Laat het weten als de service niet gevonden is.
//       console.log("Service niet gevonden voor ID:", like_id);
//       response.status(404).send("Service niet gevonden");
//     }
//   });

app.set('port', process.env.PORT || 8009)

app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
