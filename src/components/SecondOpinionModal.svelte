<script>
  let shown = false;

  export function show() {
    shown = true;
  }

  export function hide(e) {
    console.log(e.target);
    shown = false;
  }
</script>

<svelte:window
  on:keydown={(e) => {
    if (e.keyCode == 27) {
      hide();
    }
  }}
/>

{#if shown}
  <div class="modal-wrapper">
    <div class="modal">
      <span class="close" on:click={() => hide()}>&times;</span>
      <slot />
    </div>
  </div>
{/if}

<style>
  .modal-wrapper {
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
  }
  .modal {
    background-color: white;
    max-width: 60vw;
    padding: 1rem;
    margin: 15% auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .close {
    float: right;
  }
  .close:hover {
    font-weight: bold;
    cursor: default;
  }
</style>
