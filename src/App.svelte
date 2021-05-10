<script>
	import Router from 'svelte-spa-router'
	import Navbar from './components/Navbar.svelte'
	import routes from './routes'
</script>

<Navbar/>

<Router {routes} />

<style>

</style>