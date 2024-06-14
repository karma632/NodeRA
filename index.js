const express = require('express');
const bodyParser = require('body-parser')
const app = express();
//seting port
const port = 3000;
const host = 'localhost';

//the arrray after using the post requests on the postman is 
// displaying as null so we will have to 
//PARSE JSON FILE USING EXPRESS
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.use(bodyParser.json());


//setting the array for the api data
let movies = [
 {
    id: "1",
    title: 'Godzilla',
    director: 'Mr Daniel',
    release_date: '11th april',
 },
 {
    id: "2",
    title: 'The Boys',
    director: 'Mr Johnny',
    release_date: '20th may',
 },
];

//get the movie list in json form
app.get("/movie", (req, res) =>{
    res.json(movies);
});

//to add movies to the list
app.post("/movie", (req, res)=>{

//    //This line extracts the data sent in the body of the POST request and assigns it to a constant variable movie
//    //req.body contains the data sent by the client (like a JSON object or form data).
   const movie = req.body;

   console.log(movie);

//    //This line adds the movie data to an array called movies.
//    //movies should be an array that was defined earlier in your code to store all movie objects.
   movies.push(movie);

   res.send('movies has been added ');
});

// //searching for a movie in the api or array
   app.get('/movie/:id', (req, res)=>{
//    //This line gets the id from the URL.,For example, if the URL is /movies/123, then req.params.id will be 123.
   const id = req.params.id 

//    //This line starts a loop that goes through each movie in the movies array.
   for(let movie of movies){
      if(movies.id == id){
         //res.json automatically converts the JavaScript object to JSON.
         res.json(movie)
         return
      }
   } res.status(404).send('movie not found')
});



//setting the server port
app.listen(port, () => console.log(`Server running at http://${host}:${port}/`));