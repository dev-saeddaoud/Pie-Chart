<script lang="ts">
  import * as d3 from 'd3';
  import createTweenValue from '../helpers/createTween';

  export let entry: d3.PieArcDatum<DataItem>;
  export let radius: number;

  let arcGenerator = d3
    .arc<d3.PieArcDatum<DataItem>>()
    .innerRadius(0)
    .outerRadius(radius);

  export let prevEnd: number | undefined;

  console.log(prevEnd, entry.endAngle);

  let startAngleTween = createTweenValue(prevEnd ? prevEnd : 0);
  $: startAngleTween.set(+entry.startAngle);

  let endAngleTween = createTweenValue(0);
  $: endAngleTween.set(+entry.endAngle);
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
  />
</g>
