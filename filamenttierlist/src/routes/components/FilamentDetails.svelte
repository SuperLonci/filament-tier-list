<script lang="ts">
    import type { Filament } from '$lib/interfaces';
  
    export let filament: Filament | null = null;
    export let on: (event: 'close') => void;
</script>

{#if filament}
<div class="details-popup">
    <h2>{filament.name}</h2>
    <img src="{filament.image}" alt="{filament.name}" />
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
    <button on:click={() => on('close')}>Close</button>
</div>
{/if}
  