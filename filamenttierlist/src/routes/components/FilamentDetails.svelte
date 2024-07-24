<script lang="ts">
    import type { Filament } from '$lib/interfaces';
    import { createEventDispatcher } from 'svelte';
  
    export let filament: Filament;
    const dispatch = createEventDispatcher();
  
    function closeModal() {
      dispatch('close');
    }
</script>

<div class="filament-details-modal">
    <button type="button" class="close-btn" on:click={closeModal}>&times;</button>
    <h2>{filament.name}</h2>

    <div class="details-container">
        <p><b>Material:</b> {filament.material?.type || 'No material information available'}</p>
        <p><b>Price:</b> {filament.price || 'No price information available'}</p>
        {#if filament.description}
        <p><b>Description:</b> {filament.description}</p>
        {/if}
        {#if filament.pros}
        <h3>Pros</h3>
        <ul>
            {#each filament.pros as pro}
                <li>{pro}</li>
            {/each}
        </ul>
    {/if}
        {#if filament.cons}
        <h3>Cons</h3>
        <ul>
            {#each filament.cons as pro}
                <li>{pro}</li>
            {/each}
        </ul>
    {/if}
    </div>
</div>

<!-- <style>
    @import '../../styles/filament-details.css';
</style> -->
