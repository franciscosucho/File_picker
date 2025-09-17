<script>
    import FIleItem from "./FIleItem.svelte";

    let search = "";
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
</script>

<div class="main_files">
    {#each items as item}
        <FIleItem {...item} onClick={() => setActive(item)} />
    {/each}
</div>

<style>
</style>
