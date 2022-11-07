<script>
    export let action = "";
    export let method = "post";

    export let formdata = (element) => {
        return new FormData(element);
    }

    export let submit = (event) => {
        const data = formdata(event.target)

        if (data instanceof FormData)
            return fetch(action, {method, body: data})


        const headers = new Headers({"Content-Type": "application/json"})
        return fetch(action, {method, headers, body: JSON.stringify(data)})
    };

    export let reset = () => {};
    export let validity = () => true;

    let disabled = !validity()
    let status = "initial"
    let statusText = "Submit"

    function wrappedReset() {
        reset()
        status = "initial"
        statusText = "Submit"
        disabled = !validity()
    }

    function wrappedValidity() {
        disabled = !validity()
        status = "initial"
        statusText = "Submit"
    }

    function wrappedSubmit(event) {
        status = "waiting"
        statusText = "Submitting..."
        disabled = true

        submit(event)
            .then(response => {
                console.log("<Form /> submit success: ", response)
                status = response.ok ? "success" : "error"
                statusText = response.ok ? "Success!" : "Error!"
            }).catch(error => {
                console.log("<Form /> submit error: ", error)
                status = "error"
                statusText="Error!"
            })
    }
</script>

<form {action} {method} on:input={wrappedValidity} on:submit|preventDefault={wrappedSubmit}
      on:reset={wrappedReset}>
    <slot>Please remember to fill in the form :)</slot>
    <slot name="buttons">
        <button type="reset">Reset</button>
        <button type="submit" data-status={status} {disabled}>{statusText}</button>
    </slot>
</form>

<style>
    button[type="reset"] {
        background-color: grey;
        border-color: grey;
        color: var(--color-bg);
    }

    button[data-status="waiting"] {
        background-color: grey;
        border-color: gray;
        color: var(--color-bg);
    }

    button[data-status="success"] {
        background-color: forestgreen;
        border-color: forestgreen;
        color: var(--color-bg);
    }

    button[data-status="error"] {
        background-color: red;
        border-color: red;
        color: var(--color-bg);
    }
</style>