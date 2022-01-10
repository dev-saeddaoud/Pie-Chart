import { tweened } from 'svelte/motion';

const createTweenValue = (
  value: number,
  { duration } = { duration: 1000 },
  { delay } = { delay: 0 }
) => {
  return tweened(value, { duration: duration, delay: delay });
};

export default createTweenValue;
