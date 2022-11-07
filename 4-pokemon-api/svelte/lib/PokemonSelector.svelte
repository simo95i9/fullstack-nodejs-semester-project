<script>
    import PokemonDisplay from "./PokemonDisplay.svelte"

    let pokemon_name
    let pokemon

    async function submit() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)

        if (!response.ok)
            pokemon = null

        pokemon = await response.json()
    }

</script>

<form on:submit|preventDefault={submit}>
    <input type="text" bind:value={pokemon_name}>
    <input type="submit" value="Submit">
</form>

<PokemonDisplay {pokemon}/>

<style>
    form {
        border: none;
        box-shadow: none;
        padding: 0;
    }
    input[type=text] {
        display: inline-block;
        width: calc(100% - 8rem)
    }
    input[type=submit] {
        padding: 0.2rem 0.8rem;
    }
</style>