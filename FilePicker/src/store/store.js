import { writable } from 'svelte/store';
// False = grid
// True = list
export let changueList = writable(false);
export let count = writable(0);