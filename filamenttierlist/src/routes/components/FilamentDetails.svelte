<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { Filament } from '$lib/interfaces';

    export let filament: Filament | null = null;

    const dispatch = createEventDispatcher();

    function handleClose() {
        dispatch('close');
    }
</script>

{#if filament}
<div class="details-popup">
    <h2>{filament.name}</h2>
    {#if filament.image}
        <img
        src={filament.image.src}
        alt={filament.name}
        loading="lazy"
        on:error={(event) => {
            if (event.target instanceof HTMLImageElement) { 
                event.target.style.display = 'none';
            }
            console.error('Error loading image:', filament.image);
        }}
        />
    {/if}    
    <!-- TODO: fallback image -->
    <p>{filament.description}</p>
    <h3>Material</h3>
    <p>{filament.material.type} ({filament.material.color})</p>
    <h3>Pros</h3>
    <ul>
        {#each filament.pros as pro}
            <li>{pro}</li>
        {/each}
    </ul>
    <h3>Cons</h3>
    <ul>
        {#each filament.cons as con}
            <li>{con}</li>
        {/each}
    </ul>
    <h3>Use Case</h3>
    <p>{filament.useCase}</p>
    <button on:click={handleClose}>Close</button>
</div>
{/if}
