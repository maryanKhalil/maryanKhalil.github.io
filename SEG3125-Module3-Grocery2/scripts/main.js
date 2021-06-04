// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp
const allItems = restrictListProducts(products)
renderProductList(allItems)


function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "flex";
	evt.currentTarget.className += " active";

}
	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById('displayProduct');
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
	
	if (selectedRestrictions.has(s1.value)) {
		selectedRestrictions.delete(s1.value)
	  } else {
		selectedRestrictions.add(s1.value)
	  }

	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
	renderProductList(optionArray)
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)+ " $"));
		
    openInfo(event,"Cart");
}

function priceFilter(a,b){
	return a.price > b.price ? 1:-1;
}

function renderProductList(optionArray){
	var s2 = document.getElementById('displayProduct');
	const sortedOptionArray = optionArray.sort(priceFilter);
	for (i = 0; i < sortedOptionArray.length; i++) {

		var label = document.createElement('label');
		label.className = "option_item";

	  var productName = sortedOptionArray[i].name;
	  var productPrice = sortedOptionArray[i].price;
		var productPicture = sortedOptionArray[i].picture;

	  var checkbox = document.createElement("input");
	  checkbox.type = "checkbox";
		checkbox.className = "checkbox";
	  checkbox.name = "product";
	  checkbox.value = productName;

		label.appendChild(checkbox);
		formattedPrice = (Math.round(productPrice * 100) / 100).toFixed(2);

		var optioninner = document.createElement("div");
		optioninner.className = "option_inner nutfree";
		var tick = document.createElement("div");
		tick.className = "tickmark";
		var icon = document.createElement("div");
		icon.className = "icon";
		var productImage = document.createElement("img");
		productImage.src = productPicture;
		productImage.alt = "";
		icon.appendChild(productImage);
		var prodtext = document.createElement("div");
		prodtext.className = "boxtext";
		var h2 = document.createElement("h2");
		h2.appendChild(document.createTextNode(`${productName} - $${formattedPrice}`));
		prodtext.appendChild(h2);
		optioninner.appendChild(tick);
		optioninner.appendChild(icon);
		optioninner.appendChild(prodtext);

		label.appendChild(optioninner);
	  s2.appendChild(label);

	  s2.appendChild(document.createElement("br"));
	}
  }