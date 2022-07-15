const database = 'class';

use(database);

db.superheroes.countDocuments();

db.superheroes.find({"aspects.height": {$lt: 180}}).count()

db.superheroes.find({"aspects.height": {$lte: 180}}).count()

db.superheroes.find({"aspects.height": {$gte: 200}}).count()

db.superheroes.find({"aspects.eyeColor": "green"})

db.superheroes.find({"aspects.eyeColor": "blue"})

db.superheroes.find({"aspects.hairColor": {$in: ["black", "No Hair"]}})

db.superheroes.find({"aspects.hairColor": {$not: {$in: ["Black", "No Hair"]}}})

db.superheroes.find({"aspects.height": {$not: {$gte: 180}}}).count()

db.superheroes.find({$and: [{race: {$not: {$eq: 'Human'}} }, {"aspects.height": {$lte: 180} }]})








