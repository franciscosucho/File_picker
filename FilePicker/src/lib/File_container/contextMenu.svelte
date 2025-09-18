<script>
    // Estado local para controlar si el menú está visible
   export let showMenu = false;
    // Función para alternar la visibilidad del menú


</script>

<ul class="context-menu" class:show={showMenu}>
    <li><i class="fa-solid fa-download"></i> Descargar</li>
    <li><i class="fa-solid fa-share-nodes"></i> Editar</li>
    <hr />
    <li><i class="fa-solid fa-trash-can"></i> Eliminar</li>
</ul>

<style>
    .context-menu-container {
        position: relative;
        display: inline-block;
    }

    .context-menu {
        position: absolute;
        top: 100%; /* Posiciona el menú debajo del icono */
        right: 0;
        list-style: none;
        padding: 8px 0;
        margin: 0;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        min-width: 150px;
        z-index: 1000;
        display: none; /* Por defecto, el menú está oculto */
    }

    .context-menu.show {
        display: block; /* Muestra el menú cuando tiene la clase 'show' */
    }

    .context-menu li {
        padding: 8px 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .context-menu li:hover {
        background-color: var(--color-secundario);
    }
</style>
