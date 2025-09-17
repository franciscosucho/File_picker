<script>
  export let value = "";
  export let placeholder = "Buscar archivos...";
</script>

<div class="container_input">
  <i class="fa-solid fa-magnifying-glass"></i>
  <input type="text" class="form-control" bind:value {placeholder} />
</div>

<style>
  .container_input {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px ;
    margin-top: 10px;
    padding: 10px;
    width: 80%;
    background-color: rgba(85, 76, 76, 0);
    border-radius: 8px;
    border: 1px solid rgba(128, 128, 128, 0.178);
    input {
      width: 100%;
      border: none;
      outline: none;
      background-color: transparent;
      color: rgb(8, 8, 8);
      font-size: 16px;
    }
  }
</style>
