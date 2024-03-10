import readline from "readline";
import { multiply } from "./index1.js";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question, callback) => {
  reader.question(question, callback);
};

const pokedex = {
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

const options = `
Select an option:
  1. Find Pokemon with key.
  2. Find all Pokemon with name.
  3. Find Pokemon with level
  4. Delete a pokemon
  5. Add a pokemon
`;

function main() {
  askQuestion(options, (option) => {
    switch (option) {
      case "1":
        askQuestion("Please enter Pokemon key: ", (key) => {
          const pokemon = findPokemon(key);
          if (!pokemon) {
            console.log(`${key} doesnt exist in this pokedex`);
          } else {
            console.log(pokemon);
          }
          main();
        });
        break;
      case "2":
        askQuestion("Please enter Pokemon name: ", (name) => {
          console.log(findName(name));
          main();
        });
        break;
      case "3":
        askQuestion("Please enter Pokemon level: ", (level) => {
          console.log(findAllLevel(Number(level)));
          main();
        });
        break;
      case "4":
        askQuestion("Delete which Pokemon: ", (key) => {
          deletePokemon(key);
          console.log(pokedex);
          main();
        });
        break;
      case "5":
        askQuestion("Add Pokemon key: ", (key) => {
          askQuestion("Add Pokemon name: ", (name) => {
            askQuestion("Add Pokemon level: ", (level) => {
              addPokemon(key, name, level);
              console.log(pokedex);
              main();
            });
          });
        });

        // askQuestion("Add Pokemon: ", (pokemon) => {
        //   const [key, name, level] = pokemon.split(" ");
        //   addPokemon(key, name, Number(level));
        //   console.log(pokedex);
        //   main();
        // });
        break;
      default:
        main();
        break;
    }
  });
}

// main();

function findTicketPrice(email) {
  let hasNumber = false;

  email.split("").forEach((char) => {
    if (!isNaN(Number(char))) {
      hasNumber = true;
    }
  });

  return hasNumber;
}

console.log(findTicketPrice("asd"));

function addPokemon(key, name, level) {
  const newpokemon = {
    name: name,
    level: level,
  };
  pokedex[key] = newpokemon;
}
// addPokemon("eve", "eve", 11);
// addPokemon("pigeon", "pigeon", 13);

function deletePokemon(key) {
  delete pokedex[key];
}
// deletePokemon('pikachu')
// console.log(pokedex)

function findPokemon(key) {
  const pokemon = pokedex[key];
  return pokemon;
}

function findName(name) {
  const pokemons = Object.values(pokedex);

  return pokemons.filter((pokemon) => {
    return pokemon.name === name;
  });
}

// function findLevel(level) {
//   const pokemons = Object.values(pokedex);
//   let foundLevel;
//   pokemons.forEach((pokeLevel) => {
//     if (pokeLevel.level === level) {
//       foundLevel = pokeLevel;
//     }
//   });
//   return foundLevel;
// }
function findAllLevel(level) {
  const pokemons = Object.values(pokedex);
  let foundLevel = [];
  pokemons.forEach((pokeLevel) => {
    if (pokeLevel.level === level) {
      foundLevel.push(pokeLevel);
    }
  });
  return foundLevel;
}
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

//   console.log(findLevel(13))

// console.log(findLevel(10));

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
