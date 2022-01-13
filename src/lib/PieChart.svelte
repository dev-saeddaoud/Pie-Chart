<script lang="ts">
  import * as d3 from 'd3';
  import aggregateFn from '../helpers/aggregateFn';
  import { expenses } from '../stores/expenses';
  import Pie from './Pie.svelte';

  let width = 400,
    height = 400,
    margin = 40,
    radius = Math.min(width, height) / 2 - margin;

  $: aggregateExpenses = aggregateFn($expenses);
  // $: console.log(aggregateExpenses);

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
  <svg {width} {height}>
    <g transform="translate({width / 2}, {height / 2})">
      {#each dataReady as entry, i (entry.data.id)}
        <Pie {entry} {radius} prevEnd={dataReady[i - 1]?.endAngle} />
      {/each}
    </g>
  </svg>
</div>
