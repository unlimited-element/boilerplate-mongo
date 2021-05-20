require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're connected");
});

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model('Person', personSchema);


const createAndSavePerson = (done) => {
  const human = new Person({
    name: "Human Doe",
    age: 20,
    favoriteFoods: ["cake", "peas", "carrots"]
  });
  human.save(function(err, data) {
    if (err) {
      return console.log(err)
    }
    done(null, data);
  });
};


const createManyPeople = (arrayOfPeople, done) => {
  var arrayOfPeople = Person.create(
  [{ name: 'Will', age: 22, favoriteFoods: ["milk", "juice", "cereal"] },
  { name: 'Riker', age: 23, favoriteFoods: ["rice", "chicken", "waffles"] },
  { name: 'Geordi', age: 24, favoriteFoods: ["cereal", "corn", "bacon"] },
  { name: 'LaForge', age: 25, favoriteFoods: ["muffins", "sundaes", "cake"] }
  ]);
  arrayOfPeople.save(function(err, data) {
    if (err) {
      return console.log(err)
    }
    done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
