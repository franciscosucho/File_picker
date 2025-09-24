<script>
    import FIleItem from "./FIleItem.svelte";
    import FileitemAgregar from "./FileitemAgregar.svelte";

    let search = "";
    //  variable para cambiar la vista de lista a grid o a lista.
    import { changueList } from "../../store/store.js";

    let items = [
        {
            id: 1,
            name: "Recientes",
            url: "https://picsum.photos/200",
            active: true,
            last: false,
        },
        {
            id: 2,
            name: "ssasdasd",
            url: "https://picsum.photos/200",
            active: true,
            last: false,
        },
        {
            id: 2,
            name: "ssasdasd",
            url: "https://picsum.photos/200",
            active: true,
            last: false,
        },
        {
            id: 2,
            name: "ssasdasd",
            url: "https://picsum.photos/200",
            active: true,
            last: false,
        },
        {
            id: 2,
            name: "ssasdasd",
            url: "https://picsum.photos/200",
            active: true,
            last: false,
        },
        {
            id: 2,
            name: "ssasdasd",
            url: "https://picsum.photos/200",
            active: true,
            last: false,
        },
        {
            id: 2,
            name: "ssasdasd",
            url: "https://picsum.photos/200",
            active: true,
            last: false,
        },
        {
            id: 2,
            name: "ssasdasd",
            url: "https://picsum.photos/200",
            active: true,
            last: false,
        },
    ];

    for (let index = 0; index < items.length; index++) {
        if (index == items.length) {
            items[index].last = true;
        }
    }

    function setActive(item) {
        items = items.map((cat) => ({
            ...cat,

            active: cat.id === item.id,
        }));
    }

   


</script>

{#if $changueList === true}
    <div class="container_file list">
        {#each items as item}
            <FIleItem {...item} onClick={() => setActive(item)} />
        {/each}
        <!-- <FileitemAgregar
            id={items.length + 1}
            name="Agregar"
            onClick={() => {}}
        /> -->
   
    </div>
{:else}
    <div class="container_file grid">
        {#each items as item}
            <FIleItem {...item} onClick={() => setActive(item)} />
        {/each}
        <!-- <FileitemAgregar
            id={items.length + 1}
            name="Agregar"
            onClick={() => {}}
        /> -->
        
    </div>
        
{/if}

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
        grid-template-rows: repeat(1fr);

        padding: 30px;
        grid-gap: 20px;
        grid-auto-rows: minmax(75%, auto);
        width: 100%;
        height: 80%;
        overflow-y: scroll;
    }
    .list {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        overflow-x: hidden;
        width: 100%;
        box-sizing: border-box;
        margin-top: 0px;
    }
</style>
