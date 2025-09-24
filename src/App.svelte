<script>
  import Modal from './lib/Modal.svelte';
  let showModal = false;
</script>

<main>
  <button on:click={() => showModal = true}>
    Abrir ventana
  </button>

  <Modal open={showModal} onClose={() => showModal = false}>
  </Modal>
</main>

<style>
main{

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: rgba(0, 0, 0, 0);
  height: 100vh;
  width: 100vw;
}

</style>