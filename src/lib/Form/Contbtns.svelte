<script>
    export let placeholder_pri;
    export let placeholder_sec;
    export let handFunction;
</script>

<div class="cont_btn">
    <button class="btn_form" type="submit">{placeholder_pri}</button>
    <button class="btn_form cancelar" type="button" on:click={handFunction}
        >{placeholder_sec}</button
    >
</div>

<style>
    .cont_btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: auto;
        gap: 20px;
    }
    .cont_btn .btn_form {
        padding: 10px;
        width: 40%;
        background-color: rgb(38, 38, 230);
        color: white;
        font-weight: bold;
        border-radius: 12px;
        cursor: pointer;
    }
    .cancelar {
        font-weight: bold;
        background-color: transparent !important;
        border: 1px solid rgba(29, 29, 29, 0.37);
        color: rgb(29, 29, 29) !important;
    }
</style>
