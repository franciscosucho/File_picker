<script>
    export let type = "text";
    export let placeholder = "";
    export let label_content = "";
    export let maxLeng = 0;
    export let name_inp = "";
</script>

<div class="cont_input">
    <label for="large-input" class="label">{label_content}</label>
    <input id="large-input" class="input" type="{type}" placeholder="{placeholder}" maxlength={maxLeng} name={name_inp}/>
</div>

<style>
    .cont_input {
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 80%;
       
    }
    .cont_input .input {
        width: 90%;
        padding: 10px;  
        border-radius: 12px;
        color: black;
        box-shadow: 0 3px 10px rgba(44, 44, 44, 0.116);
    }
</style>
