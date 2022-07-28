<script>
  import NameStore from "../stores/NameStore";
  import { createEventDispatcher } from "svelte";

  let dispatch = createEventDispatcher();
  let enteredName = "";

  const submitHandler = () => {
    let newName = { name: enteredName };
    NameStore.set(newName);
    console.log($NameStore.name);
    dispatch("submitName");
  };
</script>

<div>
  <form on:submit|preventDefault={submitHandler}>
    <input type="text" placeholder="enter a name" bind:value={enteredName} />
    <!-- <p>{name}</p> -->
  </form>
</div>

<style></style>
