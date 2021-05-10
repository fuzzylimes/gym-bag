<div class="container">
    <div class="columns is-centered is-vcentered is-multilined">
        <div class="column is-half">
            <div class="card calculator">
                <div class="card-content">
                    <div class="content">
                        <div class="columns is-multiline">
                            <div class="column is-half">
                                <div class="field">
                                    <label for="Distance" class="label">Distance</label>
                                    <div class="control">
                                        <input id="Distance" class="input" type="number" placeholder="Distance traveled" bind:value={distance}>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-2">
                                <div class="field">
                                    <label for="Hours" class="label">Hours</label>
                                    <div class="control">
                                        <input id="Hours" class="input" type="number" placeholder="Hr" bind:value={hours}>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-2">
                                <div class="field">
                                    <label for="Min" class="label">Minutes</label>
                                    <div class="control">
                                        <input id="Min" class="input" type="number" placeholder="Min" bind:value={mins}>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-2">
                                <div class="field">
                                    <label for="Seconds" class="label">Seconds</label>
                                    <div class="control">
                                        <input id="Seconds" class="input" type="number" placeholder="Sec" bind:value={secs}>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-half">
                                <label for="Units" class="label">Units</label>
                                <div class="select">
                                    <!-- svelte-ignore a11y-no-onchange -->
                                    <select id="Units" bind:value={value1_type} on:change={type_change}>
                                        <option>Miles</option>
                                        <option>Yards</option>
                                        <option>Feet</option>
                                        <option>Kilometers</option>
                                        <option>Meters</option>
                                    </select>
                                </div>
                            </div>
                            <div class="column is-half">
                                <label class="label" for="Output">Output</label>
                                <div class="select">
                                    <!-- svelte-ignore a11y-no-onchange -->
                                    <select id="Output" bind:value={value2_type} on:change={type_change}>
                                        <option value="mph">Miles per Hour</option>
                                        <option value="kph">Kilometers per Hour</option>
                                        <option value="mps">Meters per Second</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="card-footer">
                    <button id="c-btn" class="button card-footer-item is-link" on:click={calculate}>Calculate</button>
                </footer>
            </div>
        </div>
    </div>
</div>

<script>
let hours, mins, secs, distance, value1_type, value2_type;

const calculate = () => {
    let total = 0;
    total += hours;
}

const type_change = () => {

}
</script>

<style>
    #c-btn {
        border-radius: 0 0 .25rem .25rem;
    }
    .results {
        border-radius: .25rem;
    }
</style>