<script lang="ts">
    import FilamentItem from './FilamentItem.svelte';
    import FilamentDetails from './FilamentDetails.svelte';
  
    // Import interfaces and stores (if used)
    import type { Filament } from '$lib/interfaces';
  
    let selectedFilament: Filament | null = null;
  
    function handleFilamentClick(filament: Filament) {
      selectedFilament = filament;
    }
  
    function closeDetails() {
      selectedFilament = null;
    }
  </script>
  
  {#each tiers as [tier, filaments]}
    <h2>{tier} Tier</h2>
    <div class="tier-container">
      {#each filaments as filament}
        <FilamentItem 
          filament={filament} 
          on:click={handleFilamentClick} />
      {/each}
    </div>
  {/each}
  
  {#if selectedFilament}
    <FilamentDetails filament={selectedFilament} on:close={closeDetails} />
  {/if}
  