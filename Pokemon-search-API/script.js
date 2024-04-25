const form = document.querySelector("form");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button")
const pokName = document.getElementById("pokemon-name");
const pokId = document.getElementById("pokemon-id");
const pokWeight = document.getElementById("weight");
const pokHeight = document.getElementById("height");
const img = document.getElementById("img-pok");
const type = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const speAttack = document.getElementById("special-attack");
const speDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

searchBtn.onclick = async () => {
  if (searchInput.value !== "") {
    try {
     const api = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput.value.toLowerCase()}`);
      if (api.status === 404) {
        alert("Pokémon not found.");
        resetUI();
        return;
      }
     const data = await api.json();
     inputsApiData(data);
   } catch (err) {
     console.log("there was a error: " + err); 
   }  
  } else {
    alert("insert a value")
    resetUI();
    }
}

const inputsApiData = (data) => {
   const {height, id, name, sprites, stats, types, weight} = data;
   pokName.innerText = name.toUpperCase();
   pokId.innerText =  `#${id}`;
   pokWeight.innerText = `Weight: ${weight}`;
   pokHeight.innerText = `Height: ${height}`;
   img.innerHTML = `<img id="sprite" src="${sprites.front_default}" alt="${name}-image">`;
   type.innerHTML = types
      .map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`)
      .join('').toUpperCase();
   hp.innerText = stats[0].base_stat;
   attack.innerText = stats[1].base_stat;
   defense.innerText = stats[2].base_stat;
   speAttack.innerText = stats[3].base_stat;
   speDefense.innerText = stats[4].base_stat;
   speed.innerText = stats[5].base_stat;}

const resetUI = () => {
   searchInput.value = "";
   pokName.innerText = "";
   pokId.innerText =  "";
   pokWeight.innerText = "";
   pokHeight.innerText = "";
   img.innerHTML = "";
   type.innerHTML = "";
   hp.innerText = "";
   attack.innerText = "";
   defense.innerText = "";
   speAttack.innerText = "";
   speDefense.innerText = "";
   speed.innerText = "";
}

form.addEventListener("submit", e => {e.preventDefault()})