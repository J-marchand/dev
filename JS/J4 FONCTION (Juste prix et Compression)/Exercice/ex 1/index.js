/* 

var list = ['riz', 'lait', 'eau', 'pate', 'mayo', 'ketchup', 'mascarponne'];


function addItem(item) 
{
    list.push(item);
}

var item1 = window.prompt('ajoutez un article');

addItem(item1);

console.log(list);

function deleteItem(item) 
{
    var index = list.indexOf(item);

    if (index != -1) {
        list.splice(index, 1);
    }
}

var item2 = window.prompt('supprimer un article');

deleteItem(item2);

console.log(list);

function deleteAll(item)
{
    index = []
}

list = deleteAll(item)

console.log(list)

*/

var shoppingList = new Array();

function addItem(item)
{

	shoppingList.push(item);

}

function displayShoppingList()
{

	console.log('La liste contient ' + shoppingList.length + ' produit(s).');
	console.log(shoppingList);
    
    document.write('<ul>');
    
    for (var i = 0; i < shoppingList.length; i++) {
    
    	document.write('<li>'+shoppingList[i]+'</li>')
    	
    }
    
    document.write('</ul>');
}

function removeAllItems()
{

	shoppingList = [];
    
    //shoppinglist(0, shoppingList.length -1);
    
}


function removeItem(item)
{
	var index = shoppingList.indexOf(item);
    
    if(index == -1)
	{
    	console.log("ERREUR : le produit " + item + " n'existe dans la liste de courses");

    } else {
    	shoppingList.splice(index, 1);
    }
    

}





console.clear();


addItem('Fraises');
addItem('Poulet');
addItem('Tournevis');
addItem('Artichaut');

displayShoppingList()


removeItem(window.prompt('Quel produit de la liste de courses souhaitez-vous supprimer ?'));
displayShoppingList();

removeAllItems();
displayShoppingList();






