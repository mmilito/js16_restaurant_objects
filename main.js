$(document).on('ready', function() {

//FoodItem constructor
	var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {
		this.name=name;
		this.calories=calories;
		this.vegan=vegan || false;
		this.glutenFree=glutenFree || false;
		this.citrusFree=citrusFree || false;
	};

//FoodItem prototype 
 FoodItem.prototype.toString = function() {
 	var FoodItemInfo = "Food Item: "+this.name +"\n"
 						+"Calories: "+this.calories+"\n"
 						+"Vegan: "+this.vegan+"\n"
 						+"Gluten Free: "+this.glutenFree+"\n"
 						+"Citrus Free: "+this.citrusFree+"\n";
 	//console.log("testing");
 	return FoodItemInfo;

 };

// instances of FoodItem
 var burrito = new FoodItem("Burrito",750,false,false,false);
 var mexicanRice = new FoodItem("Mexican Rice",100,true,false,false);
 var gluFreeGuac = new FoodItem("Guacamole",500,true,true,false);
 var margaritaMix = new FoodItem("MargMix",250,true,true,false);
 var tequila = new FoodItem("Tequila",300,false,true,true);
 var salt = new FoodItem("Salt",0,true,true,true);
 var tortillaChips = new FoodItem("Chips",350,true,false,true);
 var salsa = new FoodItem("Salsa",150,true,true,false);
 var fajitas = new FoodItem("Fajitas",750,false,true,true);
 var blackBeans = new FoodItem("Black Beans",550,false,true,true);
 var primeRib = new FoodItem("Prime Rib",1750,false,true,true);
 var mashedPotatoes =new FoodItem("Mashed Taters",1250,false,true,true);
 var greenBeans = new FoodItem("Green Beans",250,true,true,true);

//console.log FoodItem
//console.log(burrito.toString());
//console.log(mexicanRice.toString());
//console.log(gluFreeGuac.toString());


//Drink constructor
var Drink = function(drinkName,drinkDescription,drinkPrice,drinkIngredients){
	this.drinkName=drinkName;
	this.drinkDescription=drinkDescription;
	this.drinkPrice=drinkPrice;
	this.drinkIngredients=drinkIngredients;
};

//instances of Drink
 var margarita = new Drink("Margarita","Yummy Marg",7.50,[margaritaMix,tequila,salt]);
 	// console.log Drink
 	//console.log(margarita.drinkIngredients);

//Drink prototype 
 Drink.prototype.toString = function() {
 	var DrinkInfo = "Drink Name: "+this.drinkName +"\n"
 					+"Drink Description: "+this.drinkDescription +"\n"
 					+"Drink Price: "+ this.drinkPrice +"\n"
 					+"Drink Ingredients: "+this.drinkIngredients;

 	return DrinkInfo;
 };
 	//console.log(margarita.toString());

//Plate constructor
var Plate = function(plateName,plateDescription,platePrice,plateIngredients){
	this.plateName=plateName;
	this.plateDescription=plateDescription;
	this.platePrice=platePrice;
	this.plateIngredients=plateIngredients;
};
//instances of Plate
 var bluePlate = new Plate("Blue Plate Special","Sunday Brunch Only",10.50,[burrito,tortillaChips,salsa]);
 var redPlate = new Plate("Red Plate Special","Monday Dinner Only",12.50,[fajitas,blackBeans,mexicanRice]);
 var yellowPlate = new Plate("Yellow Plate Special","Tuesday Dinner Only",15.00,[primeRib,mashedPotatoes,greenBeans]);
 var guacPlate = new Plate("Guacamole Plate","Vegan Choice",10.00,[mexicanRice,gluFreeGuac,tortillaChips]);

	// console.log(bluePlate.plateIngredients);

Plate.prototype.toString = function() {
 	var plateInfo = "\n Plate Name: "+this.plateName +"\n"
 					+"Plate Description: "+this.plateDescription +"\n"
 					+"Plate Price: "+ this.platePrice +"\n"
 					+"Plate Ingredients: "+this.plateIngredients+"\n";

 	return plateInfo;
 };
	//	console.log(bluePlate.toString());
	//console.log(bluePlate.plateIngredients);

// ***********
// ***********
Plate.prototype.isVegan = function() {
	var temp=false;
	var temp2=[];
	for (var i=0;i<this.plateIngredients.length;i++) {

		$.each(this.plateIngredients[i],function(key, value){
				
			if (key==="vegan"){
					if (value===true){
					//console.log("true");
					temp=true;
				
				} 
			else {
				temp=false;
				console.log("false");
				return false;

			} }
				
				//}
		}); //each loop end
	}; // for loop end
	return temp;
  }; //prototype end

//************
//***********

console.log(bluePlate.isVegan());
//console.log(bluePlate);


//Order constructor
var Order = function(plate){
	this.plate=plate;
};

// Order instances
var order1 = new Order([bluePlate]);
var order2 = new Order([bluePlate,redPlate]);
var order3 = new Order([bluePlate,redPlate,yellowPlate]);
	//console.log(order1);

Order.prototype.toString = function() {
 	var orderInfo = "Order (made up of plates): "+this.plate +"\n";
 	return orderInfo;
 };
	//console.log(order3.toString());

//Menu constructor
var Menu = function(plate){
	this.plate=plate;
};	

//Menu instances
var menuItem1 = new Menu([bluePlate]);
var menuItem2 = new Menu([bluePlate,redPlate]);
var menuItem3 = new Menu([bluePlate,redPlate,yellowPlate]);
	//console.log(menuItem1);

Menu.prototype.toString = function() {
 	var menuInfo = "Menu (made up of plates): "+this.plate +"\n";
 	return menuInfo;
 };
	//console.log(menuItem3.toString());

//Restaurant constructor
var Restaurant = function(restaurantName,restaurantDescription,restaurantMenu){
	this.restaurantName=restaurantName;
	this.restaurantDescription=restaurantDescription;
	this.restaurantMenu=restaurantMenu;
};

//Restaurant instances
var restaurantLunch = new Restaurant("JoseAtLunch","Lunchtime Mexican Specials",[menuItem1]);
var restaurantDinner = new Restaurant("Jose's","Best Mexican Food West of my Mom's",[menuItem1,menuItem2,menuItem3]);
	//console.log(restaurantDinner);

Restaurant.prototype.toString = function() {
 	var restauInfo = "\n Restaurant Name: "+this.restaurantName +"\n"
 					+"Restaurant Description: "+this.restaurantDescription +"\n"
 					+"Restaurant Menu: \n"+ this.restaurantMenu +"\n";

 	return restauInfo;
 };
 	//console.log(restaurantLunch.toString());

//Customer constructor
var Customer = function(dietaryPreference){
	this.dietaryPreference=dietaryPreference;
};

//Customer instance
var tomJones=new Customer('none');
var janeSmith = new Customer('vegan');
var joeWillikers = new Customer('glutenFree');
	//console.log(janeSmith);

Customer.prototype.toString = function() {
 	var customerInfo = "Dietary Preference: "+this.dietaryPreference +"\n";
 	return customerInfo;
 };
 	//console.log(janeSmith.toString());



}); // end of jQuery