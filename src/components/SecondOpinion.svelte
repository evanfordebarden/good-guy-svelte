<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { fly } from "svelte/transition";
  import App from "../App.svelte";
  const dispatch = createEventDispatcher();

  let showSecondOpinion = false;

  onMount(() => {
    setTimeout(() => {
      showSecondOpinion = true;
    }, 2000);
  });

  function openModal() {
    dispatch("secOpModal");
  }
</script>

{#if showSecondOpinion}
  <button
    id="second-opinion"
    on:click|self={openModal}
    in:fly={{ y: 30, duration: 1000 }}
    >But...I think this guy is good.
  </button>
{/if}

<style>
  button {
    font-size: small;
  }
</style>
