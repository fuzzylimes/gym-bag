<div class="container">
    <div class="columns is-centered is-vcentered">
        <div class="column is-10-tablet is-half-fullhd">
            <div class="card calculator">
                {#if !active}
                <div class="card-content">
                    <div class="content">
                        <div class="columns is-multiline is-mobile is-vcentered">
                            {#each circuits as circuit, i (circuit.id)}
                            <div class="column is-12-mobile is-5-tablet">
                                <div class="field">
                                    <label for="Name" class="label">Circut Name</label>
                                    <div class="control">
                                        <input id="Name" class="input" type="text" bind:value={circuit.name}>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-5-mobile is-3-tablet">
                                <div class="field">
                                    <label for="Time" class="label">Time</label>
                                    <div class="control">
                                        <input id="Time" class="input" type="number" placeholder="Time" bind:value={circuit.time}>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-5-mobile is-3-tablet">
                                <label for="Units" class="label">Units</label>
                                <div class="select is-fullwidth">
                                    <!-- svelte-ignore a11y-no-onchange -->
                                    <select bind:value={circuit.units}>
                                        <option>Minutes</option>
                                        <option>Seconds</option>
                                    </select>
                                </div>
                            </div>
                            <div class="column is-1">
                                <div id="del">
                                    <div class="button is-link" on:click={() => remove(circuit.id)}>
                                        <span class="icon is-small">
                                            <i class="fas fa-times"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/each}
                            <div class="column">
                                <div class="button is-link" on:click={addCircuit}>
                                    <span class="icon">
                                        <i class="fas fa-plus"></i>
                                    </span>
                                    <span>Add Circuit</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {:else}
                <div class="card-content">
                    <div class="content">
                        <div class="columns is-centered is-vcentered is-multiline">
                            <div class="column is-4 has-text-centered">
                                <h2 class="title is-3 has-text-dark">
                                    {current_step}
                                </h2>
                            </div>
                            <div class="column is-8 has-text-centered">
                                <h2 class="title is-1 has-text-dark">
                                    {current_display_time}
                                </h2>
                            </div>
                            <div class="column is-full has-text-centered my-3">
                                <h1 class="title is-4 has-text-dark">Up Next...</h1>
                            </div>
                            <div class="column is-4 has-text-centered">
                                <h2 class="title is-4 has-text-dark">
                                    {next_step}
                                </h2>
                            </div>
                            <div class="column has-text-centered">
                                <h2 class="title is-4 has-text-dark">
                                    {next_time}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/if}
                <footer class="card-footer">
                    <button id="c-btn" class="button card-footer-item is-link" on:click={start}>{active ? "Stop" : "Start"}</button>
                </footer>
            </div>
        </div>
    </div>
</div>

{#if has_error}
<div class="section">
    <div class="columns is-centered">
        <div class="has-text-centered">
            <div class="notification is-danger">
                {error_text}
            </div>
        </div>
    </div>
</div>
{/if}

<script>
    let active = false;
    let id = 1;
    let has_error = false;
    let error_text, task;
    let current;
    let current_step, current_time, next_step, next_time, current_display_time;
    let circuits = [
        {
            id: 1,
            name: 'Circuit 1'
        }
    ]

    const addCircuit = () => {
        circuits = [...circuits, {
            id: ++id,
            name: `Circuit ${id}`
        }]
    }

    const start = () => {
        validate();
        if (!active) {
            active = true;
            console.log(circuits)
            current = 0;
            setSteps()
            task = setInterval(countdown, 1000);
        } else {
            active = false;
            clearInterval(task);
        }
    }

    const setSteps = () => {
        let next = current + 1 === circuits.length ? 0 : current + 1;
        current_step = circuits[current].name;
        current_time = circuits[current].units === 'Minutes' ? circuits[current].time * 60 : circuits[current].time;
        // This might be needed if setInterval gets off...
        // end_time = (new Date()).getTime() + current_time;
        next_step = circuits[next].name;
        next_time = `${circuits[next].time} ${circuits[next].units}`;
        setDisplayTime(current_time);
    }

    const countdown = () => {
        // Naieve implementation - assuming that interval will run exactly every second
        // Total time will be slightly off, but this isn't rocket science.
        current_time--;
        setDisplayTime(current_time);
        if (current_time === 0) {
            playSound('./beep.mp3');
            current = current + 1 == circuits.length ? 0 : current + 1;
            console.log(current);
            setSteps();
        }
    }

    // Set the HH:MM:SS.sss to be rendered
    const setDisplayTime = (time) => {
        current_display_time = (new Date(time)).toISOString().slice(11,23);
    }

    // Remove configured circuit
    const remove = (i) => {
        circuits = circuits.filter(idx => idx.id != i);
    }

    // Validate everything is valid numbers before starting
    const validate = () => {
        error_text = "";
        has_error = false;
        circuits.forEach(c => {
            console.log(c);
            if (!c.time || typeof c.time !== 'number' || c.time < 1) {
                error_text = "Invalid time value. Must be a positive number greater than 1."
                has_error = true;
                return;
            }
        });
    }

    function playSound(url) {
        const audio = new Audio(url);
        audio.play();
    }
</script>

<style>
    #c-btn {
        border-radius: 0 0 .25rem .25rem;
    }

    #del {
        padding-top: 32px;
    }
</style>