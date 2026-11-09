<script lang="ts">
    import type { Filament } from '$lib/interfaces';
    import { createEventDispatcher } from 'svelte';

    export let filament: Filament;
    const dispatch = createEventDispatcher();

    function handleClick() {
        dispatch('click', { filament });
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleClick();
        }
    }
</script>

<div
    class="filament-item"
    role="button"
    tabindex="0"
    on:click={handleClick}
    on:keydown={handleKeydown}
>
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
    <span>{filament.name}</span>
</div>

<!-- <style>
    @import '../../styles/filament-details.css';
</style> -->
