import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Phone",
    amount: "500",
    date: new Date(2021, 10, 2),
  },
  {
    id: 2,
    title: "TV",
    amount: "700",
    date: new Date(2022, 3, 1),
  },
  {
    id: 3,
    title: "Car",
    amount: "7500",
    date: new Date(2019, 0, 12),
  },
  {
    id: 4,
    title: "Home",
    amount: "5000",
    date: new Date(2022, 1, 25),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
