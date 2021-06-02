	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

const selectedRestrictions = new Set()

var products = [
	{
		name: "brocoli",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		price: 1.99
	},
	{
		name: "bread",
		LactoseFree: false,
		NutFree: false,
		isOrganic:true,
		price: 2.35
	},
	{
		name: "salmon",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		price: 10.00
	},
	{
		name: "apple",
		LactoseFree: true,
		NutFree: true,
		isOrganic:false,
		price: 1.79
	},
	{
		name: "milk",
		LactoseFree: false,
		NutFree: true,
		isOrganic:true,
		price: 8.50
	},
	{
		name: "almonds",
		LactoseFree: true,
		NutFree: false,
		isOrganic:true,
		price: 2.00
	},
	{
		name: "rice",
		LactoseFree: true,
		NutFree: true,
		isOrganic:false,
		price: 13.00
	},
	{
		name: "honey",
		LactoseFree: true,
		NutFree: false,
		isOrganic:false,
		price: 5.99
	},
	{
		name: "avacado",
		LactoseFree: true,
		NutFree: true,
		isOrganic:false,
		price: 3.99
	},
	{
		name: "strawberry",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		price: 2.30
	}
	
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

// function restrictListProducts(prods, restriction) {
// 	let product_names = [];
// 	for (let i=0; i<prods.length; i+=1) {
// 		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
// 			product_names.push(prods[i].name);
// 		}
// 		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
// 			product_names.push(prods[i].name);
// 		}
// 		else if (restriction == "None"){
// 			product_names.push(prods[i].name);
// 		}
// 	}
// 	return product_names;
// }
function restrictListProducts(prods) {
	let filteredProducts = [];
	for (let i = 0; i < prods.length; i += 1) {
	  if ((selectedRestrictions.has("Lactose-Free")) && (prods[i].LactoseFree == false)){
		continue;
	  }
	  if ((selectedRestrictions.has("Nut-Free")) && (prods[i].NutFree == false)){
		continue;
	  }
	  if ((selectedRestrictions.has("Organic")) && (prods[i].isOrganic == false)){
		continue;
	  }
	  filteredProducts.push(prods[i]);
	}
	return filteredProducts;
  }

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}