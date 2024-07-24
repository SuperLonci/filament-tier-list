<script lang="ts">
    import { onMount } from 'svelte';
    import type { TierList, Filament, FilamentDetailsProps } from '$lib/interfaces';
    import { fetchDataFromCode } from '$lib/dataAccess/fetchDataFromCode';
    import FilamentDetails from './FilamentDetails.svelte';
    import FilamentItem from './FilamentItem.svelte';
  
    let tierData: TierList | null = null;
    let selectedFilament: Filament | null = null;
    let isLoading = false;
    let fetchData = new fetchDataFromCode;
  
    async function loadData() {
      try {
        tierData = await fetchData.fetchData();
        isLoading = false;
      } catch (error) {
        console.error('Error fetching tier list data:', error);
      }
    }
  
    function handleFilamentClick(event: CustomEvent<FilamentDetailsProps>) {
    selectedFilament = event.detail.filament;
}

    function closeDetails() {
      selectedFilament = null;
    }

    onMount(loadData);
</script>

{#if isLoading}
    <p>Loading...</p>
{:else if (tierData)}
    <div class="tier-list">
        {#each Object.entries(tierData.tiers) as [tierName, tier]}
        <div class="tier-container">
            <h2 class="tier-name">{tierName} Tier</h2>
            <div class="tier-items">
                {#each tier.filaments as filament}
                    <FilamentItem
                        filament={filament}
                        on:click={handleFilamentClick}
                    />
                {/each}
            </div>
        </div>
        {/each}
    </div>

    {#if selectedFilament}
        <FilamentDetails filament={selectedFilament} on:close={closeDetails} />
    {/if}

{:else}
    <p>Error fetching tier list data.</p>

{/if}

<style>
    @import '../../styles/tier-list.css';
</style>
