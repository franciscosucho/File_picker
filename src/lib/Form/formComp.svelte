<script>
   export let tit_form
   export let methodProp
   export let actionProp
</script>
<form action="" method="post"></form>
<form action="{actionProp}"  method="{methodProp}" class="form">
    <h3 class="tit_form">{tit_form}</h3>
</form>

<style>
    .form {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
        height: auto;
        width: 40%;
        background-color: rgb(255, 255, 255);
        box-shadow: 0 3px 10px rgba(73, 73, 73, 0.582);
        border-radius: 12px;
    }
    .form .tit_form {
        color: black;
        font-size: 1.3em;
        font-weight: bolder;
    }

   
</style>
