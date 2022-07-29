<script>
  import NameStore from "../stores/NameStore";
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  let nameInput;
  let dispatch = createEventDispatcher();
  let enteredName = "";

  const submitHandler = () => {
    // let newName = { name: enteredName };
    $NameStore.name = enteredName;
    dispatch("submitName");
  };

  onMount(() => {
    nameInput.focus();
  });
</script>

<div>
  <form on:submit|preventDefault={submitHandler}>
    <input
      bind:this={nameInput}
      type="text"
      placeholder="enter a name"
      bind:value={enteredName}
    />
    <!-- <p>{name}</p> -->
  </form>
</div>

<style></style>
