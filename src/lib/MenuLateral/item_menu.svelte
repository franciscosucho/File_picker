<script>
    export let name;
    export let icon;
    export let count = 0;
    export let active = false;
    export let onClick;
</script>

<button type="button" class="item_list" class:active on:click={onClick}>
    <i class="{icon} icon_item"></i>
    <span class="name_folder">
        {name}
    </span>
    <span class="file_count">{count}</span>
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
