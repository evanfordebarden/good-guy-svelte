<script>
  import NameStore from "../stores/NameStore";
</script>

<header class={$NameStore.isGood ? "good" : "bad"}>
  <h1>
    <img src="./img/guy_good_1.png" alt="Is This Guy Good? logo" />
  </h1>
</header>

<style>
  .good {
    background: var(--good-header);
  }
  .bad {
    background: var(--bad-header);
  }
  h1 {
    margin: 0;
    text-align: center;
  }
  img {
    max-width: 300px;
  }
</style>
