<script>
  import NameInput from "./components/NameInput.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import ResultDisplay from "./components/ResultDisplay.svelte";

  let hasResult = false;

  const handleSubmit = (e) => {
    console.log("submitted");
    hasResult = false;
    hasResult = true;
  };
</script>

<Header />
<main>
  <p>
    Guys are hard to trust. That's why we built this website. <br />Enter a name
    and get an answer.
  </p>
  <NameInput on:submitName={handleSubmit} />
  {#if hasResult}
    <ResultDisplay />
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
