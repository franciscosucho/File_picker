<script>
    export let onClose = () => {}; // callback para cerrar
    import MainFiles from "./File_container/MainFiles.svelte";
    import MenuLateral from "./MenuLateral/menu_lateral.svelte";
    import InputForm from "./Form/inputForm.svelte";

    import FormComp from "./Form/formComp.svelte";
    let formProps = {
        tit_form: "Crear nueva carpeta",
        methodProp: "post",
        actionProp: "/createFolder",
    };

    import { changueBackdrop } from "../store/store_form.js";
    function handleShowAdd(event) {
        changueBackdrop.update(() => !$changueBackdrop);
    }

    import Contbtns from "./Form/Contbtns.svelte";
    let cont_btnProps = {
        placeholder_pri: "Crear",
        placeholder_sec: "Cancelar",
        handFunction: handleShowAdd,
    };

    let foldername = "";
    async function post_form() {
        const data = { name: foldername };
        const response = await fetch(
            "http://localhost:8000/filepicker/folders/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            },
        );
        console.log(await response.json());
    }

    let categories = [
        {
            name: "Recientes",

            count: 12,
            active: false,
        },
        {
            name: "Documentos",

            count: 24,
            active: false,
        },
        {
            name: "Imágenes",

            count: 156,
            active: false,
        },
        { name: "Videos", count: 8, active: false },
        {
            name: "Carpetas",

            count: 6,
            active: false,
        },
    ];
    let copyCategories = [...categories];

    let items = [
        {
            id: 1,
            name: "Recientes",
            url: "https://picsum.photos/200",
            active: true,
            last: false,
        },
        {
            id: 2,
            name: "ssasdasd",
            url: "https://picsum.photos/200",
            active: true,
            last: false,
        },
        {
            id: 2,
            name: "ssasdasd",
            url: "https://picsum.photos/200",
            active: true,
            last: false,
        },
        {
            id: 2,
            name: "ssasdasd",
            url: "https://picsum.photos/200",
            active: true,
            last: false,
        },
        {
            id: 2,
            name: "ssasdasd",
            url: "https://picsum.photos/200",
            active: true,
            last: false,
        },
        {
            id: 2,
            name: "ssasdasd",
            url: "https://picsum.photos/200",
            active: true,
            last: false,
        },
        {
            id: 2,
            name: "ssasdasd",
            url: "https://picsum.photos/200",
            active: true,
            last: false,
        },
        {
            id: 2,
            name: "ssasdasd",
            url: "https://picsum.photos/200",
            active: true,
            last: false,
        },
    ];
    let copyitems = [...items];

    function handleSearchCat(e) {
        const q = e.target.value;
        if (q === "") {
            copyCategories = [...categories];
            return false;
        }
        const results = categories.filter((cat) => {
            const name = cat.name.toLowerCase();

            return name.indexOf(q) > -1;
        });
        copyCategories = [...results];
    }
    function handleSearchFile(e) {
        const q = e.target.value;
        if (q === "") {
            copyitems = [...items];
            return false;
        }
        const results = items.filter((item) => {
            const name = item.name.toLowerCase();

            return name.indexOf(q) > -1;
        });
        copyitems = [...results];
    }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- {#if open} -->
<!-- svelte-ignore a11y_click_events_have_key_events -->

<div class="contain_modal" on:click={onClose}>
    <div class="backdrop" class:active_back={$changueBackdrop}>
        <!-- <FormComp {...formProps}></FormComp>-->
        <form method="post" class="form" on:submit|preventDefault={post_form}>
            <h3 class="tit_form">Crear Carpeta</h3>

            <InputForm
                type={"text"}
                label_content={"Nombre de la carpeta"}
                placeholder={"Escriba el nombre de la carpeta"}
                name_inp={"namefolder"}
                maxLeng={50}
                bind:value={foldername}
            />
            <Contbtns {...cont_btnProps}></Contbtns>
        </form>
    </div>
    <div class="modal" on:click|stopPropagation>
        <MenuLateral
            bind:categories={copyCategories}
            on:input={handleSearchCat}
        />

        <MainFiles bind:items={copyitems} on:input={handleSearchFile} />
        <!--  <button on:click={onClose}>Cerrar</button>-->
    </div>
</div>

<!-- {/if} -->

<style>
    .contain_modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .backdrop {
        display: none;
        position: absolute;

        top: 0;
        left: 0;

        z-index: 1000;
        background-color: rgba(0, 0, 0, 0.904);
    }
    .active_back {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .modal {
        background: white;
        width: 70%;
        height: 70%;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
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
