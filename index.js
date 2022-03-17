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

  .then((data) => { console.log(data.title) })

  // .catch((error) => console.log(error))
    // Run your code here, after you have insured that the connection was made
  
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
  
  Recipe.findByIdAndUpdate("62335071e4f2a738bc1067ec", { duration: 100 })
  .then("value changed")
  .catch("not changed");

  Recipe.findByIdAndRemove("623350ddc28564978e11ab34")
  .then('deleted')
  .catch('error');