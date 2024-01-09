<script lang="ts">
  import type { PageData } from "./$types";


  export let data: PageData;
</script>



<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>


{#each data.digimon as digi}
<p>{digi.name} </p>
{/each}

