import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ExpenseForm from "./components/ExpenseForm";
import IncomeForm from "./components/IncomeForm";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);

  const addExpense = (expense) => {
    //console.log("Before Adding Expense, Expenses:", expenses);
    setExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses, expense];
      console.log("After adding expense, Updated Expenses:", updatedExpenses);
      return updatedExpenses;
    });
  };

  const addIncome = (income) => {
    //console.log("Before Adding Income, Income:", income);
    setIncome((prevIncome) => {
      const updatedIncome = [...prevIncome, income];
      console.log("After adding income, Updated Income:", updatedIncome);
      return updatedIncome;
    });
  };

  // Reset handler to clear all data
  const resetTracket = () => {
    setExpenses([]);
    setIncome([]);
    console.log("Expense tracker has been reset.");
  };

  return (
    <Router>
      <div>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Dashboard</Link> | <Link to="/add-income">Add Income</Link> |{" "}
          <Link to="/add-expense">Add Expense</Link> |{" "}
          <button
            onClick={resetTracket}
            style={{
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            Reset Tracker
          </button>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard expenses={expenses} income={income} />} />
          <Route path="/add-income" element={<IncomeForm onAddIncome={addIncome} />} />
          <Route path="/add-expense" element={<ExpenseForm onAddExpense={addExpense} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
