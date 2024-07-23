<script lang="ts">
    import { onMount } from 'svelte';
    import type { TierList, Filament, FilamentDetailsProps } from '$lib/interfaces';
    import { fetchDataFromCode } from '$lib/dataAccess/fetchDataFromCode';
    import FilamentDetails from './FilamentDetails.svelte';
  
    let tierData: TierList | null = null;
    let selectedFilament: Filament | null = null;
    let isLoading = false;
  
    async function fetchData() {
      try {
        tierData = await fetchDataFromCode();
        isLoading = false;
      } catch (error) {
        console.error('Error fetching tier list data:', error);
      }
    }
  
    function handleFilamentClick(filament: Filament) {
      selectedFilament = filament;
    }
  
    function closeDetails() {
      selectedFilament = null;
    }

    onMount(fetchData);
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
            <button class="tier-item" type="button" on:click={() => handleFilamentClick(filament)}>
                {#if filament.image}
                    <img
                    src={filament.image.src}
                    alt={filament.name}
                    loading="lazy"
                    on:error={(event) => {
                        if (event.target instanceof HTMLImageElement) { // Check if target exists before accessing style
                        event.target.style.display = 'none';
                        }
                        console.error('Error loading image:', filament.image);
                    }}
                    />
                {/if}
                <span>{filament.name}</span>
                </button>
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
