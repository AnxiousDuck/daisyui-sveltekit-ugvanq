<script>
  // import ContactCard from "../../components/ContactCard.svelte"
  import ContactCard from "./ContactCard.svelte"
</script>
<!-- this is the contact page -->
<div class="hero min-h-screen bg-base-100 font-spg">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold text-secondary">Get in touch with me</h1>
      <p class="py-6 text-lg">Enter your Information in the form, and I'll get back to you.</p>
      <div class="divider divider-vertical">OR</div>
      <p class="text-lg">Drop me a line on <a href="https://uk.linkedin.com/in/vaidehi-martin-instructionaldesigner" class="btn p-0 btn-link normal-case" target="_blank">LinkedIn↗</a></p>
    </div>

    <ContactCard />

  </div>
</div>