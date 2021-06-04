	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

const selectedRestrictions = new Set()

var products = [
	{
		name: "Brocoli",
        picture : "images/broccoli.jpeg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		price: 1.99
	},
	{
		name: "Bread",
        picture : "images/bread.jpeg",
		LactoseFree: false,
		NutFree: false,
		isOrganic:true,
		price: 2.35
	},
	{
		name: "Salmon",
        picture : "images/salmon.jpeg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		price: 10.00
	},
	{
		name: "Apple",
        picture : "images/apple.jpeg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:false,
		price: 1.79
	},
	{
		name: "Milk",
        picture : "images/milk.jpeg",
		LactoseFree: false,
		NutFree: true,
		isOrganic:true,
		price: 8.50
	},
	{
		name: "Almonds",
        picture : "images/almonds.jpeg",
		LactoseFree: true,
		NutFree: false,
		isOrganic:true,
		price: 2.00
	},
	{
		name: "Rice",
        picture : "images/rice.jpeg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:false,
		price: 13.00
	},
	{
		name: "Honey",
        picture : "images/honey.jpeg",
		LactoseFree: true,
		NutFree: false,
		isOrganic:false,
		price: 5.99
	},
	{
		name: "Avacado",
        picture : "images/avacodo.jpeg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:false,
		price: 3.99
	},
	{
		name: "Strawberry",
        picture : "images/strawberry.jpeg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		price: 2.30
	},
    {
		name: "Cookie",
        picture : "images/cookie.jpeg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		price: 3.30
	},
    {
		name: "Naan",
        picture : "images/naan.jpeg",
		LactoseFree: false,
		NutFree: true,
		isOrganic:false,
		price: 4.30
	},
    {
		name: "Samosa",
        picture : "images/samosa.jpeg",
		LactoseFree: false,
		NutFree: true,
		isOrganic:false,
		price: 4.30
	},
    {
		name: "Yogurt",
        picture : "images/yogurt.jpeg",
		LactoseFree: false,
		NutFree: true,
		isOrganic:false,
		price: 4.30
	},
    {
		name: "Chicken",
        picture : "images/chicken.jpeg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		price: 15.99
	},
    {
		name: "Noodles",
        picture : "images/noodle.jpeg",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		price: 5.99
	}

];
	
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