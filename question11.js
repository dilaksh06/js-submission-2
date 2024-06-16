// 11. Write a function to manage inventory for a store using a Map. The Map should store item
// names as keys and their quantities as values. Provide functions to add new items,
// update item quantities, and check the quantity of an item.


let inventory = new Map();
function addItem(itemName, quantity) {
    // use Map Object's set method to add the item to the inventory
    inventory.set(itemName, quantity);
}
function updateItemQuantity(itemName, quantity) {
    // use Map Object's has, set, get methods to update the quantity
    // check if the item exists in the inventory
    // if exists, update the quantity
    // if not, console log the message "Item not found"
    inventory.has(itemName) ? inventory.set(itemName, inventory.get(itemName) + quantity) : console.log("Item not found");
}
function checkItemQuantity(itemName) {
    // check item quantity in the inventory
    return inventory.has(itemName) ? (inventory.get(itemName)) : "No such item in the stock";



}
addItem("apple", 100);
addItem("banana", 150);
updateItemQuantity("apple", 50);
console.log(checkItemQuantity("apple")); // Output: 150
console.log(checkItemQuantity("banana")); // Output: 150


updateItemQuantity("grapes", 20)
console.log(checkItemQuantity("orrange"))