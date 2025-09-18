<script>
    import ContArchivos from "./ContArchivos.svelte";
    import Filters from "../Filters_files/Filters.svelte";
    let search = "";
</script>

<div class="main_files">
    <Filters />
    <ContArchivos />
</div>

<style>
    .main_files {
        background-color: rgb(255, 255, 255);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        margin: 0px;
        gap: 20px;
        width: 100%;
        height: 100%;
    }
</style>
