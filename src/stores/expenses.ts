import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

const expenses = writable([
  { id: uuidv4(), type: 'inc', title: 'salary', amount: 3000 },
  { id: uuidv4(), type: 'exp', title: 'rent', amount: 800 },
]);

export default expenses;