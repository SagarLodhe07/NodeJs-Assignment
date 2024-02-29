const fs = require("fs");

/**
 * Read
 */
const content = fs.readFileSync("input.txt");
console.log('read file '+content);

/**
 * Write
 */
fs.writeFileSync("output.txt", "How Are You ?");
