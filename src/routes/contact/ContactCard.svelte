<form method="post" class="card flex-shrink-0 shadow-2xl bg-base-100 w-full max-w-xl ">
  <div class="card-body">
    <div class="form-control">
      <label class="label">
        <span class="label-text">Email</span>
        <span class="label-text-alt">*Required</span>
      </label>
      <input type="email" placeholder="email" class="input input-bordered" required/>
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Name</span>
        <span class="label-text-alt">*Required</span>
      </label>
      <input type="text" placeholder="name" class="input input-bordered" required/>
    </div>
    <label class="label">
      <span class="label-text">Message</span>
    </label>
    <textarea class="textarea textarea-bordered h-24" placeholder="Message"></textarea>
    <div class="form-control mt-6">
      <button type="submit" class="btn btn-secondary">Send</button>
    </div>
  </div>
</form>