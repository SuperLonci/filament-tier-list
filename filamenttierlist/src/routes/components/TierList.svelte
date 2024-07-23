<script lang="ts">
    import type { TierList, Filament } from '../interfaces';
    import { fetchDataFromJSON } from './fetchDataFromJSON';
    import FilamentDetails from './FilamentDetails.svelte';
  
    let tierData: TierList | undefined = undefined;
    let selectedFilament: Filament | null = null;
  
    async function onMount() {
      try {
        tierData = await fetchDataFromJSON();
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
  </script>
  
  {#if tierData}
    <div class="tier-list">
      {#each Object.entries(tierData.tiers) as [tierName, tier]}
        <div class="tier-container">
          <h2 class="tier-name">{tierName} Tier</h2>
          <div class="tier-items">
            {#each tier.filaments as filament}
              <div class="tier-item" on:click={() => handleFilamentClick(filament)}>
                {filament.image && <img src={filament.image} alt={filament.name} />}
                <span>{filament.name}</span>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  
    {#if selectedFilament}
      <FilamentDetails filament={selectedFilament} on:close={closeDetails} />
    {/if}
  {:else}
    <p>Loading...</p>
  {/if}
  
  <style>
    .tier-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  
    .tier-container {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  
    .tier-name {
      font-weight: bold;
    }
  
    .tier-items {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  
    .tier-item {
      display: flex;
      align-items: center;
      padding: 0.5rem 1rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      cursor: pointer;
    }
  
    .tier-item img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      margin-right: 0.5rem;
    }
  </style>
  