<script lang="ts">
    import type { Filament } from '$lib/interfaces';
  </script>
  
  <div class="filament-item" on:click={() => $emit('click', filament)}>
    <img src="{filament.image}" alt="{filament.name}" />
    <h2>{filament.name}</h2>
    <h3>{filament.tier} Tier</h3>
  </div>
  