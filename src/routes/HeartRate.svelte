<section class="section">
    <div class="container has-text-centered">
        <h1 class="title is-1">Heart Rate Calculator</h1>
        <h3 class="subtitle is-3">Calculate your healthy heart range</h3>
    </div>
</section>

<div class="container">
    <div class="columns is-centered is-vcentered">
        <div class="column is-half">
            <div class="card calculator">
                <div class="card-content">
                    <div class="content">
                        <div class="columns is-vcentered">
                            <div class="column is-half">
                                <div class="field">
                                    <label for="Age" class="label">Age</label>
                                    <div class="control">
                                        <input id="Age" class="input" type="number" placeholder="Enter your Age" bind:value={age}>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-half">
                                <div class="field">
                                    <label for="Rest" class="label">Resting Heart Rate</label>
                                    <div class="control">
                                        <input id="Rest" class="input" type="number" placeholder="Enter your resting heart rate" bind:value={resting}>
                                    </div>
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

<section class="section">
    <div class="columns is-centered is-vcentered">
        {#if valid}
			<div class="has-text-centered">
				<h4 class="subtitle is-4">Heart Range for a {age_val} year old with a resting heart rate of {rest_val}</h4>
                <table class="table is-fullwidth is-striped results">
                    <thead>
                        <tr>
                            <th>Exercise</th>
                            <th>Heart Rate Range</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Aerobic</td>
                            <td>{aerobic}</td>
                        </tr>
                        <tr>
                            <td>Anaerobic</td>
                            <td>{anaerobic}</td>
                        </tr>
                        <tr>
                            <td>Max</td>
                            <td>{Math.ceil(max_rate)}</td>
                        </tr>
                    </tbody>
                </table>
			</div>
		{/if}
    </div>
</section>

<script>
    let age, resting, hrr, aerobic, anaerobic, max_rate, rest_val, age_val;
	let valid = false;

	const calculate = () => {
		try {
            rest_val = resting;
            age_val = age;
			max_rate = 205.8 - (0.685 * age);
			hrr = max_rate - resting;
			aerobic = `${Math.ceil(resting + hrr * .5)} - ${Math.ceil(resting + hrr * .70)}`;
			anaerobic = `${Math.ceil(resting + hrr * .70)} - ${Math.ceil(resting + hrr * .85)}`;
			valid = true;
		} catch (error) {
			valid = false;
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