<script>
  export let data;
  import Card from "./Card.svelte"
</script>
<!-- this is the portfolio page -->
<div class="font-spg bg-base-100 h-screen">
  <div class="flex flex-col justify-center w-screen p-4">
		<h1 class="font-bold text-2xl p-1 pb-4">Sample Work</h1>
    <div class=" flex flex-wrap gap-4 p-4 glass rounded-box">

      {#each data.items as item}
        <Card cardTitle={item.fields.heading} cardPara={item.fields.desc} cardLink={item.sys.id} />
      {/each}
    </div>
  </div>
</div>