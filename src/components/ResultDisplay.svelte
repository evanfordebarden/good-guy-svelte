<script>
  import { onDestroy, onMount, afterUpdate } from "svelte";
  import { fade, slide, scale, fly } from "svelte/transition";
  // import { flip } from "svelte/animate";
  import SecondOpinion from "./SecondOpinion.svelte";
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
          message:
            "You know what...yeah. Remarkably, that guy is actually good.",
        }
      : { name: $NameStore.name, message: $ResponseStore[randomIdx] };
  };

  onMount(getResponse);
  // afterUpdate(getResponse);
  onDestroy(() => (response = {}));
</script>

<svelte:window on:keydown on:click />

<div class="result" in:scale={{ duration: 1000 }}>
  <p>{response.name}?<br />{response.message}</p>
  {#if !$NameStore.isGood}
    <SecondOpinion on:secOpModal />
  {/if}
</div>

<style>
  .result {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* border: 0.5px solid black; */
  }
  p {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: larger;
    font-weight: bold;
    margin-top: 1em;
  }
</style>
