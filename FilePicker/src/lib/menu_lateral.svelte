<script>
    import InputBuscar from "./inputBuscar.svelte";
    import ItemMenu from "./item_menu.svelte";

    let search = "";
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
        { name: "Imágenes", icon: "fa-solid fa-folder", count: 156, active: false },
        { name: "Videos", icon: "fa-solid fa-folder", count: 8, active: false },
        { name: "Carpetas", icon: "fa-solid fa-folder", count: 6, active: false },
    ];

    function setActive(item) {
        categories = categories.map((cat) => ({
            ...cat,
            active: cat.name === item.name,
        }));
    }
</script>

<div class="menu_lateral">

    <InputBuscar bind:value={search} />

    <ul class="cont_items">
        {#each categories as cat}
            <ItemMenu {...cat} onClick={() => setActive(cat)} />
        {/each}
    </ul>
</div>



<style>
    .menu_lateral{
        background-color: #F0F2F5 !important;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 40px;
        height: 100%;
        width: 25%;
    }
    .menu_lateral .cont_items{
        width: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        flex-direction: column;
    }
</style>
