import readline from "readline";
import {
  pokedex,
  findPokemon,
  findName,
  findAllLevel,
  deletePokemon,
  addPokemon,
  renamePokemon,
  changeLevel,
  addColour
} from "./pokedex.js";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question, callback) => {
  reader.question(question, callback);
};

const options = `
Select an option:
  0. Show pokedex
  1. Find Pokemon with key.
  2. Find all Pokemon with name.
  3. Find Pokemon with level
  4. Delete a pokemon
  5. Add a pokemon
  6. Change pokemon name
  7. Change pokemon level
  8. Add pokemon colour
`;

function main() {
  askQuestion(options, (option) => {
    switch (option) {
      case "0":
        console.log(pokedex);
        main();
        break;
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
        break;

      case "6":
        askQuestion("Rename a Pokemon: ", (key) => {
          askQuestion("Write new name: ", (name) => {
            renamePokemon(key, name);
            console.log(pokedex);
            main();
          });
        });
        break;

      case "7":
        askQuestion("Change pokemon level: ", (key) => {
          askQuestion("New level: ", (level) => {
            changeLevel(key, level);
            console.log(pokedex);
            main();
          });
        });
        break

        case '8': 
        askQuestion('Add pokemon colour: ', (key) => {
          askQuestion('What colour: ', (colour) => {
            addColour(key, colour)
            console.log(pokedex)
            main()
          })
        })
        break;
      default:
        main();
        break;
    }
  });
}

main();
