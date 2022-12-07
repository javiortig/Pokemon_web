import { myPokemons } from "../data/gen1.js";
import {pokemonDescubiertos} from "../data/descubiertos.js";
import { getUsername } from "./storage";

export function RemoveAspas(val) {
  if (val != null) return val.replace(/[\\"]/g, "");
}

export function GetImageById(id) {
  id = id.toString().padStart(3, "0");
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
}

// export function GetDescubiertoByNumPokedex(number) {
//   let resFlag = false;

//   myPokemons.forEach(pokemon => {
//     if (parseInt(pokemon.Num_Pokedex) === parseInt(number)){
//       resFlag = (pokemon.Descubierto !== "");
//     }
//   });

//   return resFlag;
// }

export function GetDescubiertoByName(name) {
  let username = getUsername();

  for(let i=0; i< pokemonDescubiertos.length; i++){
    if (username in pokemonDescubiertos[i] && pokemonDescubiertos[i].Nombre.toLowerCase() === name){
      if (pokemonDescubiertos[i][username] !== ""){
        return true;
      }
    }
  }

  return false;;
}

export function GetRazaDescubierta(name, raza) {
  let username = getUsername();

  for(let i=0; i< pokemonDescubiertos.length; i++){
    if (username in pokemonDescubiertos[i] && pokemonDescubiertos[i].Nombre.toLowerCase() === name && pokemonDescubiertos[i].Raza.toLowerCase() == raza){
      if (pokemonDescubiertos[i][username] !== ""){
        return true;
      }
    }
  }

  return false;;
}

export function GetMyPokemonByName(name) {

  for(let i=0; i< myPokemons.length; i++){
    if (myPokemons[i].Nombre.toLowerCase() === name){
      return myPokemons[i];
    }
  }

  return null;
}

export function GetStatsByPokemonName(name){
  for(let i=0; i< myPokemons.length; i++){
    if (myPokemons[i].Nombre.toLowerCase() === name){
      return [{
        "name": "Health",
        "base_stat": myPokemons[i].Vida
      },
      {
        "name": "Speed",
        "base_stat": myPokemons[i].Velocidad
      }];
    }
  }

  return null;
}

export function GetAbilitiesByPokemonName(name){
  let abilities_set = new Set();
  let abilities = "";

  for(let i=0; i< myPokemons.length; i++){
    if (myPokemons[i].Nombre.toLowerCase() === name){
      abilities_set.add(myPokemons[i].Nombre_Habilidad);
    }
  }

  for (var it = abilities_set.values(), val= null; val=it.next().value; ) {
    abilities += val + ', ';
  }

  return (abilities === "")?("-"):(abilities.slice(0, -2) + '.');
}

export function DetermineGenderRate(gender) {
  switch (gender) {
    case -1:
      return "N/A";
    case 0:
      return "0%\u2640 100%\u2642";
    default:
      const female = Math.round(gender * 1250) / 100;
      const male = 100 - female;
      return `${female}%\u2640 ${male}%\u2642`;
  }
}
