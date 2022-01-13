const aggregateFn = (expenses: ExpenseItem[]) => {
  let values = [
    { id: 0, type: 'inc', amount: 0 },
    { id: 1, type: 'exp', amount: 0 },
  ];
  expenses.forEach((item) => {
    values.forEach((value, i) => {
      if (value.type === item.type) {
        values[i].amount += item.amount;
      }
    });
  });
  return values;
};

export default aggregateFn;
