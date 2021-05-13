<nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
        <div class="navbar-brand">
            <a class="navbar-item is-size-4" href="/">
                <span class="icon-text">
                    <span><strong>Gym Bag</strong></span>
                </span>
            </a>
      
          <!-- svelte-ignore a11y-missing-attribute -->
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            {#each links as link}
            <a class="navbar-item" href={link.url}>
              {link.text}
            </a>
            {/each}
          </div>
        </div>
    </div>
</nav>

<script>
    let links = [
        {
            url: "#/",
            text: "Home"
        },
        {
            url: "#/heart",
            text: "Heart Rate"
        },
        {
            url: "#/plates",
            text: "Plate Calculator"
        },
        {
            url: "#/timers",
            text: "Timers"
        },
        {
            url: "#/distance",
            text: "Distance"
        },
        {
            url: "#/about",
            text: "About"
        }
    ]
    
    document.addEventListener('DOMContentLoaded', () => {

		// Get all "navbar-burger" elements
		const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

		// Check if there are any navbar burgers
		if (navbarBurgers.length > 0) {

			// Add a click event on each of them
			navbarBurgers.forEach( el => {
				el.addEventListener('click', () => {

					// Get the target from the "data-target" attribute
					const target = el.dataset.target;
					const target_element = document.getElementById(target);

					// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
					el.classList.toggle('is-active');
					target_element.classList.toggle('is-active');

				});
			});
		}
	});
</script>