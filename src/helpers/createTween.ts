import { tweened } from 'svelte/motion';

const createTweenValue = (
  value: number,

  { delay } = { delay: 0 }
) => {
  return tweened(value, { duration: 5000, delay: delay });
};

export default createTweenValue;
