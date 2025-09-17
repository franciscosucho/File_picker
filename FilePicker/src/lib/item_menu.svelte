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
    .item_list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        background-color: #5f9bfd05;
        padding: 10px;
        border-radius: 8px;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }
    .item_list.active {
        background-color: #0867ff; 
        color: white;
    }
    .item_list .name_folder {
        font-weight: 500;
        font-size: 16px;
        color: white;
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
    }
    .item_list:hover {
        background-color: #0867ff;
        color: white;
    }
</style>
