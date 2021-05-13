// Components
import Home from './routes/Home.svelte'
import HeartRate from './routes/HeartRate.svelte'
import Plates from './routes/Plates.svelte'
import Timers from './routes/Timers.svelte'
import Distance from './routes/Distance.svelte'
import About from './routes/About.svelte'

// Export the route definition object
export default {
    '/': Home,
    '/heart': HeartRate,
    '/plates': Plates,
    '/timers': Timers,
    '/distance': Distance,
    '/about': About
}