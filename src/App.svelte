<script>
  import NameInput from "./components/NameInput.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import ResultDisplay from "./components/ResultDisplay.svelte";
  import NameStore from "./stores/NameStore";
  import LightLoader from "./shared/LightLoader.svelte";
  import Card from "./shared/Card.svelte";
  import SecondOpinionModal from "./components/SecondOpinionModal.svelte";

  let loading = false;
  let modal;

  const handleSubmit = (e) => {
    const isGuyGood = $NameStore.name === "Brendan Frasier";
    loading = true;

    setTimeout(() => {
      loading = false;
      if (!isGuyGood) $NameStore.isGood = false;
    }, 2800);
  };

  const handleClick = (e) => {
    console.log(e.target.id);
    // if (e.target.id !== "second-oninion") {
    NameStore.set({ name: "", isGood: true });
    // }
  };
</script>

<Header />
<Card>
  <p>
    Most guys are bad. <br />That's why we built this website. <br />Enter a
    name and get an answer.
  </p>

  <div class="interactionContainer">
    {#if !loading && $NameStore.name !== ""}
      <ResultDisplay
        on:click={handleClick}
        on:keydown={handleClick}
        on:click={() => modal.show()}
      />
    {:else if loading}
      <LightLoader />
    {:else}
      <NameInput on:submitName={handleSubmit} />
    {/if}
  </div>
</Card>
<SecondOpinionModal bind:this={modal}>
  <h2>Modal title</h2>
  <p>Modal content.</p>
  <button on:click={modal.hide}>Close</button>
</SecondOpinionModal>
<Footer />

<style>
  .interactionContainer {
    height: 60%; /*40*/
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 0.5px solid lime;
  }

  p {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: larger;
  }
</style>
