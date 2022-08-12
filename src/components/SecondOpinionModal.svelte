<script>
  export let shown;

  export function show() {
    shown = true;
  }

  export function hide(e) {
    shown = false;
  }
</script>

{#if shown}
  <div id="modal-wrapper" class="modal-wrapper">
    <div id="modal" class="modal">
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
</style>
