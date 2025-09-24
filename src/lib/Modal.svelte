<script>
    export let open = false; // controla si se muestra
    export let onClose = () => {}; // callback para cerrar
    import MainFiles from "./File_container/MainFiles.svelte";
    import MenuLateral from "./MenuLateral/menu_lateral.svelte";
    import { changueBackdrop } from "../store/store_form.js";
    import InputForm from "./Form/inputForm.svelte";
    function handleShowAdd(event) {
        event.stopPropagation();
        changueBackdrop.update((event) => !$changueBackdrop);
    }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- {#if open} -->
<!-- svelte-ignore a11y_click_events_have_key_events -->

<div class="contain_modal" on:click={onClose}>
    <div class="backdrop" class:active_back={$changueBackdrop}>
        <form action="" class="form">
            <h3 class="tit_form">Crear nueva carpeta</h3>
            <InputForm
                type={"text"}
                name_inp={"username"}
                placeholder={"Username"}
                maxLeng={50}
            />
            <div class="cont_btn">
                <button class="btn_form" type="submit">Crear</button>
                <button class="btn_form cancelar" on:click={handleShowAdd}
                    >Cancelar</button
                >
            </div>
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
    .form {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
        height: auto;
        width: 40%;
        background-color: rgb(255, 255, 255);
        box-shadow: 0 3px 10px rgba(73, 73, 73, 0.582);
        border-radius: 12px;
    }
    .form .tit_form {
        color: black;
        font-size: 1.3em;
        font-weight: bolder;
    }

    .form .cont_btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: auto;
        gap: 20px;
    }
    .form .cont_btn .btn_form {
        padding: 10px;
        width: 40%;
        background-color: rgb(38, 38, 230);
        color: white;
        font-weight: bold;
        border-radius: 12px;
        cursor: pointer;
    }
    .cancelar {
        font-weight: bold;
        background-color: transparent !important;
        border: 1px solid rgba(29, 29, 29, 0.37);
        color: rgb(29, 29, 29) !important;
    }
</style>
