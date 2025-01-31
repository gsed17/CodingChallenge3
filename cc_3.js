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
// Task 3: Employee Performance Tracking
// Declare an object with properties: name, role, performanceScore, and isActive
let employee = {
    name: "Duncan Idaho",
    role: "Swordmaster",
    performanceScore: 85,
    isActive: true
};
// Update the performanceScore property
employee.performanceScore = 95;
// Add a new property promotionEligible with a boolean value
employee.promotionEligible = true;
// Log the updated employee object to the console
console.log("Updated Employee:", employee);
// Task 4: Customer Feedback Records
// Declare an array containing at least three objects with customer feedback
let feedback = [
    { customerName: "Chani", feedbackText: "Best spice in the Imperium!", rating: 5 },
    { customerName: "Gurney Halleck", feedbackText: "Sublime flavor, truly legendary.", rating: 5 },
    { customerName: "Thufir Hawat", feedbackText: "A necessary commodity.", rating: 4 }
];
// Add a new feedback object to the array
feedback.push({ customerName: "Paul Atreides", feedbackText: "The spice must flow!", rating: 5 });
// Log the entire feedback list to the console
console.log("Customer Feedback:", feedback);