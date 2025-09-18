<script>
    import InputBuscar from "../inputBuscar.svelte";
    import ItemMenu from "./item_menu.svelte";

    let search = "";
    let height = "20px";
    let width = "90%";
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

    <InputBuscar bind:value={search} {height} {width} {placeholder}/>

    <ul class="cont_items">
        {#each categories as cat}
            <ItemMenu {...cat} onClick={() => setActive(cat)} />
        {/each}
    </ul>
</div>



<style>
    .menu_lateral{
        background-color: #ffffff;
        border-right: 1px solid rgba(0, 0, 0, 0.151);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 10px;
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
