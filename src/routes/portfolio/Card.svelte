<script>

  export let cardTitle, cardPara, cardLink;
</script>
<div class="card bg-primary text-primary-content w-full max-w-md min-w-screen-sm">
  <div class="card-body">
    <h2 class="card-title">{cardTitle}</h2>
    <p>{cardPara}</p>
    <div class="card-actions justify-between items-baseline">
      <a href="/portfolio/{cardLink}">
        <div class="btn btn-base ">Learn More</div>
      </a>
    </div>
  </div>
</div>