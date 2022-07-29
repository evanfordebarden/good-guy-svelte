<main class="card">
  <slot />
</main>

<style>
  main {
    position: relative;
  }

  .card {
    text-align: center;
    background: #fff;
    padding: 30px;
    width: 300px;
    height: 30%;
    margin: 3rem auto;
    border-radius: 6px;
    box-shadow: 1px 1px 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>
