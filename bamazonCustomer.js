var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
 host: "localhost",  


 port: 3306,

 // Your username
 user: "root",

 // Your password
 password: "ucbx",
 database: "bamazon"
});

connection.connect(function(err) {
 if (err) throw err;
 console.log("connected as id " + connection.threadId);
 displayItems();
  // connection.end();

});

function displayItems() {
   connection.query("SELECT * FROM products", function(error, result){
      if (error) throw error;
      for (var i=0; i < result.length; i++){
        console.log(result[i].item_id + "-" + result[i].product_name + "-" + result[i].price );
      }
      promptProductId();
   });
}


function promptProductId () {
   inquirer.prompt([
  {
    type: "input",
    name: "id",
    message: "What is the ID of the item you would like to buy?"
  },
  {
   type: "input",
   name: "quantity",
   message: "How many units of the product you would like to buy?" 
}
]).then(function(user) {
  connection.query("SELECT * FROM products WHERE item_id = ?", [user.id], function(error, result){
    console.log(result[0].stock_quantity);
     console.log(user.quantity);

    if (result[0].stock_quantity < user.quantity) {
      console.log("Insufficient Quantity");
    }
    else {
      placeOrder(user.id, result[0].stock_quantity - user.quantity);
    }
  });
});
}


function placeOrder (productId, newQuantity) {
//update SYNTAX quantity using connection.query
connection.query("UPDATE products SET stock_quantity = stock_quantity- ? WHERE item_id = ? ",
  [quantity, productId.item_id], function (error, result){
    console.log("Your order has been processed.");
    displayItems();
  }
  );
}


