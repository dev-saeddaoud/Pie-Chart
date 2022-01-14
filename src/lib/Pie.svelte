<script lang="ts">
  import * as d3 from 'd3';
  import createTweenValue from '../helpers/createTween';

  export let entry: d3.PieArcDatum<AggregateExpenseItem>;
  export let radius: number;

  export let prevEnd: number | undefined;

  let arcGenerator = d3
    .arc<d3.PieArcDatum<AggregateExpenseItem>>()
    .innerRadius(0)
    .outerRadius(radius);

  let startAngleTween = createTweenValue(prevEnd ? prevEnd : 0);
  $: startAngleTween.set(+entry.startAngle);

  let endAngleTween = createTweenValue(prevEnd ? prevEnd : 0);
  $: endAngleTween.set(+entry.endAngle);

  let amountTween = createTweenValue(0);
  $: amountTween.set(entry.data.amount);
</script>

<g>
  <path
    d={arcGenerator({
      ...entry,
      startAngle: $startAngleTween,
      endAngle: $endAngleTween,
    })}
    fill={entry.data.type === 'inc' ? 'var(--inc-color)' : 'var(--exp-color)'}
    stroke="black"
    stroke-width={2}
    opacity="1"
  />
  <text
    text-anchor="middle"
    transform="translate({arcGenerator.centroid({
      ...entry,
      startAngle: $startAngleTween,
      endAngle: $endAngleTween,
    })})">{$amountTween.toFixed(0)}</text
  >
</g>

<style>
  text {
    font-size: 14px;
    fill: var(--text-color);
  }
</style>
