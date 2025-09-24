<script>
    export let open = false; // controla si se muestra
    export let onClose = () => {}; // callback para cerrar
    import MainFiles from "./File_container/MainFiles.svelte";
    import MenuLateral from "./MenuLateral/menu_lateral.svelte";
    import { changueBackdrop } from "../store/store_form.js";
    import InputForm from "./Form/inputForm.svelte";
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- {#if open} -->
<!-- svelte-ignore a11y_click_events_have_key_events -->


<div class="contain_modal" on:click={onClose}>
    <div class="backdrop" class:active_back={$changueBackdrop}>
        <form action="">
            <InputForm type={"text"} name_inp={"username"} placeholder={"Username"} maxLeng={50}/>
        </form>
          
            
        
    </div>
    <div class="modal" on:click|stopPropagation>
        <MenuLateral />

        <MainFiles />
        <!--  <button on:click={onClose}>Cerrar</button>-->
    </div>
</div>

<!-- {/if} -->

<style>
    .contain_modal {
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
    .backdrop {
        display: none;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        background-color: rgba(0, 0, 0, 0.904);
    }
    .active_back {
        display: block !important;
    }
    .modal {
        background: white;
        width: 70%;
        height: 70%;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
</style>
