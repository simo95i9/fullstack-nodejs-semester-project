<script>

import PokemonSelector from "$lib/PokemonSelector.svelte";
</script>

<svelte:head>
    <title>Pokémon Battle</title>
</svelte:head>

<h1>Welcome to the Battle Page</h1>

<section>
    <aside>
        <p>Select your first pokemon</p>
        <PokemonSelector />
    </aside>

    <aside>
        <p>Select your second pokemon</p>
        <PokemonSelector />
    </aside>
</section>

<style>
    aside {
        width: var(--width-card-medium)
    }
</style>

