const express = require("express");

const locationController = require("../Controller/location");
const restaurantController = require("../Controller/restaurant");  // 
const mealtypeController = require("../Controller/mealtype");
const userController = require("../Controller/user");
const menuController = require("../Controller/menu");

const route = express.Router();

route.get('/location', locationController.getLocation);                     // Homepage - Get Location API        
route.get('/rest/:locId', restaurantController.getRestaurantByLocationId); // Homepage -Restaurant By Location API
route.get('/restaurants/:id', restaurantController.getRestaurantById);    //  Details - Get Restaurant By ID API
route.get('/mealtype', mealtypeController.getMealtypet);                 //Homepage - Get Mealtype API
route.post('/signnup', userController.postSignup);                      // Homepage - Post Sign Up API 
route.post('/login', userController.postlogin);                        // Homepage - Post Login API (The User Controller would be used for both (Signup && Login)
route.get('/menu/:resId', menuController.getMenuByRestaurantId);      // Details - Get Menu By Restaurant ID API

//FILTER

route.get('/restaurant', restaurantController.getRestaurant);       // List Of Restaurant API
route.post('/filter', restaurantController.filteredRestaurant);     // Restaurant Filter API

module.exports = route;
