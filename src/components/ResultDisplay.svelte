<script>
  import { onDestroy, onMount, afterUpdate } from "svelte";
  import { fade, slide, scale, fly } from "svelte/transition";
  // import { flip } from "svelte/animate";
  import ResponseStore from "../stores/ResponseStore";
  import NameStore from "../stores/NameStore";

  let response = {};

  // could be an api call here?
  const getResponse = () => {
    const max = $ResponseStore.length;
    const randomIdx = Math.floor(Math.random() * max);
    response = $NameStore.isGood
      ? {
          name: $NameStore.name,
          message: "You know what? Yeah, that guy is good.",
        }
      : { name: $NameStore.name, message: $ResponseStore[randomIdx] };
  };

  onMount(getResponse);
  afterUpdate(getResponse);
  onDestroy(() => (response = {}));
</script>

<svelte:window on:keydown on:click />

<div class="result" in:scale={{ duration: 1000 }}>
  <h3>{response.name}?<br />{response.message}</h3>
</div>

<style>
  h3 {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    /* font-size: larger; */
  }
</style>
