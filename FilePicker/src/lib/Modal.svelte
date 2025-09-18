<script>
    export let open = false; // controla si se muestra
    export let onClose = () => {}; // callback para cerrar
    import MainFiles from "./File_container/MainFiles.svelte";
    import MenuLateral from "./MenuLateral/menu_lateral.svelte";
</script>

<!-- {#if open} -->
    <div class="backdrop" on:click={onClose}>
        <div class="modal" on:click|stopPropagation>
           
            <MenuLateral />

            <MainFiles/>
           <!--  <button on:click={onClose}>Cerrar</button>-->
        </div>
    </div>
<!-- {/if} -->

<style>
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal {
        background: white;
        width: 60%;
        height: 60%;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
</style>
