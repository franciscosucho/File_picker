<script>
    export let id;
    export let name;
    export let url;
    export let active = false;
    export let onClick;
</script>

<div class="ItemFile" class:active on:click={onClick} id="{id}">
    <img src={url} alt="" />
    <h3>{name}</h3>
</div>

<style>
</style>
