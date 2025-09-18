<script>
  export let value = "";
  export let placeholder = "";
  export let height = "";
  export let width = "";
</script>

<!-- <div class="container_input" style="width: {width}; height: {height};">
  <i class="fa-solid fa-magnifying-glass input_icon"></i>
  <input type="text" class="form-control" bind:value {placeholder} />
</div> -->
<div
  class="input-group mb-3 container_input"
  style="width: {width}; height: {height};"
>
  <input
    type="text"
    class="form-control input_main"
    bind:value
    {placeholder}
    aria-label="Recipient's username"
    aria-describedby="basic-addon2"
    style="width: {width}; height: {height};"
  />

</div>

<style>
  :root {
    --color-texto: #000000;
    --color-main: #4989f0;
    --color-secundario: #e8f2ff;
  }

  .container_input {
    height: auto;
    margin: 0px;
    padding: 0px;
  }
  .input_main {
    border: none;
    border-radius: 8px;
    padding: 20px;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.151);
    box-shadow: none;
    font-size: 16px;
    color: var(--color-texto);
  }
</style>
