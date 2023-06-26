<script>
    export let data;
    console.log(data.entry.fields)
</script>

<div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row ">
        <div class=" lg:w-1/2 ">
            <h1 class="text-5xl font-bold">{data.entry.fields.heading}</h1>
            <p class="py-6">{data.entry.fields.text}</p>
            <!-- <button class="btn btn-primary">Get Started</button> -->
        </div>
      <iframe title="pdf sample" class=" w-full h-[90vh] rounded-lg shadow-2xl " src="{data.entry.fields.sampleImages[0].fields.file.url}#toolbar=0" frameborder="0"></iframe>
      
    </div>
  </div>