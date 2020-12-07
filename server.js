// server code 
"use strict";
const log = console.log
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const {Food} = require("./models/item.js");
const {User} = require("./models/user.js")

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json())

require('dotenv').config()
//CREATING AND CONNECTING TO MONGO AND MONGOOSE
const mongoURI = process.env.ATLAS_URI
   
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
mongoose.set('useFindAndModify', false);

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

function isMongoError(error) { // checks for first error returned by promise rejection 
    return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
}


// api method routing 

//registering a user
app.post('/api/register', async (req, res) => {
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	} 

    const user = new User({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        goal: 3000
    })

    try {
        const newUser = await user.save()
        res.status(200).send(newUser)
    } catch (error) {
        if (isMongoError(error)) { 
            res.status(500).send('Internal server error')
        } else {
            log(error)
            res.status(400).send('Bad Request')
        }
    }
})

// A route to login
app.post("/api/login", async (req, res) => {
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	} 
    const username = req.body.username;
    const password = req.body.password;
    log(username)
    try {
        const users = await User.find()
        const desired_user = users.filter(
            (user) => user.username === username && user.password === password 
        )	
        if (desired_user.length === 0){
            res.status(404).send("invalid login")
        }
        else{
            res.status(200).send(desired_user[0])
            log(desired_user[0])
        }
	} catch(error) {
		log(error)
		res.status(500).send("Internal Server Error")
	}
})

// A route to get all users
app.get("/api/users", async (req, res) => {
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	} 
    try {
        const users = await User.find()
        res.status(200).send(users)
	} catch(error) {
		log(error)
		res.status(500).send("Internal Server Error")
	}
})

//specific user
app.get('/api/users/:id', async (req, res) => {
    const id = req.params.id
    
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  

	try {
		const user = await User.findById(id)
		if (!user) {
			res.status(404).send('Resource not found')  
		} else {
			res.send(user)
		}
	} catch(error) {
		log(error)
		res.status(500).send('Internal Server Error') 
	}

})

//setting calorie goal for specific user
app.patch('/api/setgoal/:id', async (req, res) => {
    const id = req.params.id
    
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  

	try {
		const user = await User.findById(id)
		if (!user) {
			res.status(404).send('Resource not found')  
		} else {
            user.goal = req.body.goal
            const updated = await user.save()
			res.send(updated)
		}
	} catch(error) {
		log(error)
		res.status(500).send('Internal Server Error') 
	}

})

//add food to user
app.post('/api/addfood/:id', async (req, res) => {
    const id = req.params.id
    
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  

	try {
		const user = await User.findById(id)
		if (!user) {
			res.status(404).send('Resource not found')  
		} else {
            const food = new Food({
                foodName: req.body.foodName,
                foodCalories: req.body.foodCalories,
                carbPCT: 33, //HARDCODED FOR NOW
                fatPCT:34, //CHANGE WHEN WE ADD THE SUBCATEGORIES
                proteinPCT: 33
            })
			user.foods.push(food)
			const updated = await user.save()	
			res.send(updated)
		}
	} catch(error) {
		log(error)
		res.status(500).send('Internal Server Error') 
	}

})
// app.get("/api/foods", (req, res) => {
//     if (mongoose.connection.readyState != 1) {
// 		log('Issue with mongoose connection')
// 		res.status(500).send('Internal server error')
// 		return;
// 	} 
//     tracker.getAllFood()
//         .then(foods => res.send(foods))
//         .catch(error => {
//             console.log(error);
//             res.status(400).send();
//         })
// });

// app.put("/api/food", (req, res) => {
//     tracker.addFood(req.body)
//         .then(_ => res.send())
//         .catch(error => {
//             console.log(error);
//             res.status(400).send();
//         });
// });

// app.delete("/api/food", (req, res) => {
//     tracker.deleteFood(req.body.itemId)
//         .then(_ => res.send())
//         .catch(error => {
//             console.log(error);
//             res.status(400).send();
//         });
// });

// app.post("/api/total_calories", (req, res) => {
//     tracker.getTotalCalories(req.body)
//         .then(calories => res.send(calories))
//         .catch(error => {
//             console.log(error);
//             res.status(400).send();
//         });
// });

//static pages
// app.use(express.static(path.join(__dirname + "/client/build")))

//serve react app
// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname + "client/build/index.html"))
// })



//RUNNING SERVER
const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
});