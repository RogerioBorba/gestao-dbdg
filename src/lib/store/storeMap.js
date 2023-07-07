import { writable } from 'svelte/store';
export let currentBaseLayer = writable(null);
export let map = writable(null);
export let selectedLayers = writable([]);
export let facadeOL = writable(null);
