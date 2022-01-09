<script lang="ts">
  import * as d3 from 'd3';
  import expenses from './stores/expenses';

  let width = 400,
    height = 400,
    margin = 40,
    radius = Math.min(width, height) / 2 - margin;

  let pie = d3.pie().value((d) => d.amount);
  let dataReady = pie($expenses);
  let arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);
</script>

<div class="canvas">
  <svg {width} {height}>
    <g transform="translate({width / 2}, {height / 2})">
      {#each dataReady as entry (entry.data.id)}
        <path
          d={arcGenerator(entry)}
          fill={entry.data.type === 'inc' ? 'steelblue' : 'green'}
        />
      {/each}
    </g>
  </svg>
</div>

<style>
  .canvas {
    background-color: var(--box-color);
  }
</style>
