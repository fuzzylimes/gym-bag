<div class="container">
    <div class="columns is-centered is-vcentered">
        <div class="column is-half">
            <div class="card calculator">
                <div class="card-content">
                    <div class="content">
                        <div class="columns is-multiline is-mobile">
                            <div class="column is-full has-text-centered">
                                <h2 class="title is-1 has-text-dark">
                                    {time}
                                </h2>
                            </div>
                            <div class="column is-half">
                                <div class="button is-fullwidth is-dark" on:click={run}>
                                    {active ? "Stop" : "Start"}
                                </div>
                            </div>
                            <div class="column is-half">
                                <div class="button is-fullwidth is-dark" on:click={reset}>
                                    Reset
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
    const zero = "00:00:00.000";
    let time = zero;
    let active = false;
    let total = 0;

    let start, stop;
    let task;

    const run = () => {
        if (!active) {
            start = new Date();
            task = setInterval(update, 100);
            active = true;
        } else {
            clearInterval(task);
            stop = new Date()
            let t = new Date(stop - start);
            total += t.getTime();
            time = getTime(new Date(total));
            active = false;
        }
    };

    function update() {
        let now = new Date();
        let t = new Date(now - start + total);
        time = getTime(t);
    }

    const getTime = (t) => {
        return t.toISOString().slice(11,23);
    }

    const reset = () => {
        if (active) {
            clearInterval(task)
            active = false;
        }
        time = zero;
        total = 0;
    };
</script>