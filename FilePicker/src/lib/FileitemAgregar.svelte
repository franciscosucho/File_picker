<script>
    export let id;
    export let name;

    export let active = false;
    export let onClick;
</script>

<div class="ItemFileAgregar" class:active on:click={onClick} {id}>
    <i class="fa-solid fa-plus icon_img"></i>
    <h3 class="name_file">{name}</h3>
</div>

<style>
    .ItemFileAgregar {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 80%;
        height: auto;
        border-radius: 8px;
        padding: 10px;
        background-color: #b4d1ff;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }
    .ItemFileAgregar:hover {
        background-color: #9bbdff;
    }
    .ItemFileAgregar .icon_img {
        font-size: 2em;

        color: white;
        padding: 20px;
        border-radius: 50%;
        background-color: #e0ecff;
    }
    .ItemFileAgregar .name_file {
        font-weight: 700;
        font-size: 1.3em;
        color: rgb(255, 255, 255);
        text-align: center;
    }
</style>
