
// var a = 5;
// var b = 6;
// const name = 'adityaraj';
// var ans =  (a + b) / 2;
// console.log("The average of " + a + " and " + b + " is: " + ans);

// console.log(typeof name);

// console.log(typeof ans);

//Array
// const cars = ["Thar","Volvo","BMW",32];
// console.log(cars);
// cars.push("Adityaraj");
// console.log(cars);
// console.log(cars[0]);

//Conditionals
// var hour = 12;
// if(hour<12){
//   console.log("Morning");
// }
// else{
//   console.log("Afternoon");
// }

//for loop
// var count = 10;
// for(var i=0;i<count;i++){
//   console.log(i);
// }

//Object(Key:Values pair)

// const person = {
//   name: "Adityaraj Singh",
//   Age: 20,
//   isStudent: true,
//   Hobbies: ["Table Tennis","Swimming","Playing Chess"]
// };
// console.log(person);
// console.log(person.Age);


//Function

// const ages = [20,30,44,55];
// const result = ages.filter(checkAge); //Filter element will pass all th elements of array through the checkAge function

// function checkAge(age){
//   return age>=18
// }

// console.log(result);

// Prompt -- taking input from user

var prompt = require('prompt-sync')();
//
// get input from the user.
//
var n = prompt('Please enter your age:  ');

console.log(n + " is a great age!");

//Before starting backend we initialize npm, it generally generates a file.js and package.json in our project folder. npm init

// console.log("Server file is  herererre");

//1st way of declaring a function
// function add(a,b){
//     return a+b;
// }

//2nd way of declaring a function
// var add = function(a,b){
//     return a+b;
// }

//3rd way of declaring a function
// var add = (a,b) =>{return a+b;}
//or, var add = (a,b) => a+b;

// var result = add(5,9);
// console.log("The sum of 5 and 9 is "+result);

//ANother way

// (function(){
//     console.log('Adityaraj is Added');
// })();


//callback function -> function called after excecution of main function
//When we call a function inside  another function it's known as callback function.
/*
function callback(){
    console.log("Now adding is successfully completed");
}

const add = function(a,b,callback){
    var result = a+b;
    console.log(a+" + "+b+" = "+result); //main function work complete
    //calling the callback function here
    callback();
}

add(4,5,callback);
*/

//Now making the code shorter by calling function inline

const add = function(a,b,aditya){
    var result = a+b;
    console.log(a+" + "+b+" = "+result);
    aditya(); //this shows aditya variable is a function
}

// add(4,5,function(){
//     console.log("Addition is completed");
// });

//making the code more shorter
//Mostly practised - inline - shorthand
add(2,3,()=>console.log("Addition completed"));

//There are many built-in module in Nodejs

//fs module --> creates file and writes message inside it
//os module -->Information about the user and MAchine

//importing os and fs module

// var fs = require('fs');
// var os = require('os'); 

// var user = os.userInfo();  
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting2.txt','Hi Adityaraj Singh',()=>{
//     console.log('file is created');
// });

//To know the all the functionalities of fs and os
// console.log(os);
// console.log(fs);

//importing files from the folder

const notes = require('./notes.js');
// var _ = require('lodash');  //for using lodash library
// console.log('I am from main js file')

// var age = notes.age;//imported from notes module

// var result = notes.addNumber(age+19,10);//imported from notes module
// console.log(age);//we need to export in notes file
// console.log(result);//imported from nodes module


// var data = ["Person","Person",1,2,1,2,'name','age','2'];
// var filter = _.uniq(data); //from lodash library
// console.log(filter);

// console.log(_.isString('Aditya')); //in-built functionality from lodash library
// console.log(_.isString(1));


//Characteristics of JSON'
//Lightweight, Structured and organised data, JSON is represented as a string
//format for JSON object

// {
//     "name": "Aditya",
//     "age" : 20,
//     "hobbies" : ["reading","painting","hiking"]
// }


//Inter conversion of JSON to an Object in Nodejs

// const JSONString = '{"name":"Aditya","age":30,"city":"Kolkata"}';
// const JSONObject = JSON.parse(JSONString);//Conversion of JSON string into object
// console.log(JSONObject.name); //output : Aditya

//Converting JavaScript object into JSON String

// const objectToConvert = {name:"Adityaraj",age:25};
// const jsonStringified = JSON.stringify(objectToConvert);//converting JS object into JSON String
// console.log(jsonStringified); //output  will be {"name":"Adityaraj","age":25}
// console.log(typeof jsonStringified); //JSON data can be transfered server to server easily
//Server == Waiter
//Server are created through importing express
//local host == Address of server -->Port number

const express = require('express')
const app = express(); //now app has all the functionalities, from which a server can be made
const db = require( './db'); //importing database module
const MenuItem = require('./models/MenuItem');//(Create data and Save this in database homework)
require('dotenv').config(); //->It is used for security purpose of our data


const bodyParser = require('body-parser');//to parse the request body
app.use(bodyParser.json()); //parses json  data present in the request body and convert it int object and stores it into request body

const PORT = process.env.PORT || 3000;

const Person = require('./models/person');


//get just gathers information about the request that was sent by client
app.get('/', function (req, res){
  res.send('Hello Hello Hello ! This is my first Express Code');
})


//This below code will not be used for post
// app.post('/person', (req, res) => {
//   const data = req.body;  // Assuming the request body contains the person data

//   // Create a new person document using the mongoose model
//   const newPerson = new Person(data);

//   // Save the new person in the database
//   newPerson.save((error, savedPerson) => {
//     if (error) {
//       console.log('Error saving person:', error);
//       return res.status(500).json({ error: 'Internal server error' });
//     } else {
//       console.log('Data saved successfully');
//       return res.status(200).json(savedPerson);
//     }
//   });
// });
//Tji swill be used














app.get('/Rasgulla', function (req, res) {
    res.send('I want 10 pieces of Rasgulla');
  })

app.get('/Rasmalai', function (req, res){
    
    var customized_Rasmalai = {
    name:'Kesar Rasmalai',
    size: '10 cm',
    is_sweet: true}
    res.send(customized_Rasmalai)
  })





//Import the router files
const personRoutes = require('./routes/personRoutes');
const MenuItemRoutes = require('./routes/menuItemRoutes')
//use the routers
app.use('/person', personRoutes);
app.use('/menu',MenuItemRoutes);








// app.listen(3000)
app.listen(PORT,()=>{
    console.log('listening at port number 3000');
})



//Different status codes
// l. Informational responses (100 - 199)
// 2. Successful responses (200 - 299)
// 3. Redirection messages (300 - 399)
// 4. Client error responses (400- 499)
// 5. Server error responses (500 - 599)4

//Saving files in git
//git init --> git status --> git add . (add all the files to git), for any specific file  use : git add filename
//gitignore  file : to ignore certain files or directories from being saved in Git repository

//command to remove node_modules from version control, if already added -->  git rm -r --cached node_modules
//for saving the snapshot we use --> git commit -m  "message" //-->Version saved to github
//Then git push

//Just for testing