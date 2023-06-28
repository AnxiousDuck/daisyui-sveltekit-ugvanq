<script>
  export let data;
  import Card from "./Card.svelte"
</script>
<!-- this is the portfolio page -->
<div class="font-spg bg-base-100 min-h-screen">
  <div class="flex flex-col justify-center w-screen p-4">
		<h1 class="font-bold text-2xl p-1 pb-4">Sample Work</h1>
    <div class=" gap-4 p-2 glass rounded-box grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">

      {#each data.items as item}
        <Card cardTitle={item.fields.heading} cardPara={item.fields.desc} cardLink={item.sys.id} />
      {/each}
    </div>
  </div>
</div>