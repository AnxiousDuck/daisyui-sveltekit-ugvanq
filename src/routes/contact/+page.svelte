<script>
  // import ContactCard from "../../components/ContactCard.svelte"
  import ContactCard from "./ContactCard.svelte"
</script>
<!-- this is the contact page -->
<!-- <div class="hero min-h-screen bg-base-100 font-spg">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold text-secondary">Get in touch with me</h1>
      <p class="py-6 text-lg">Enter your Information in the form, and I'll get back to you.</p>
      <div class="divider divider-vertical">OR</div>
      <p class="text-lg">Drop me a line on <a href="https://uk.linkedin.com/in/vaidehi-martin-instructionaldesigner" class="btn p-0 btn-link normal-case" target="_blank">LinkedIn↗</a></p>
    </div>

    <ContactCard />

  </div>
</div> -->

<div class="hero min-h-screen font-spg text-xl">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <p class="text-xl text-secondary p-4 font-bold">/contact</p>
      <h1 class=" text-5xl lg:text-6xl font-bold">Ways to get in touch with me</h1>  
      <p class="py-6">Here are the links to my email and my linkedIn. Drop me a line and I will try to get back to you as soon as I can</p>
      
      <div class="flex justify-center items-center gap-6">
        <a href="https://uk.linkedin.com/in/vaidehi-martin-instructionaldesigner"><button class="btn btn-link text-primary p-0 normal-case text-xl font-normal">LinkedIn↗</button></a>
        <a href="/"><button class="btn btn-link text-primary p-0 normal-case text-xl font-normal">Email↗</button></a>
      </div>

    </div>
  </div>
</div>