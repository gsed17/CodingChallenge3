// Task 1: Product Price Management
// Declare an array of prices and initialize it with at least five numerical values
let spicePrices = [500, 1200, 1800, 2500, 3000];
// Add a new price to the array
spicePrices.push(3500);
// Remove the first price from the array
spicePrices.shift();
// Log the updated price list to the console
console.log("Updated Spice Prices:", spicePrices);
// Task 2: Modifying Customer Orders
// Declare an array representing order quantities
let orders = [15, 25, 35, 45, 55];
// Increase the third order quantity by 5
orders[2] += 5;
// Calculate the total number of all orders
const totalOrders = orders.reduce((total, quantity) => total + quantity, 0);
// Log the updated array and total order count to the console
console.log("Updated Orders:", orders);
console.log("Total Orders:", totalOrders);