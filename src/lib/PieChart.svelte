<script lang="ts">
  import * as d3 from 'd3';
  import aggregateFn from '../helpers/aggregateFn';
  import { expenses } from '../stores/expenses';
  import Legend from './Legend.svelte';
  import Pie from './Pie.svelte';

  let width = 400,
    height = 400,
    margin = 40,
    radius = Math.min(width, height) / 2 - margin;

  $: aggregateExpenses = aggregateFn($expenses);

  let pie = d3
    .pie<AggregateExpenseItem>()
    .value((d) => d.amount)
    .sort((a) => {
      if (a.type === 'inc') {
        return -1;
      } else {
        return 1;
      }
    });
  $: dataReady = pie(aggregateExpenses);
</script>

<div class="canvas">
  <svg viewBox="0 0 400 400">
    <Legend />
    <g transform="translate({width / 2}, {height / 2})">
      {#each dataReady as entry, i (entry.data.id)}
        <Pie {entry} {radius} prevEnd={dataReady[i - 1]?.endAngle} />
      {/each}
    </g>
  </svg>
</div>

<style>
  .canvas {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 600px) {
    .canvas {
      width: 200px;
      height: 200px;
    }
  }
</style>
