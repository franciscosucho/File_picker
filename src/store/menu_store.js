import { writable } from 'svelte/store';
// False = No desplegado
// True = desplegado
export let changueMenu = writable(false);