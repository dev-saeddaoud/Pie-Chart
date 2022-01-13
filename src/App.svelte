<script lang="ts">
  import AddEntryForm from './lib/add-entry-form/AddEntryForm.svelte';

  import PieChart from './lib/PieChart.svelte';
</script>

<div class="container">
  <AddEntryForm />
  <PieChart />
</div>

<style>
  .container {
    background-color: var(--box-color);
    display: flex;
  }
</style>
