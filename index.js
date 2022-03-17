const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'

const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose

  .connect(MONGODB_URI)

  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })

  .then(() => {
    return Recipe.create({
      title: 'Eggs',
      level: 'Easy Peasy',
      ingredients: ['eggs', 'oil', 'salt', 'onion', 'pepper'],
      cuisine: 'Asian',
      dishType: 'breakfast',
      duration: 5 ,
      creator: 'Akanksha'
    })
  }) 

  .then((newRecipe) => {
    console.log(newRecipe.title)
    return Recipe.insertMany(data)
  })

  .then((data) => { console.log(data.title) 
    return Recipe.updateOne({title: "Rigatoni alla Genovese"}, { duration: 100 })
   })
   
  .then((data) => {
    console.log('value changed')
    return Recipe.deleteOne({title: "Carrot Cake"})
  })

  .then((data) => {
    console.log('deleted')
  })

  .then(() => {mongoose.connection.close()})

  .then(() => {
    console.log('connection closed')
  })
  // .catch((error) => {
  //   console.log('error')
  // })
  // .catch((error) => {console.log("not changed")}) 
  // // .catch((error) => console.log(error))
  //   // Run your code here, after you have insured that the connection was made
  
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
  
 

  



