const pokemon_names = pokemonsfromserver

for (const pokemon_name of pokemon_names) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
        .then((res) => res.ok ? res.json() : null )

    console.log(pokemon)

    document.querySelector("#pokemon").innerHTML +=
        `<aside>
            <img src="${pokemon.sprites.front_default}" alt="sprite of pokemon ${pokemon.name}" class="1x1">
        </aside>`
}


