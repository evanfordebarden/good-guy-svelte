<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { fly } from "svelte/transition";
  const dispatch = createEventDispatcher();

  let showSecondOpinion = false;

  onMount(() => {
    setTimeout(() => {
      showSecondOpinion = true;
    }, 3000);
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
    /* color: white; */
    /* background: var(--bad-header); */
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    /* font-size: small; */
    margin: 0;
  }
</style>
