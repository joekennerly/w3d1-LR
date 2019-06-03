//
// ─── EXERCISE 1 ─────────────────────────────────────────────────────────────────
//

// A String
let str = "lunch, peanutbutter and jelly, whole wheat, grape juice, apple";

// An Object
let obj = {
  meal: "lunch",
  sandwich: "peanut butter and jelly",
  bread: "whole wheat",
  drink: "grape juice",
  fruit: "apple"
};

// An Array
let arr = [
  "lunch",
  "peanut butter and jelly",
  "whole wheat",
  "grape juice",
  "apple"
];

//
// ─── EXERCISE 2 ─────────────────────────────────────────────────────────────────
//

// Use string template literal syntax to create the following sentence from the variables below
// "Hi. My name is Biff, and I'm 30 years old. They say that makes me a millenial. In 25 years I'll be 55! I guess that means I'll be a milleni-old then. Ha ha!"

const age = 30;
const timeSpan = 25;
const futureAge = age + timeSpan;
const name = "Biff";
const generationStereotype = "millenial";
const dadJoke = "milleni-old";

let biffSentence = `Hi. My name is ${name}, and I'm ${age} years old. They say that make me a ${generationStereotype}. In ${timeSpan} years I'll be ${futureAge}! I guess that means I'll be a ${dadJoke} then. Ha ha!`;

//
// ─── EXERCISE 3 ─────────────────────────────────────────────────────────────────
//

let blogContainer = document.querySelector(".blogPosts");

let myArticles = document.querySelectorAll(".blogArticle");

console.log(blogContainer, myArticles);

// myArticles returns a NodeList. To apply a class to an individual element, you need to access each element through bracket notation or a for loop.