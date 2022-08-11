<script>
  import NameInput from "./components/NameInput.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import ResultDisplay from "./components/ResultDisplay.svelte";
  import NameStore from "./stores/NameStore";
  import LightLoader from "./shared/LightLoader.svelte";
  import Card from "./shared/Card.svelte";

  let loading = false;

  const handleSubmit = (e) => {
    const isGuyGood = $NameStore.name === "Brendan Frasier";
    loading = true;

    setTimeout(() => {
      loading = false;
      if (!isGuyGood) $NameStore.isGood = false;
    }, 5000);
  };

  const handleClick = (e) => {
    NameStore.set({ name: "", isGood: true });
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
      <ResultDisplay on:click={handleClick} on:keydown={handleClick} />
    {:else if loading}
      <LightLoader />
    {:else}
      <NameInput on:submitName={handleSubmit} />
    {/if}
  </div>
</Card>
<Footer />

<style>
  .interactionContainer {
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: larger;
  }
</style>
