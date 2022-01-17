import { tweened } from 'svelte/motion';

const createTweenValue = (
  value: number,
  defaults: { duration?: number; delay?: number } = {}
) => {
  let { delay = 500, duration = 1000 } = Object.assign({}, defaults);
  return tweened(value, { duration: duration, delay: delay });
};

export default createTweenValue;
