<script>
    export let name = "";
    export let icon = "";
    export let count = 0;
    export let active = false;
    export let onClick;
    export let add = false;
</script>

<button
    type="button"
    class="item_list"
    class:active
    class:add
    on:click={onClick}
>
    <i class="{icon} icon_item"></i>

    {#if add === false}
        <span class="name_folder">
            {name}
        </span>
        <span class="file_count">{count}</span>
    {:else}
        <span class="name_folder"> Agregar Carpeta</span>
    {/if}
</button>

<style>
    :root {
        --color-texto: #000000;
        --color-main: #4989f0;
        --color-secundario: #e8f2ff;
    }

    .item_list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        background-color: rgba(232, 242, 255, 0);
        padding: 10px;
        border-radius: 8px;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }
    .item_list.active {
        border: 1px solid #0d6dfc;
        background-color: #e8f2ff;
        color: rgb(24, 24, 24) !important;
        .name_folder {
            color: rgb(24, 24, 24) !important;
        }
    }
    .item_list.add {
        border: 1px solid #0d6dfc !important;
        background-color: #5192e669 !important;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        .name_folder {
            text-align: center;
            color: rgb(59, 59, 59) !important;
            font-size: 1.2;
            font-weight: bolder;
        }
        .icon_item {
            color: rgb(235, 235, 235) !important;
            font-size: 1.2em;
        }
    }

    .item_list .name_folder {
        font-weight: 500;
        font-size: 16px;
        color: black;
    }
    .item_list .file_count {
        font-weight: 400;
        font-size: 14px;
        color: white;
        padding: 6px;
        border-radius: 6px;
        background-color: #4989f0;
    }
    .item_list .icon_item {
        font-size: 1.5em;
        color: black;
        transition: all 0.2s ease-in-out;
    }
    .item_list:hover {
        margin-left: 10px !important;
        color: #0d6dfc !important;
        .icon_item {
            color: #0d6dfc !important;
        }
    }
</style>
