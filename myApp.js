require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});


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

var arrayOfPeople = [
{ name: 'Will', age: 22, favoriteFoods: ["milk", "juice", "cereal"] },
{ name: 'Riker', age: 23, favoriteFoods: ["rice", "chicken", "waffles"] },
{ name: 'Geordi', age: 24, favoriteFoods: ["cereal", "corn", "bacon"] },
{ name: 'LaForge', age: 25, favoriteFoods: ["muffins", "sundaes", "cake"] }
];
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, data) {
    if (err) {
      return console.log(err)
    }
    done(null, data);
  });
};

const findPeopleByName = function(personName, done) {
  Person.find({name: personName}, function (err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, function(err, faveFood) {
    if (err) {
      console.log(err)
    }
      done(null, faveFood);
  })

};

const findPersonById = (personId, done) => {
  Person.findById(personId, function(err, idData) {
    if (err) {
      console.log(err)
    }
      done(null, idData);
  })

};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, function(err, person) {
    if (err) {
      console.log(err)
    }
    person.favoriteFoods.push(foodToAdd);

  person.save( function(err, savedPerson) {
    if (err) {
      console.log(err)
    }
    done(null, savedPerson);
      })
  })
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
    Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, function(err, update) {
      if(err) {
        console.log(err)
      }
        done(null, update);
    })
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, function(err, removed) {
    if (err) {
      console.log(err)
    }
    done(null, removed);
  })
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
