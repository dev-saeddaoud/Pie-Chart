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
  }
</style>
