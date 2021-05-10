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
                                    </select>
                                </div>
                            </div>
                            <div class="column is-half">
                                <div class="select">
                                    <!-- svelte-ignore a11y-no-onchange -->
                                    <select bind:value={value2_type} on:change={type_change}>
                                        <option>Kilometers</option>
                                        <option>Meters</option>
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

const val1_update = () => {
    last = 1;
    calc_val2();
}

const val2_update = () => {
    last = 2;
    calc_val1();
}

const type_change = () => {
    switch (last) {
        case 1:
            calc_val2();
            break;
        default:
            calc_val1();
            break;
    }
}

const calc_val2 = () => {
    switch (value1_type) {
        case "Miles":
            if (value2_type === "Kilometers") {
                value2 = (value1 * 1.609).toFixed(2);
            } else {
                value2 = (value1 * 1609).toFixed(2);
            }
            break
        case "Yards":
            if (value2_type === "Kilometers") {
                value2 = (value1 / 1094).toFixed(2);
            } else {
                value2 = (value1 / 1.094).toFixed(2);
            }
            break
        case "Feet":
            if (value2_type === "Kilometers") {
                value2 = (value1 / 3281).toFixed(2);
            } else {
                value2 = (value1 / 3.281).toFixed(2);
            }
            break
    }
}

const calc_val1 = () => {
    switch (value2_type) {
        case "Kilometers":
            if (value1_type === "Miles") {
                value1 = (value2 / 1.609).toFixed(2);
            } else if (value1_type === "Yards") {
                value1 = (value3 * 1094).toFixed(2);
            } else {
                value1 = (value3 * 3281).toFixed(2);
            }
            break
        case "Meters":
            if (value1_type === "Miles") {
                value1 = (value2 / 1609).toFixed(2);
            } else if (value1_type === "Yards") {
                value1 = (value3 * 1.094).toFixed(2);
            } else {
                value1 = (value3 * 3.281).toFixed(2);
            }
            break
    }
}

</script>