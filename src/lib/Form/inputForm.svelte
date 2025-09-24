<script>
    export let type="text";
    export let placeholder="";
    export let label_content="";
    export let maxLeng=0;
    export let name_inp="";
    import { Label, Input } from "flowbite-svelte";
</script>

<div class="mb-6">
    <Label for="large-input" class="mb-2 block">{label_content}</Label>
    <Input id="large-input" type="{type}" size="lg" placeholder="{placeholder}" maxlength="{maxLeng}" name="{name_inp}"/>
</div>

<style>
    
</style>
