<div class="container">
    <div class="columns is-centered is-vcentered is-multilined">
        <div class="column is-half">
            <div class="card calculator">
                <div class="card-content">
                    <div class="content">
                        <div class="columns is-multiline">
                            <div class="column is-half">
                                <div class="field">
                                    <label for="Distance" class="label">Distance ({value1_type})</label>
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
                                    <select id="Units" bind:value={value1_type}>
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
                                    <select id="Output" bind:value={value2_type}>
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

{#if result}
<section class="section">
    <div class="container has-text-centered is-uppercase">
        <h4 class="subtitle is-4">{result} {result_type}</h4>
    </div>
</section>
{/if}

<script>
let hours, mins, secs, distance, value1_type, value2_type, total_hours, result, result_type;
const decimal = 2;

const calculate = () => {
    total_hours = 0;
    if (hours) total_hours += hours;
    if (mins)  total_hours += (mins / 60);
    if (secs)  total_hours += (secs / (60 * 60));
    result = convert(value1_type, value2_type, distance);
    result_type = value2_type;
}

const convert = (from, to, value) => {
    switch (from) {
        case "Miles":
            switch (to) {
                case "mph":
                    return (value / total_hours).toFixed(decimal);
                case "kph":
                    return ((value * 1.609) / total_hours).toFixed(decimal);
                case "mps":
                    return ((value * 1609) / (total_hours * 60 * 60)).toFixed(decimal)
            }
        case "Yards":
            switch (to) {
                case "mph":
                    return ((value / 1760) / total_hours).toFixed(decimal);
                case "kph":
                    return ((value / 1094) / total_hours).toFixed(decimal);
                case "mps":
                    return ((value / 1.094) / (total_hours * 60 * 60)).toFixed(decimal)
            }
        case "Feet":
            switch (to) {
                case "mph":
                    return ((value / 5280) / total_hours).toFixed(decimal);
                case "kph":
                    return ((value / 3281) / total_hours).toFixed(decimal);
                case "mps":
                    return ((value / 3.281) / (total_hours * 60 * 60)).toFixed(decimal)
            }
        case "Kilometers":
            switch (to) {
                case "mph":
                    return ((value / 1.609) / total_hours).toFixed(decimal);
                case "kph":
                    return (value / total_hours).toFixed(decimal);
                case "mps":
                    return ((value * 1000) / (total_hours * 60 * 60)).toFixed(decimal)
            }
        case "Meters":
            switch (to) {
                case "mph":
                    return ((value / 1609) / total_hours).toFixed(decimal);
                case "kph":
                    return ((value / 1000) / total_hours).toFixed(decimal);
                case "mps":
                    return (value / (total_hours * 60 * 60)).toFixed(decimal)
            }
    }
}
</script>

<style>
    #c-btn {
        border-radius: 0 0 .25rem .25rem;
    }
</style>