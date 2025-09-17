
<!-- svelte-ignore a11y_no_static_element_interactions -->
<script>
import { changueList } from '../store/store.js';
    function handleChangelist() {
       changueList.update(x => !$changueList);
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="filter_list" on:click={handleChangelist}>
    {#if $changueList == true}
        <div class="option active" id="option_list">
            <i class="fa-solid fa-check check icon"></i>
            <i class="fa-solid fa-list-ul icon"></i>
        </div>
    {:else}
        <div class="option" id="option_list">
            <i class="fa-solid fa-check check icon"></i>
            <i class="fa-solid fa-list-ul icon"></i>
        </div>
    {/if}

    <span class="line"></span>
    {#if $changueList == false}
        <div class="option active" id="option_grid">
            <i class="fa-solid fa-border-all icon"></i>
            <i class="fa-solid fa-check check icon"></i>
        </div>
    {:else}
        <div class="option" id="option_grid">
            <i class="fa-solid fa-border-all icon"></i>
            <i class="fa-solid fa-check check icon"></i>
        </div>
    {/if}
</div>

<style>
    .filter_list {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 0;
        border-radius: 12px;
        width: 140px;
        height: 80%;
        border: 1px solid rgba(0, 0, 0, 0.151);
        .line {
            width: 1px;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.151);
        }
        .option {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;

            color: rgba(0, 0, 0, 0.151);

            width: 50%;
            border-radius: 12px 0px 0px 12px;

            height: 100%;
        }
        #option_grid {
            border-radius: 0px 12px 12px 0px;
        }
        .check {
            display: none !important;
        }
        .icon {
            width: auto;
            height: auto;
            font-size: 1.2em;
            display: flex;

            justify-content: center;
            align-items: center;
        }
        .active {
            background-color: rgb(72, 158, 211);
            .icon {
                color: rgb(243, 243, 243);
            }
            .check {
                display: flex !important;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>
