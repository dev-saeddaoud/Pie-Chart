type ExpenseItem = {
  id: string;
  type: string;
  title: string;
  amount: number;
};

type ExpenseData = ExpenseItem[];

type AggregateExpenseItem = {
  id: string;
  type: string;
  amount: number;
};

type AggregateExpenses = AggregateExpenseItem[];
