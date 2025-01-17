import React, { useState } from "react";

const IncomeForm = ({ onAddIncome }) => {
    const [amount, setAmount] = useState("");
    const [source, setSource] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount && source) {
            onAddIncome({ amount: parseFloat(amount), source });
            setAmount("");
            setSource("");
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
                Source:
                <input
                    type="text"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Add Income</button>
        </form>
    );
};

export default IncomeForm;