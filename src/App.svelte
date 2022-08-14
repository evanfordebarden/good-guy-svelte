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
  let shown = false;

  const handleSubmit = (e) => {
    const isGuyGood = $NameStore.name === "Brendan Fraser";
    loading = true;

    setTimeout(() => {
      loading = false;
      if (!isGuyGood) $NameStore.isGood = false;
      document.body.style.backgroundColor = $NameStore.isGood
        ? "var(--good-background)"
        : "var(--bad-background)";
    }, 2800);
  };

  const reset = () => {
    NameStore.set({ name: "", isGood: true });
    document.body.style.backgroundColor = "white";
  };

  const handleClick = (e) => {
    let ignoredTargetIds = [
      "second-opinion",
      "close-button",
      "modal-wrapper",
      "modal",
    ];
    if (
      !ignoredTargetIds.includes(e.target.id) &&
      !Object.values(e.target.classList).includes("modal-elem")
    )
      reset();
  };

  const handleKeydown = (e) => {
    if (!shown) reset();
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
        on:keydown={handleKeydown}
        on:secOpModal={() => modal.show()}
      />
    {:else if loading}
      <LightLoader />
    {:else}
      <NameInput on:submitName={handleSubmit} />
    {/if}
  </div>
</Card>
<SecondOpinionModal bind:this={modal} bind:shown>
  <h2 class="modal-elem">We're actually pretty sure.</h2>
  <p class="modal-elem">
    Just...think for like three minutes. Are you sure this guy is good? Like
    really really? So many guys have done really bad things and never told a
    single person. And if they're "nice" or "charming?" Yikes. Look out. Almost
    definitely bad.
  </p>
  <button id="close-button" on:click={modal.hide}>I understand. I agree.</button
  >
</SecondOpinionModal>
<Footer />

<style>
  .interactionContainer {
    height: 60%; /*40*/
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    /* border: 0.5px solid lime; */
  }

  p {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: larger;
  }

  p.modal-elem {
    padding-top: 0em;
    margin-top: 0em;
  }
</style>
