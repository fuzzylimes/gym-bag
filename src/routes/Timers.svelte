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
<Stopwatch/>
{:else if current === 2}
<Circuit/>
{/if}

<script>
import Circuit from "../components/Circuit.svelte";
import Stopwatch from "../components/Stopwatch.svelte";

let current = 1;
let title, subtitle;
$: tabs = [
    {
        is_active: true,
        icon: "fas fa-stopwatch",
        text: "Stopwatch",
        value: 1,
        title: "Stopwatch",
        subtitle: "General purpose stopwatch"
    },
    {
        is_active: false,
        icon: "fas fa-flag-checkered",
        text: "Circuit",
        value: 2,
        title: "Circuit Timer",
        subtitle: "Timer for circuit training"
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