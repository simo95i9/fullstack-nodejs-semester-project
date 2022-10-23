<script>
    import {Temporal} from "@js-temporal/polyfill";
    import Date from "./Date.svelte";

    const name = "Simon"
    const now = Temporal.Now.zonedDateTimeISO()
</script>

<h1 id="page-title">First Svelte Project</h1>
<p>My name is {name} and today's date is</p><br>
<Date></Date>



<style>
</style>