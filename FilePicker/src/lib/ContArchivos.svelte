<script>
    import FIleItem from "./FIleItem.svelte";
    import FileitemAgregar from "./FileitemAgregar.svelte";
    let search = "";
    //  variable para cambiar la vista de lista a grid o a lista.
    import { changueList } from "../store/store.js";

    let items = [
        {
            id: 1,
            name: "Recientes",
            url: "https://picsum.photos/200",
            active: true,
        },
    ];

    function setActive(item) {
        items = items.map((cat) => ({
            ...cat,

            active: cat.id === item.id,
        }));
    }
    // Esta función ordenara los archivos dependiendo si el usuario quiere verlos en lista o en grid|
    function orderlist() {}
</script>

{#if $changueList === true}
    <div class="container_file list">
        {#each items as item}
            <FIleItem {...item} onClick={() => setActive(item)} />
        {/each}
        <FileitemAgregar
            id={items.length + 1}
            name="Agregar"
            onClick={() => {}}
        />
    </div>
{:else}
    <div class="container_file grid">
        {#each items as item}
            <FIleItem {...item} onClick={() => setActive(item)} />
        {/each}
        <FileitemAgregar
            id={items.length + 1}
            name="Agregar"
            onClick={() => {}}
        />
    </div>
{/if}

<style>
    .container_file {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        padding: 10px;
        justify-items: center;
        align-items: center;
        gap: 20px;
        width: 80%;
        height: 80%;
        overflow-y: scroll;
        background-color: hsla(0, 0%, 27%, 0.062);
    }
    .grid {
    }
</style>
