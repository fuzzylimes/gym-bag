<section class="hero is-fullheight-with-navbar header-image">
    <div class="hero-body">
        <div class="container">
            <div class="columns is-multiline is-vcentered is-centered is-mobile">
                <div class="column is-full has-text-centered mb-5">
                    <h1 class="title is-1 is-size-1-mobile has-text-white is-uppercase app-title">
                        Gym Bag
                    </h1>
                </div>
                {#each apps as app}
                <div class="column is-6-mobile is-2-tablet has-text-centered">
                    <a href={app.link}>
                        <div>
                            <span class="icon icon-large has-text-{app.icon_color}">
                                <i class="{app.icon_string} fa-2x"></i>
                            </span>
                            <div class="has-text-white subtitle is-5">
                                {app.name}
                            </div>
                        </div>
                    </a>
                </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<script>
    let apps = [
        {
            icon_string: "fas fa-heartbeat",
            icon_color: "white",
            name: "Heart Rate",
            link: "#/heart"
        },
        {
            icon_string: "fas fa-dumbbell",
            icon_color: "white",
            name: "Plate Calculator",
            link: "#/plates"
        },
        {
            icon_string: "fas fa-stopwatch",
            icon_color: "white",
            name: "Timers",
            link: "#/timers"
        },
        {
            icon_string: "fas fa-ruler",
            icon_color: "white",
            name: "Distance",
            link: "#/distance"
        }
    ]
</script>

<style>
    .app-title {
        font-size: 6rem;
    }
    .header-image {
        position: relative;
        background-image: url("https://unsplash.com/photos/uwk8IS-HfJ8/download?force=true&w=2400");
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-color: #999;
    }

    .header-image::before {
        content: "";
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background-color: rgba(0,0,0,0.7);
    }
</style>