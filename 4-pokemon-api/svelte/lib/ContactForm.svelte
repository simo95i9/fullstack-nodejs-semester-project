<script>
    import Form from "./Form.svelte";

    const data = {
        email: "simon@gred.al",
        subject: "Please notice me senpai UwU",
        message: "UwU I reawwy wike your website hehe (っ◕‿◕)っ ♥ (≧◡≦)",
    };

    function formdata() {
        return data;
    }

    function validity() {
        return Object.values(data).every(d => d !== null && d !== "");
    }

    function reset(event) {
        console.dir(event);
        data.email = "";
        data.subject = "";
        data.message = "";
    }
</script>

<Form action={"/api/v1/contact"} {formdata} {reset} {validity}>
    <label for="email">Email</label>
    <input type="text" name="email" id="email" required autocomplete="email" placeholder="you@example.com" bind:value={data.email}>

    <label for="subject">Subject</label>
    <input type="text" name="subject" id="subject" required placeholder="Subject of your message" bind:value={data.subject}>

    <label for="message">Message</label>
    <textarea name="message" id="message" required placeholder="Please don't be rude :)" bind:value={data.message}></textarea>
</Form>

<style>
    textarea {
        resize: vertical;
        min-height: 3rem;
    }
</style>

