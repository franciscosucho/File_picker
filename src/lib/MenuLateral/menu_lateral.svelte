<script>
// @ts-nocheck

    import InputBuscar from "../inputBuscar.svelte";
    import ItemMenu from "./item_menu.svelte";
    import { changueMenu } from "./../../store/menu_store.js";
    let search = "";
    let height = "20px";
    let width = "70%";
    let placeholder = "Buscar carpetas...";
    let categories = [
        {
            name: "Recientes",
            icon: "fa-solid fa-folder",
            count: 12,
            active: true,
        },
        {
            name: "Documentos",
            icon: "fa-solid fa-folder",
            count: 24,
            active: false,
        },
        {
            name: "Imágenes",
            icon: "fa-solid fa-folder",
            count: 156,
            active: false,
        },
        { name: "Videos", icon: "fa-solid fa-folder", count: 8, active: false },
        {
            name: "Carpetas",
            icon: "fa-solid fa-folder",
            count: 6,
            active: false,
        },
    ];
    let add = {      
        name:"",
        icon:"fa-solid fa-plus",
        add : true,
        active: false,
    }
    

    function setActive(item) {
        categories = categories.map((cat) => ({
            ...cat,
            active: cat.name === item.name,
        }));
    }

    function handleChangemenu() {
        changueMenu.update((x) => !$changueMenu);
    }
    function handleShowAdd(){
        alert("ss")
    }
</script>

{#if $changueMenu === true}
    <aside class="menu_lateral desplegado">
        <div class="cont_icon_menu">
            <InputBuscar bind:value={search} {height} {width} {placeholder} />
            <i class="fa-solid fa-bars icon_menu" on:click={handleChangemenu}
            ></i>
        </div>

        <ul class="cont_items">
            {#each categories as cat}
                <ItemMenu {...cat} onClick={() => setActive(cat)} />
            {/each}
        </ul>
        <ItemMenu {add} onClick={() => handleShowAdd()}/>
    </aside>
{:else}
    <aside class="menu_lateral no_desplegado">
        <i class="fa-solid fa-bars icon_menu" on:click={handleChangemenu}></i>
    </aside>
{/if}

<style>
    .menu_lateral {
        background-color: #ffffff;
        border-right: 1px solid rgba(0, 0, 0, 0.151);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 40px;
        height: 100%;
        width: 300px;
        transition: all 0.2s ease-in-out;
    }
    .menu_lateral .cont_items {
        width: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        flex-direction: column;
    }
    .menu_lateral .cont_icon_menu {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 50px;
    }
    .no_desplegado {
        width: auto !important;
        height: 100%;

        border: none;
        padding: 10px 20px;
    }
    .icon_menu {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.4em;
        color: black;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        transition: all 0.2s ease-in-out;
    }
    .icon_menu:hover {
        background-color: #4989f01f;
    }
</style>
