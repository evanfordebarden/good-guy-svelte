<script>
  import { onDestroy, onMount, afterUpdate } from "svelte";
  import { fade, slide, scale, fly } from "svelte/transition";
  import { flip } from "svelte/animate";
  import ResponseStore from "../stores/ResponseStore";
  import NameStore from "../stores/NameStore";

  let response = {};

  // could be an api call here?
  const getResponse = () => {
    const max = $ResponseStore.length;
    const randomIdx = Math.floor(Math.random() * max);
    response =
      $NameStore.name === "Keanu Reeves"
        ? {
            name: $NameStore.name,
            message: "You know what? Yeah, that guy is good.",
          }
        : { name: $NameStore.name, message: $ResponseStore[randomIdx] };
  };

  onMount(getResponse);
  afterUpdate(getResponse);
  // onDestroy(() => (response = {}));
</script>

<div class="result" in:scale={{ duration: 1000 }}>
  <h3>{response.name}?<br />{response.message}</h3>
</div>

<style>
</style>
