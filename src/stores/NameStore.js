import { writable } from "svelte/store";

const NameStore = writable({ name: "", isGood: true });

export default NameStore;
