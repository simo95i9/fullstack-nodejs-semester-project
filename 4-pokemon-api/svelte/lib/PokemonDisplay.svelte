<script>
    export let pokemon
</script>


{#if pokemon}
    <img src={pokemon?.sprites?.front_default} alt={`Sprite of pokémon ${pokemon?.name}`}>
    <h3>{pokemon?.name}</h3>

    <details><summary>Full API Response</summary>
        <pre><samp>{JSON.stringify(pokemon, null, 2)}</samp></pre>
    </details>
{/if}




<style>
    /* Make images full-width, and crop height until aspect-ratio is satisfied  */
    img {
        width: 100%;
        height: auto;
        object-fit: contain;
        aspect-ratio: 16 / 9;
    }

    h3 {
        text-align: center;
    }

    pre samp {
        white-space: pre;
        overflow-x: scroll;
    }
</style>