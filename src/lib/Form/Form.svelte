<script>
    export let ruta;
    export let http_metodo;
    
    export let active = false;
</script>

<form action="{ruta}"  method="{http_metodo}" class="form_compo">


</form>

<style>
    :root {
        --color-texto: #000000;
        --color-main: #4989f0;
        --color-secundario: #e8f2ff;
    }
    .form_compo{
        background-color: red;
    }

</style>
