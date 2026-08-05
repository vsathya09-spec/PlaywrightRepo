//var--can be redeclared and reassigned
var company = "Google";
var company = "Microsoft"; // redeclared
company = "Apple";         // reassigned
console.log(company);

//let--can be reassigned but cannot be redeclared
let city = "New York";
//let city = "Los Angeles"; // redeclaration will throw an error    
city = "Chicago";           // reassigned
console.log(city);

//const--cannot be redeclared or reassigned
const country = "USA";
//const country = "Canada"; // redeclaration will throw an error
//country = "Mexico";
console.log(country); // reassignment will throw an error
