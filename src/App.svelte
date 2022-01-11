<script lang="ts">
  import * as d3 from 'd3';
  import Pie from './lib/Pie.svelte';
  import { aggregateExpenses } from './stores/expenses';

  let width = 400,
    height = 400,
    margin = 40,
    radius = Math.min(width, height) / 2 - margin;

  let pie = d3.pie<AggregateExpenseItem>().value((d) => d.amount);
  let dataReady = pie($aggregateExpenses);
</script>

<div class="canvas">
  <svg {width} {height}>
    <g transform="translate({width / 2}, {height / 2})">
      {#each dataReady as entry, i (entry.data.id)}
        <Pie {entry} {radius} prevEnd={dataReady[i - 1]?.endAngle} />
      {/each}
    </g>
  </svg>
</div>

<style>
  .canvas {
    background-color: var(--box-color);
  }
</style>
