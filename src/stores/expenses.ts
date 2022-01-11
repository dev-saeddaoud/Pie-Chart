import { writable, derived } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

export const expenses = writable([
  { id: uuidv4(), type: 'inc', title: 'salary', amount: 3000 },
  { id: uuidv4(), type: 'inc', title: 'interest', amount: 3000 },
  { id: uuidv4(), type: 'exp', title: 'rent', amount: 1500 },
  { id: uuidv4(), type: 'exp', title: 'clothes', amount: 1500 },
]);

export const aggregateExpenses = derived(expenses, ($expenses) => {
  let values = [
    { id: uuidv4(), type: 'inc', amount: 0 },
    { id: uuidv4(), type: 'exp', amount: 0 },
  ];
  $expenses.forEach((item) => {
    values.forEach((value, i) => {
      if (value.type === item.type) {
        values[i].amount += item.amount;
      }
    });
  });
  return values;
});
