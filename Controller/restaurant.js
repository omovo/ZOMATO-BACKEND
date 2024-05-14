const Restaurant = require("../Model/restaurantDB");

exports.getRestaurant = (req, res) => {

    Restaurant.find()
      .then(response => {
        res.status(200).json({
            message:"Restaurant Fetched Successfully",
            restaurant: response
        })
      })
      .catch(err => {
        res.status(500).json({ error: err })
      })
}           //copy 1 - 15 code lines and paste it under and continue with littled code addition
            //  ..........Only if you want to filter restaurant along with city Id.


exports.getRestaurantByLocationId = (req, res) => {

    const { locId } = req.params;

    Restaurant.find( { city: locId }, {} )
      .then(response => {
        res.status(200).json({
            message:"Restaurant By Location Id Fetched Successfully",
            restaurants: response
        })
      })
      .catch(err => {
        res.status(500).json({ error: err })
      })
}


exports.getRestaurantById = (req, res) => {

  const { id } = req.params;

  Restaurant.findById(id)
    .then(response => {
      res.status(200).json({
          message:"Restaurant By Id Fetched Successfully",
          restaurants: response
      })
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
}

    // FILTER RESTAURANT BELOW

exports.filteredRestaurant = (req, res) => {

  let { location, mealtype, lcost, hcost, cuisine, sort, page } = req.body;

  sort = sort ? sort : 1;  // 1 -> Ascending Order, -1 -> Descending Order 
  page = page ? page : 1; // If no page is specified, by default page -1 wil be selected

  const itemsPerPage = 2;  // Number of restaurants in a page 
  const startIndex = page * itemsPerPage - itemsPerPage;
  const endIndex  =  page *  itemsPerPage; 

  var filterObj = {}; // Empty Object        (All the data stored in the database would be display if the location is not filtered by city_Id)

  location && (filterObj ["city"] = location); // Inserting a location data passed from the body to the filter Object
  mealtype && (filterObj["type.mealtype"] = mealtype); // Inserting mealtype data passed from the body to the filter Object
  lcost && hcost && (filterObj["cost"] = {$gte: lcost, $lte: hcost }); //  Inserting a range to identify the cost of a restaurant given from the body  to the filter object.
  cuisine && (filterObj["Cuisine.cuisine"] = {$in: cuisine });

  console.log(filterObj);

Restaurant.find(filterObj).sort({ cost: sort })
    .then(response => {
      const filteredResponse = response.slice(startIndex, endIndex);
      res.status(200).json({
          message:"Restaurant Filtered Successfully",
          restaurants: filteredResponse
      })
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
}