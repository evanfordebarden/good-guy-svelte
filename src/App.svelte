<script>
  import NameInput from "./components/NameInput.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import ResultDisplay from "./components/ResultDisplay.svelte";
  import NameStore from "./stores/NameStore";

  let hasResult = false;

  const handleSubmit = (e) => {
    console.log("submitted");
    // hasResult = false;
    hasResult = true;
  };

  const handleClick = (e) => {
    console.log("clicked");
    hasResult = false;
    NameStore.set({ name: "" });
  };
</script>

<Header />
<main>
  <p>
    Most guys are bad. That's why we built this website. <br />Enter a name and
    get an answer.
  </p>

  {#if $NameStore.name !== ""}
    <ResultDisplay on:click={handleClick} on:keydown={handleClick} />
  {:else}
    <NameInput on:submitName={handleSubmit} />
  {/if}
</main>
<Footer />

<style>
  main {
    text-align: center;
    /* padding: 1em; */
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
