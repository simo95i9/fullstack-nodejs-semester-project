<script>
    import FooterYear from "../lib/FooterYear.svelte";
</script>

<header>
    <nav>
        <a href="/"><img src="/pikachu.gif" alt="pikachu dancing" height="64"></a>
        <ul>
            <li><a href="/battle">Battle</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
</header>

<main>
<slot></slot>
</main>

<footer>
    © Simon Gredal, <FooterYear />
</footer>