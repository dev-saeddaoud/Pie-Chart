type ExpenseItem = {
  id: string;
  type: string;
  title: string;
  amount: number;
};

type ExpenseData = ExpenseItem[];

type AggregateExpenseItem = {
  id: number;
  type: string;
  amount: number;
};

type AggregateExpenses = AggregateExpenseItem[];
