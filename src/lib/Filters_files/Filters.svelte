<!-- i class="fa-solid fa-list-ul"></i> -->
<!-- <i class="fa-solid fa-border-all"></i> -->
<script>
    import InputBuscar from "../inputBuscar.svelte";
    import FiltList from "./FiltList.svelte";
    let height = "40px";
    let width = "60%";
    let placeholder = "Buscar archivos...";
</script>

<div class="contain_filters">
    <InputBuscar {height} {width} {placeholder} on:input/>
    <FiltList />
</div> 

<style>
    .contain_filters {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 20px;
        width: 100%;
        height: 10%;
        margin: 0px;
    }
</style>
