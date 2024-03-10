// import {
//   connectable,
//   delay,
//   of,
//   switchMap,
//   interval,
//   scan,
//   ReplaySubject,
// } from "rxjs";

// const a = connectable(
//   of(null).pipe(
//     switchMap(() => {
//       const rs = new ReplaySubject<number>();
//       const snap = of(1000).pipe(delay(5000));
//       interval(10000).subscribe(rs);

//       return snap.pipe(
//         switchMap((x) => {
//           const rs2 = new ReplaySubject<number>(1);
//           rs.pipe(
//             scan((acc, value) => {
//               return acc + 1;
//             }, x)
//           ).subscribe(rs2);
//           return rs2;
//         })
//       );
//     })
//   )
// );
// a.connect();

// setTimeout(() => {
//   a.subscribe((x) => {
//     console.log(`B: ${x}`);
//   });
// }, 0);

// setTimeout(() => {
//   a.subscribe((x) => {
//     console.log(`C: ${x}`);
//   });
// }, 5000);

const number1 = 2;

export function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function sum(number1, number2) {
  return number1 + number2;
}

function minus(number1, number2) {
  return number1 - number2;
}

const character = {
  name: "cat",
  level: 4,
  canWalk: true,
  useSkill: function () {
    return "Throw Fire";
  },
  face: {
    ears: 2,
    mouth: 1,
  },
};

function changeName(cha, newName) {
  // cha and newName are the arguments that passed into this function.
  // Accessing to the character property name and change the value to newName (newName is an argument).
  cha.name = newName;

  // Returning the character with the updated property value.
  return cha;
}

function levelUp(cha) {
  // Accessing to the character property level and plus 1 to it.
  cha.level += 1;
  return cha;
}

function setLevel(cha, newLevel) {
  cha.level = newLevel;
  return cha;
}

// This function doesnt need arguments becasue it only create a new character object.
function createNewCharacter(newName) {
  return {
    name: newName,
    level: 4,
    canWalk: true,
    useSkill: function () {
      return "Throw Fire";
    },
    face: {
      ears: 2,
      mouth: 1,
    },
  };
}

/*const dog = {
  head: 1,
  tail: 1,
  name: "doge",
  age: 2,
  sound: function (bark, ye) {
    if (ye) return "haha";
    return "bark time: " + bark;
  },
  eat: true,

  stats: {
    str: 2,
    agi: 1,
  },
};
dog.stats.agi = 5;
console.log(dog.sound(2, false));

("tomato: big tomato, cheese: chedda, base: thick");

function makePizza(tomato, cheese, base) {
  return "tomato: " + tomato + ", cheese: " + cheese + ", base: " + base;
}
console.log(makePizza('big tomato', 'chedda', 'thick'))*/

/*function colours(colour) {
  if (colour === "red") {
    return "apple";
  } else if (colour === "yellow") {
    return "banana";
  } else if (colour === "green") {
    return "pear";
  } else {
    return "no fruit";
  }
}
console.log(colours(" "));

function sendEmail(address, title, body) {
  const email = {
    address: address,
    title: title,
    body: body,
  };
  return email;
}
console.log(sendEmail('road ' + 'hello', 'hi'))*/

// function digitize(n) {
//   //code here
//   const a = String(n);
//   const b = a.split("");
//   const c = b.reverse();
//   const d = c.map((x) => Number(x));
//   return d;
// }
// console.log(digitize(3452));

// function orderSupplies(supplies, cost) {
//   const values = Object.values(supplies);
//   let total = 0;
//   values.forEach((v) => {
//     total += v;
//   });

//   return total * cost;
// }

// console.log(orderSupplies({ cake: 2, iceCream: 7 }, 2));
// console.log(orderSupplies({ plates: 2, cups: 7, forks: 1, partyHats: 4 }, 20));

// const pokedex = {
//   pichu: { name: "pichu", level: 100, stats: { atk: 200, def: 300, spd: 500 } },
//   pikachu: { name: "pikachu", level: 100 },
// };
// pokedex.pichu.colour = "yellow";
// pokedex.chamander = { name: "chamander", level: 20 };
// const pokedex2 = [
//   { name: "pichu", level: 100 },
//   { name: "raychu", level: 100 },
//   { name: "pikachu", level: 100 },
// ];

// console.log(pokedex2);
// console.log(pokedex.chamander.level);

// const alphabets = ["a", "b", "c", "d"].map((a) => {
//   return `'${a}'`;
// });

// console.log(alphabets);

// const alphabets = ["a", "b", "c", "d"];

// for (let index = 0; index < alphabets.length; index++) {
//   const alphabet = alphabets[index];
//   console.log(`"${alphabet}"`);
//   if (alphabet == "c") {
//     console.log("found it");
//     break;
//   }
// }

// const pokeballs = [
//   { name: "pichu", level: 0 },
//   { name: "raychu", level: 0 },
//   { name: "pikachu", level: 0 },
// ];

// for (let index = 0; index < pokeballs.length; index++) {
//   const poke = pokeballs[index]
//   poke.level = 100

// console.log(poke.name)
// console.log(pokeballs)
// }

// const alphabets = ["g", "t", "f", "z"];
// let index = 0;
// let found = false;

// while (found == false) {
//   const alphabet = alphabets[index];
//   console.log(alphabet);
//   if (alphabet == "f") {
//     found = true;
//     console.log("Found it!");
//   }
//   index++;
// }

// const array = [
//   { name: "a", age: 70, canSee: true },
//   { name: "b", age: 33, canSee: true },
//   { name: "c", age: 2, canSee: true },
//   { name: "d", age: 100, canSee: true },
//   { name: "e", age: 80, canSee: true },
//   { name: "f", age: 20, canSee: true },
// ];

// for (let i = 0; i < array.length; i++) {
//   if(array[i].age > 50 && array[i].canSee == true) {
//     array[i].canSee = false
//     console.log(array[i].name)

//   }
// } console.log(array)

// const array = [
//   { name: "a", age: 70, canSee: true },
//   { name: "b", age: 33, canSee: true },
//   { name: "c", age: 2, canSee: true },
//   { name: "d", age: 100, canSee: true },
//   { name: "e", age: 80, canSee: true },
//   { name: "f", age: 20, canSee: true },
// ];

// array.forEach((x) => {
//   if (x.age > 50 && x.canSee == true) {
//     x.canSee = false;
//     console.log(x);
//   }
// });

// const a = [];
// for (let index = 0; index < 10; index++) {
//   a.push(0);
//   console.log(a);
// }

// function odd(numbers) {
//   const oddNumbers = [];
//   numbers.forEach((x) => {
//     if (x % 2 !== 0) {
//       oddNumbers.push(x);
//     }
//   });
//   return oddNumbers;
// }

// const object = {};

// console.log("abc" in object);
// console.log(object.hasOwnProperty("abc"));
// console.log(object.abc);
// console.log(object["abc"]);

// function retrieveKey(object, keys) {
//   const values = [];
//   keys.forEach((key) => {
//     if (key in object) {
//       values.push(object[key]);
//     }
//   });

//   return values;
// }

// console.log(retrieveKey({ name: "abc", password: "1234" }, ["name"]));

// function allValues(object) {
//   return Object.values(object);
// }

// console.log(allValues({ name: "abc", password: "1234", haha: 123 }));

// function altArray (array) {
//   const abc = []
//   for (let i = 0; i < array.length; i += 2) {
//     abc.push(array[i])
//   }
//   return abc
// }
// console.log(altArray(['a', 'b', 'c', 'd', 'e']))

// function checkBeds (beds, numPeople) {
//   if ( beds.doubles * 2 + beds.singles >= numPeople) {
//     return true
//   }
//   else  return false
// }

// console.log(checkBeds({doubles: 5, singles: 0}, 7))

// function petSound(pets) {
//   for (let i = 0; i < pets.length; i++) {
//     if (pets[i].type === "cat") {
//       pets[i].sound = "meow!";
//     } else if (pets[i].type === "dog") {
//       pets[i].sound = "woof!";
//     }
//   }

//   return pets
// }

// console.log(
//   petSound([
//     { name: "ye", type: "dog" },
//     { name: "ye", type: "cat" },
//     { name: "ye", type: "rat" },
//   ])
// );

// function say(age) {
//   return 'Happy Birthday, you are ' + age + ' today!'
// }
// console.log(say(92))

// function roundUp(n, x) {
//   if (x === 0) {
//     return -1;
//   }
//   for (let i = 0; i <= n; i++) {
//     const a = i * x;
//     if (a > n) {
//       return a;
//     }
//   }
// }
// console.log(roundUp(4, 17));

// function remove(arr){
//   arr.pop()
//   return arr
// }

// console.log(remove([1, 2, 3, 4, 5]))

// function happy(age) {
//   const old = 'Happy Birthday, you are ' + age + ' today!'
//   return old
// }
// console.log(happy(2))
