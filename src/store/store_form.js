import { writable } from 'svelte/store';
// False = Escondido
// True = No escondido
export let changueBackdrop = writable(false);