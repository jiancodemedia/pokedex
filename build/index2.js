"use strict";
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);
var options = "Select an option: \n    1: Add new Pokemon.\n    2: Delete pokemon.\n    3: Show all Pokemons.\n    0: Exit.\n";
var running = true;
var pokemons = {};
function addNewPokemon() {
    var name = prompt("Enter Pokemon name: ");
    var level = prompt("Enter Pokemon Level: ");
    var pokemon = { name: name, level: level };
    pokemons[name] = pokemon;
}
function main() {
    console.log("Welcome to PokeDex!");
    rl.setPrompt(options);
    rl.prompt();
    rl.on("line", function (option) {
        switch (option) {
            case "1":
                console.log("ahahahah");
                addNewPokemon();
                console.log(JSON.stringify(pokemons));
                break;
            case "2":
                break;
            case "3":
                break;
            case "0":
                running = false;
                break;
            default:
                break;
        }
        rl.prompt();
    });
}
main();
