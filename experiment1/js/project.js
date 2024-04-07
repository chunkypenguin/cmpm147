// project.js - purpose and description here
// Author: Your Name
// Date:

// NOTE: This is how we might start a basic JavaaScript OOP project

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file

// define a class
class MyProjectClass {
  // constructor function
  constructor(param1, param2) {
    // set properties using 'this' keyword
    this.property1 = param1;
    this.property2 = param2;
  }
  
  // define a method
  myMethod() {
    // code to run when method is called
  }
}

function main() {
  const fillers = {
    greeting: [
      "Greetings",
      "Ahoy",
      "Salutations",
      "Welcome",
      "Halt",
      "Wait right there",
      "Stop there",
    ],
    place: ["castle", "church", "city", "village", "colosseum", "tavern"],
    food: [
      "bananas",
      "apples",
      "oranges",
      "dragon fruits",
      "loafs of bread",
      "wheels of cheese",
      "eggs",
      "cabbage heads",
    ],
    weapons: ["axes", "great swords", "short swords", "daggers", "crossbows", "spears", "maces", "longbows"],
    potions: [
      "healing potions",
      "potions of stength",
      "potions of invisibility",
      "charm potions",
      "mana potions",
      "fire potions",
      "shock potions",
      "frost potions",
      "stamina potions",
    ],
    apparel: [
      "pairs of shoes",
      "linen shirts",
      "tunics",
      "leather belts",
      "dresses",
      "slippers",
      "boots",
      "wooden clogs",
    ],
    flowers: ["roses", "violets", "tulips", "daisys",],
    decision: ["Luckily for you I love flowers! Please enter.", "Unfortunately for you I hate food! Go back from which you came!",
    "Luckily for you I love weapons! Please enter.", "Unfortunately for you I hate apparel! Go back from which you came!",
    "Luckily for you I love potions! Please enter."],
    number: [52, 4, 632, 101, 28, 5, 11, 7, 9999, 87, 42, 3, 6, 8, 33, 1337],
  };
  
  const template = `$greeting!
  
    In order to gain access to the $place I must search your inventory.
    
    Let's see what what you have here...
    
    $number $food,
    $number $weapons,
    $number $potions,
    $number $apparel,
    and $number $flowers...
    
    That's quite the load you're carrying. 
    
    $decision
  `;
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    $("#box").text(story);
  }
  
  /* global clicker */
  $("#clicker").click(generate);
  
  generate();
}

// let's get this party started - uncomment me
main();