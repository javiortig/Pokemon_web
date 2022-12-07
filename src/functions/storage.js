//Add
export function SavePokemons(list) {
  localStorage.setItem("pokedex_pokemons", JSON.stringify(list));
}

//----------------------------------------------

// Verify
export function VerifyPokemons() {
  var pokemons = localStorage.getItem("pokedex_pokemons");
  return JSON.parse(pokemons);
}

export function deletePokemons(){
  localStorage.removeItem("pokedex_pokemons");
}

export function saveUsername(name){
  localStorage.setItem("username", name);
}

export function getUsername() {
  var username = localStorage.getItem("username");
  return username;
}