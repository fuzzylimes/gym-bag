<section class="section">
    <div class="container has-text-centered">
        <h1 class="title is-1">{title}</h1>
        <h1 class="subtitle is-5">{subtitle}</h1>
    </div>
</section>

<div class="tabs is-centered is-toggle">
    <ul>
        {#each tabs as tab}
        <li class="tab {tab.is_active ? 'is-active':''}">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a on:click={() => click_tab(tab.value)}>
                <span class="icon is-small"><i class={tab.icon}></i></span>
                <span>{tab.text}</span>
            </a>
        </li>
        {/each}
    </ul>
</div>

{#if current === 1}
<UnitConversion/>
{:else if current === 2}
<Speed/>
{/if}

<script>
import Speed from '../components/Speed.svelte';
import UnitConversion from '../components/UnitConversion.svelte'

let title, subtitle;
let current = 1;
$: tabs = [
    {
        is_active: true,
        icon: "fas fa-calculator",
        text: "Unit Conversion",
        value: 1,
        title: "Unit Conversion",
        subtitle: "Enter value in either box to perform calculation."
    },
    {
        is_active: false,
        icon: "fas fa-running",
        text: "Speed",
        value: 2,
        title: "Speed Calculator",
        subtitle: "Calculate your average speed from a distance and time."
    }
]

$: title = tabs.filter(i => i.is_active)[0].title;
$: subtitle = tabs.filter(i => i.is_active)[0].subtitle;

const click_tab = (v) => {
    let new_tabs = []
    tabs.forEach(t => {
        if(t.value !== v) {
            t.is_active = false
        } else {
            t.is_active = true
            current = v;
        }
        new_tabs.push(t);
    });
    tabs = new_tabs;
}
</script>
