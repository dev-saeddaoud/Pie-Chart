<script lang="ts">
  import AddEntryForm from './lib/add-entry-form/AddEntryForm.svelte';
  import Details from './lib/details/Details.svelte';

  import PieChart from './lib/PieChart.svelte';
</script>

<div class="container">
  <AddEntryForm />
  <PieChart />
  <Details />
</div>

<style>
  .container {
    background-color: var(--box-color);
    display: flex;
    height: 400px;
    position: relative;
    width: 1250px;
  }

  @media (max-width: 1200px) {
    .container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      /* height: 100vh;
      min-height: 100vh; */
      width: 100vw;
    }
  }
</style>
