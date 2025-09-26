<script>
    export let id;
    export let name;
    export let url;
    export let active = false;
    export let onClick;
    export let last = false;
    //  variable para cambiar la vista de lista a grid o a lista.
    import { changueList } from "./../../store/store.js";

    // Estado local para controlar si el menu esta visible
    let showMenu = false;

    // Función para alternar la visibilidad del menú
    function toggleMenu(event) {
        event.stopPropagation(); // Evita que el clic se propague al div principal
        showMenu = !showMenu;
    }
</script>

{#if $changueList === true}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        class="ItemFile listFile"
        class:active
        on:click={onClick}
        {id}
        class:last
    >
        <div class="contain_icon">
            <i class="fa-regular fa-file-image"></i>
            <h3 class="name_file">{name}</h3>
        </div>
        <div class="context-menu-container">
            <i
                class="fa-solid fa-ellipsis-vertical icon icon_opts"
                on:click={toggleMenu}
            ></i>
            <ul class="context-menu" class:show={showMenu}>
                <li><i class="fa-solid fa-download"></i> Descargar</li>
                <li><i class="fa-solid fa-share-nodes"></i> Compartir</li>
                <hr />
                <li><i class="fa-solid fa-trash-can"></i> Eliminar</li>
            </ul>
        </div>
        <img src={url} alt="" />
    </div>
{:else}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="ItemFile gridFile" class:active on:click={onClick} {id}>
        <div class="contain_icon">
            <i class="fa-regular fa-file-image"></i>
            <h3 class="name_file">{name}</h3>
            <div class="context-menu-container">
                <i
                    class="fa-solid fa-ellipsis-vertical icon_opts"
                    on:click={toggleMenu}
                ></i>
                <ul class="context-menu" class:show={showMenu}>
                    <li><i class="fa-solid fa-download"></i> Descargar</li>
                    <li><i class="fa-solid fa-share-nodes"></i> Editar</li>
                    <hr />
                    <li><i class="fa-solid fa-trash-can"></i> Eliminar</li>
                </ul>
            </div>
        </div>
        <img src={url} alt="" />
    </div>
{/if}

<style>
    :root {
        --color-texto: #000000;
        --color-main: #4989f0;
        --color-secundario: #e8f2ff;
    }

    .gridFile {
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 40px;
        width: 100%;
        height: auto;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.151);
        transition: all 0.2s ease-in-out;
        .name_file {
            font-size: 1em;
            font-weight: 600;
            color: black;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 60%;
        }
    }
    .gridFile .contain_icon {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.151);
        height: auto;
        color: black;
        font-size: 1em;
    }

    .gridFile:hover {
        background-color: var(--color-secundario);
    }
    .gridFile img {
        margin-bottom: 20px;
        width: 90%;
        height: 60%;
        border-radius: 8px;
    }
    .listFile {
        overflow-y: hidden;
        overflow-x: hidden;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: auto;
        padding: 10px;
        border-top: 1px solid rgba(0, 0, 0, 0.151);
    }
    .listFile img {
        display: none;
    }
    .listFile .contain_icon {
        margin-left: 20px;
        color: black;
        display: flex;
        width: 20%;
        justify-content: flex-start;
        gap: 20px;
        align-items: center;
    }
    .icon {
        color: black;
    }
    .context-menu-container {
        position: relative;
        display: inline-block;
    }
    .context-menu-container .icon_opts {
        font-size: 1.2em;
        border-radius: 50%;
        height: 30px;
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
        transition: all 0.2s ease-in-out;
    }
    .context-menu-container .icon_opts:hover {
        background-color: #1b1b1b2d;
    }

    .context-menu {
        position: absolute;
        top: 100%; /* Posiciona el menú debajo del icono */
        right: 0;
        list-style: none;
        padding: 8px 0;
        margin: 0;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        min-width: 150px;
        z-index: 1000;
        display: none; /* Por defecto, el menú está oculto */
    }

    .context-menu.show {
        display: block; /* Muestra el menú cuando tiene la clase 'show' */
    }

    .context-menu li {
        padding: 8px 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .context-menu li:hover {
        background-color: var(--color-secundario);
    }
</style>
