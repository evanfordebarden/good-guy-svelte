import { writable } from "svelte/store";

const NameStore = writable({ name: "" });

export default NameStore;
