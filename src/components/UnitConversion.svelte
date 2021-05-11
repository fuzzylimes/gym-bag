<div class="container">
    <div class="columns is-centered is-vcentered">
        <div class="column is-half">
            <div class="card calculator">
                <div class="card-content">
                    <div class="content">
                        <div class="columns is-multiline is-mobile">
                            <div class="column is-half">
                                <div class="field">
                                    <label for="Value1" class="label">{value1_type}</label>
                                    <div class="control">
                                        <input id="Value1" class="input" type="number" placeholder="Value" bind:value={value1} on:input={val1_update}>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-half">
                                <div class="field">
                                    <label for="Value2" class="label">{value2_type}</label>
                                    <div class="control">
                                        <input id="Value2" class="input" type="number" placeholder="Value" bind:value={value2} on:input={val2_update}>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-half">
                                <div class="select">
                                    <!-- svelte-ignore a11y-no-onchange -->
                                    <select bind:value={value1_type} on:change={type_change}>
                                        <option>Miles</option>
                                        <option>Yards</option>
                                        <option>Feet</option>
                                        <option disabled>----------</option>
                                        <option>Kilometers</option>
                                        <option>Meters</option>
                                    </select>
                                </div>
                            </div>
                            <div class="column is-half">
                                <div class="select">
                                    <!-- svelte-ignore a11y-no-onchange -->
                                    <select bind:value={value2_type} on:change={type_change}>
                                        <option>Kilometers</option>
                                        <option>Meters</option>
                                        <option disabled>----------</option>
                                        <option>Miles</option>
                                        <option>Yards</option>
                                        <option>Feet</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
let value1, value2, value1_type, value2_type, last;
let decimals = 2;

const val1_update = () => {
    last = 1;
    value2 = convert(value1_type, value2_type, value1)
}

const val2_update = () => {
    last = 2;
    value1 = convert(value2_type, value1_type, value2)
    calc_val1();
}

const type_change = () => {
    switch (last) {
        case 1:
            value2 = convert(value1_type, value2_type, value1)
            break;
        default:
            value1 = convert(value2_type, value1_type, value2)
            break;
    }
}

const convert = (from, to, value) => {
    switch (from) {
        case "Miles":
            switch (to) {
                case "Kilometers":
                    return (value * 1.609).toFixed(decimals);
                case "Meters":
                    return (value * 1609).toFixed(decimals);
                case "Miles":
                    return value
                case "Yards":
                    return (value * 1760).toFixed(decimals)
                case "Feet":
                    return (value * 5280).toFixed(decimals)
            }
        case "Yards":
            switch (to) {
                case "Kilometers":
                    return (value / 1094).toFixed(decimals);
                case "Meters":
                    return (value / 1.094).toFixed(decimals);
                case "Miles":
                    return (value / 1760).toFixed(decimals)
                case "Yards":
                    return value
                case "Feet":
                    return (value * 3).toFixed(decimals)
            }
        case "Feet":
            switch (to) {
                case "Kilometers":
                    return (value / 3281).toFixed(decimals);
                case "Meters":
                    return (value / 3.281).toFixed(decimals);
                case "Miles":
                    return (value / 5280).toFixed(decimals)
                case "Yards":
                    return (value / 3).toFixed(decimals)
                case "Feet":
                    return value
            }
        case "Kilometers":
            switch (to) {
                case "Kilometers":
                    return value;
                case "Meters":
                    return (value * 1000).toFixed(decimals);
                case "Miles":
                    return (value / 1.609).toFixed(decimals)
                case "Yards":
                    return (value / 1094).toFixed(decimals)
                case "Feet":
                    return (value / 3281).toFixed(decimals)
            }
        case "Meters":
            switch (to) {
                case "Kilometers":
                    return (value / 1000).toFixed(decimals);
                case "Meters":
                    return value;
                case "Miles":
                    return (value / 1609).toFixed(decimals)
                case "Yards":
                    return (value * 1.094).toFixed(decimals)
                case "Feet":
                    return (value * 3.281).toFixed(decimals)
            }
    }
}

</script>