const search = document.getElementById("searchEntry");
const button = document.getElementById("submitButton");
const pokeName = document.getElementById("pokeName");
const pokeTypes1 = document.getElementById("pokeTypes1");
const pokeTypes2 = document.getElementById("pokeTypes2");
const pokeImg = document.getElementById("pokeImg");
const pokeNum = document.getElementById("pokeNum");


const getPokemonData = async (textEntry) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${textEntry}`
    
    const response = await fetch(url)
    const pokemonChar  = await response.json()


    document.getElementById("pokeImg").setAttribute("src", pokemonChar.sprites.versions["generation-v"]["black-white"].animated.front_default)
    
    pokeName.innerHTML = pokemonChar.name 
    pokeNum.innerHTML = "#" + pokemonChar.id
    pokeTypes1.innerHTML = pokemonChar.types[0].type.name

        if (pokemonChar.types.length >1) {
            pokeTypes2.innerHTML = " & "+pokemonChar.types[1].type.name
         }else{pokeTypes2.innerHTML =""}
        }
button.addEventListener("click", ()=> getPokemonData(search.value))


