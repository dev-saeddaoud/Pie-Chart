<script lang="ts">
  import AddEntryForm from './lib/add-entry-form/AddEntryForm.svelte';

  import PieChart from './lib/PieChart.svelte';
</script>

<div class="canvas">
  <AddEntryForm />
  <PieChart />
</div>

<style>
  .canvas {
    background-color: var(--box-color);
    display: flex;
  }
</style>
