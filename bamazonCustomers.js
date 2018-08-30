// dependencies
var inquirer = require('inquirer');
var mysql = require("mysql");

// MySQL connection parameters
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Pekachu1980!",
  database: "bamazon_db"
});

function start(){
	//prints the items for sale
	connection.query('SELECT * FROM products', function(err, res){
	  if(err) throw err;
	
	  console.log('Welcome to the Bamazon online store!')
	  console.log('------------------------------------')
	
	  for(var i = 0; i<res.length;i++){
		console.log("ID: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "QTY: " + res[i].stock_quantity);
		console.log('--------------------------------------------------------------------------------------------------')
	  }
	});
}
	  console.log(' ');
	  start();

	  inquirer.prompt([
		{
		  type: "input",
		  name: "item_id",
		  message: "Please enter the item ID of the product, thank you!",
		  validate: function(value){
			if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
			  return true;
			} else{
			  return false;
			}
		  }
		},
		{
		  type: "input",
		  name: "stock_quantity",
		  message: "How many items do you need?",
		  validate: function(value){
			if(isNaN(value)){
			  return false;
			} else{
			  return true;
			}
		  }
		}
		]).then(function(ans){
		  var whatProductToBuy = (ans.item_id)-1;
		  var howMuchToBuy = parseInt(ans.stock_quantity);
		  var grandTotal = parseFloat(((res[whatProductToBuy].price)*howMuchToBuy).toFixed(2));
	
		  //verify if quantity is sufficient
		  if(res[whatProductToBuy].stock_quantity >= howMuchToBuy){
		  //after purchase, update quantity of products
			connection.query("UPDATE products SET ? WHERE ?", [
			{stock_quantity: (res[whatProductToBuy].stock_quantity - howMuchToBuy)},
			{item_id: ans.item_id}
			], function(err, result){
				if(err) throw err;
				console.log("Success! The total is $" + grandTotal.toFixed(2) + "Thank you for your business! Please come back soon!");
			});
	}
});
	//Questions if the client would like to purchase another item
	function reprompt(){
	  inquirer.prompt([{
		type: "confirm",
		name: "reply",
		message: "Would you like to purchase another product?"
	  }]).then(function(ans){
		if(ans.reply){
		  start();
		} else{
		  console.log("We look forward to see you soon!");
		}
		
	  });
	}
	reprompt();