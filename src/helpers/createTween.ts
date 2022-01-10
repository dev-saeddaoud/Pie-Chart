import { tweened } from 'svelte/motion';

const createTweenValue = (value: number, duration = 5000) => {
  return tweened(value, { duration: duration });
};

export default createTweenValue;
