import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount && category) {
            const expense = { amount: parseFloat(amount), category};
            console.log("Adding Expense:", expense); // Log the expense object
            onAddExpense({ amount: parseFloat(amount), category });
            setAmount(""); // Reset the form fields
            setCategory("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <label>
            Amount:
            <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            />
        </label>
        <label>
            Category:
            <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Investment">Investment</option>
            <option value="Other">Other</option>
            </select>
        </label>
        <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;