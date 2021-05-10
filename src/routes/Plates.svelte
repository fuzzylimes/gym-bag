<section class="section">
    <div class="container has-text-centered">
        <h1 class="title is-1">Plate Calculator</h1>
        <h3 class="subtitle is-3">Calculate plates for workouts</h3>
    </div>
</section>

<div class="container">
    <div class="columns is-centered is-vcentered">
        <div class="column is-half">

            <div class="card calculator">
                <div class="card-content">
                    <div class="content">
                        <div class="field">
                            <label for="Weight" class="label">Working Weight</label>
                            <div class="control">
                                <input id="Weight" class="input" type="number" placeholder="Enter workout weight" bind:value={weight}>
                            </div>
                        </div>
                        <div class="field">
                            <label for="Bar" class="label">Barbell Weight</label>
                            <div class="control">
                                <input id="Bar" class="input" type="number" bind:value={bar}>
                            </div>
                        </div>
                        <label for="Units" class="label">Units</label>
                        <div class="control" id="Units">
                            <label class="radio">
                                <input type="radio" bind:group={w} name="weight" value={true} checked>
                                lbs
                            </label>
                            <label class="radio">
                                <input type="radio" bind:group={w} name="weight" value={false}>
                                kgs
                            </label>
                        </div>
                    </div>
                </div>
                <footer class="card-footer">
                    <button id="c-btn" class="button card-footer-item is-link" on:click={() => calculate(w ? lbs : kgs)}>Calculate</button>
                </footer>
            </div>
        </div>
    </div>
</div>

<section class="section">
    <div class="columns is-multiline is-centered is-vcentered">
        {#if valid}
            {#if error}
            <div class="column is-full">
                <div class="has-text-centered is-fullwidth">
                    <div class="notification is-danger">
                        {error.e}
                    </div>
                </div>
            </div>
            {/if}
            <div class="column is-half-tablet is-4-widescreen">
                <div class="has-text-centered">
                    <h4 class="subtitle is-4">Pairs of plates needed for {weight}{u}s with a {bar}{u} bar.</h4>
                    <table class="table is-fullwidth is-striped results">
                        <thead>
                            <tr>
                                {#each plates as plate, i}
                                {#if plate != 0}
                                <th>{getPlate(i)}{u}</th>
                                {/if}
                                {/each}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {#each plates as plate}
                                {#if plate != 0}
                                <td>{plate}</td>
                                {/if}
                                {/each}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        {:else if error}
            <div class="has-text-centered">
				<div class="notification is-danger">
                    {error.e}
                </div>
            </div>
		{/if}
    </div>
</section>

<script>
    let weight, bar, plates, error, u;
    let w = true;
    let bar_lbs = 45;
    let bar_kgs = 20;
	let valid = false;

    let lbs = [90, 70, 50, 20, 10, 5];
    let kgs = [50, 40, 30, 20, 10, 5, 2.5];

    $: bar = w ? bar_lbs : bar_kgs;
    $: u = w ? "lb" : "kg";

	const calculate = (units) => {
        if(weight === undefined) {
            error = {e: "Must provide working weight"}
            console.error(error);
            valid = false;
            return;
        }
        if(weight < bar) {
            error = {e: "Weight is less than the bar"}
            console.error(error);
            valid = false;
            return;
        }
        plates = []
        let working = weight - bar;
        units.forEach(lb => {
            let c = Math.floor(working / lb);
            plates.push(c);
            if (c > 0) {
                working = working - lb * c;
            }
        })
        error = null;
        if(working > 0) {
            error = {e: `Unable to find even plate value for ${weight}`}
            console.error(error);
        }
        valid = true;
        console.log(plates);
	}

    const getPlate = (i) => {
        if(w) {
            return lbs[i]/2;
        } else {
            return kgs[i]/2;
        }
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