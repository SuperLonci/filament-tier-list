<script>
	import TierList from "./components/TierList.svelte";
	import '../styles/tier-list.css';
	import '../styles/filament-details.css';
	import '../styles/filament-item.css';

</script>

<h1>Welcome to the Filament Tier List</h1>

<TierList />

<style>
	/* Styles for the entire page */
    :global(body) {
        background-color: #2c2c2c; /* Dark grey background */
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }

    h1 {
        color: #f5f5f5; /* White text color for the header */
        text-align: center;
        padding: 1rem;
        border-bottom: 2px solid #444; /* Slightly darker grey border for the header */
        background-color: #333; /* Darker grey background for the header */
    }
</style>
