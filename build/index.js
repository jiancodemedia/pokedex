"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = __importDefault(require("readline"));
var reader = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var askQuestion = function (question, callback) {
    reader.question(question, callback);
};
var pokedex = {
    chamander: {
        name: "chamander",
        level: 5,
    },
    chamaleon: {
        name: "chamaleon",
        level: 10,
    },
    chalizard: {
        name: "chalizard",
        level: 10,
    },
    pichu: {
        name: "pichu",
        level: 3,
    },
    pikachu: {
        name: "pikachu",
        level: 13,
    },
    raychu: {
        name: "raychu",
        level: 18,
    },
};
var questions = "\nSelect an option:\n  1. Find Pokemon with key.\n  2. Find all Pokemon with name.\n  0. exit.\n";
function main() {
    askQuestion(questions, function (answer) {
        if (answer === "1") {
            console.log("Find Pokemon with key.");
            askQuestion("Please enter Pokemon name: ", function (name) {
                var pokemon = findPokemon(name);
                console.log(pokemon);
            });
        }
        else if (answer === "2") {
            console.log("ind all Pokemon with name.");
        }
        else if (answer === 0)
            return;
        main();
    });
}
main();
function findPokemon(key) {
    var pokemon = pokedex[key];
    return pokemon;
}
// function findName(name) {
//   const pokemons = Object.values(pokedex);
//   return pokemons.filter((pokemon) => {
//     return pokemon.name === name;
//   });
// }
// function findName(name) {
//   const pokemons = Object.values(pokedex);
//   let foundPokemon = [];
//   pokemons.forEach((pokemon) => {
//     if (pokemon.name === name) {
//       foundPokemon = pokemon;
//     }
//   });
//   return foundPokemon;
// }
// console.log(findName("chamander"));
// function findName(name) {
//   const pokemons = Object.values(pokedex);
//   let foundPokemon = [];
//   pokemons.forEach((pokemon) => {
//     if (pokemon.name === name) {
//       foundPokemon.push(pokemon);
//     }
//   });
//   return foundPokemon;
// }
// console.log(findName("chamander"));
// function findLevel (level){
//   const pokemons = Object.values(pokedex)
//   let foundLevel
//   pokemons.forEach(pokeLevel => {
//     if (pokeLevel.level === level){
//       foundLevel = pokeLevel
//     }
//   })
//   return foundLevel
// }
//   console.log(findLevel(13))
// function findLevel(level) {
//   const pokemons = Object.values(pokedex);
//   let foundLevel = [];
//   pokemons.forEach((pokeLevel) => {
//     if (pokeLevel.level === level) {
//       foundLevel.push(pokeLevel);
//     }
//   });
//   return foundLevel;
// }
// console.log(findLevel(10));
// function addPokemon(key, name, level) {
//   const newpokemon = {
//     name: name,
//     level: level,
//   };
//   pokedex[key] = newpokemon;
// }
// addPokemon("eve", "eve", 11);
// addPokemon("pigeon", "pigeon", 13);
// function deletePokemon(key) {
//   delete pokedex[key]
// }
// deletePokemon('pikachu')
// console.log(pokedex)
// function renamePokemon(key, name) {
//  pokedex[key][name] = name;
//  pokedex.pikachu.pika = 'pika'
//   pokedex[key].name= name;
//   pokedex.pikachu.name = name;
// }
// renamePokemon('pikachu', 'pika')
// console.log(pokedex)
// function addColour(key, colour) {
//   pokedex[key].colour = colour;
// }
// addColour("pikachu", "yellow");
// console.log(pokedex);
// function changeLevel(key, level) {
//   pokedex[key].level = level
// }
//  changeLevel('raychu', 30)
// console.log(pokedex)
