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
    :root {
        --color-texto: #000000;
        --color-main: #4989f0;
        --color-secundario: #e8f2ff;
    }

    .ItemFileAgregar {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 80%;
        height: auto;
        border-radius: 8px;

        background-color: #ffffff;
        cursor: pointer;
        border: 1px solid rgba(0, 0, 0, 0.151);
        transition: all 0.2s ease-in-out;
    }
    .ItemFileAgregar:hover {
        background-color: var(--color-secundario);
    }
    .ItemFileAgregar .icon_img {
        margin-top: 20px;
        font-size: 2em;
        color: white;
        height: 30px;
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 15px;
        border-radius: 50%;
        background-color: var(--color-main);
    }
    .ItemFileAgregar .name_file {
        margin-top: 5px;
        font-weight: 500;
        font-size: 1.2em;
        color: var(--color-texto);
        text-align: center;
    }
</style>
