const firstName = "Amr"; // 1. Replaced var with const
const itemCount = 4; // 1. Replaced var with const

const message = `Hi ${firstName}, you have ${itemCount} items.`; // 2. Used a template literal instead of string concatenation
const prices = [10, 20, 30]; // 1. Replaced var with const

const doubled = prices.map(price => price * 2); 
// 3. map() creates a new array by transforming each element, resulting in shorter and more expressive code
// 4. Used an arrow function as it provides more concise syntax