export const pokedex = {
  chamander: {
    name: "chamander",
    level: 5,
    evolve: {
      chamaleon: true,
      sukamon: false
    },
    skills: {
      bite: function() {
        return 'bite'
      },
      kick: function() {
        return 'kick'
      }
    }
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

export function findPokemon(key) {
  const pokemon = pokedex[key];
  return pokemon;
}

export function findName(name) {
  const pokemons = Object.values(pokedex);

  return pokemons.filter((pokemon) => {
    return pokemon.name === name;
  });
}
// export function findName(name) {
//   const pokemons = Object.values(pokedex);
//   let foundPokemon;
//   pokemons.forEach((pokemon) => {
//     if (pokemon.name === name) {
//       foundPokemon = pokemon;
//     }
//   });
//   return foundPokemon;
// }

// export function findName(name) {
//   const pokemons = Object.values(pokedex);
//   let foundPokemon = [];
//   pokemons.forEach((pokemon) => {
//     if (pokemon.name === name) {
//       foundPokemon.push(pokemon);
//     }
//   });
//   return foundPokemon;
// }

export function findAllLevel(level) {
  const pokemons = Object.values(pokedex);
  let foundLevel = [];
  pokemons.forEach((pokeLevel) => {
    if (pokeLevel.level === level) {
      foundLevel.push(pokeLevel);
    }
  });
  return foundLevel;
}
// export function findLevel(level) {
//   const pokemons = Object.values(pokedex);
//   let foundLevel;
//   pokemons.forEach((pokeLevel) => {
//     if (pokeLevel.level === level) {
//       foundLevel = pokeLevel;
//     }
//   });
//   return foundLevel;
// }

export function deletePokemon(key) {
  delete pokedex[key];
}

export function addPokemon(key, name, level) {
  const newpokemon = {
    name: name,
    level: level,
  };
  pokedex[key] = newpokemon;
}

export function renamePokemon(key, name) {
  pokedex[key].name = name;
  
}

export function changeLevel(key, level) {
  pokedex[key].level = level
}

export function addColour(key, colour) {
  pokedex[key].colour = colour;
}




