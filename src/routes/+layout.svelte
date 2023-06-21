<script>
	import '../app.css';
  import Footer from "./Footer.svelte"
</script>


	<div class="navbar bg-secondary text-base-400 flex justify-between font-spg">
    <a href="/" class="btn btn-ghost normal-case text-xl lg:text-2xl">Vaidehi Martin</a>
  
		<div class="dropdown dropdown-end lg:hidden">
      <label tabindex="0" class="btn btn-ghost ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <a href="/"><li>Home</li></a>
        <a href="/portfolio"><li>Portfolio</li></a>
        <a href="/contact"><li>Contact</li></a>
      </ul>
    </div>

    <div class=" hidden lg:flex ">
      <ul class="flex ">
        <a href="/"><li class="btn btn-ghost normal-case font-normal text-lg">Home</li></a>
        <a href="/portfolio"><li class="btn btn-ghost normal-case font-normal text-lg">Portfolio</li></a>
        <a href="/contact"><li class="btn btn-ghost normal-case font-normal text-lg">Contact</li></a>
      </ul>
    </div>

	</div>

  

<slot />

<Footer />


