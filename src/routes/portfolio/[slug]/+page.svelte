<script>
    export let data;
</script>

<div class="hero min-h-screen font-spg ">
    <div class="hero-content flex-col lg:flex-row ">
        <div class=" lg:w-1/2 ">
            <a href="/portfolio" class=" btn btn-link normal-case text-xl text-secondary p-0 no-underline font-normal">back ←</a>
            <h1 class="text-5xl font-bold">{data.entry.fields.heading}</h1>
            <p class="py-6 text-lg">{data.entry.fields.text}</p>
        </div>
      <iframe title="pdf sample" class=" w-full h-[90vh] rounded-lg shadow-2xl " src="{data.asset}#toolbar=0" frameborder="0"></iframe>
      
    </div>
  </div>