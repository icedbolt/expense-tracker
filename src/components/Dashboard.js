import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, PieController } from "chart.js";
import { Pie } from "react-chartjs-2";

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend, PieController);

const Dashboard = ({ expenses, income }) => {
    const totalIncome = income?.reduce((sum, inc) => sum + inc.amount, 0) || 0;
    const totalExpenses = expenses?.reduce((sum, exp) => sum + exp.amount, 0) || 0;
    const balance = totalIncome - totalExpenses;

    const expenseCategories = [...new Set(expenses.map((exp) => exp.category))];
    const categoryTotals = expenseCategories.map((category) =>
        expenses
            .filter((exp) => exp.category === category)
            .reduce((sum, exp) => sum + exp.amount, 0)
    );

    const chartData = {
        labels: expenseCategories,
        datasets: [
            {
                data: categoryTotals,
                backgroundColor: ["#8b008b", "#696969", "#008000", "#ffd700", "#4BC0C0", "#9966FF"],
            },
        ],
    };

    return (
        <div>
            <h1>Personal Expense Tracker</h1>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                    <h2>Total Income: ${totalIncome.toFixed(2)}</h2>
                    <h2>Total Expenses: ${totalExpenses.toFixed(2)}</h2>
                    <h2>Balance: ${balance.toFixed(2)}</h2>
                    <h3>Income Sources:</h3>
                    <ul>
                        {income.map((inc, index) => (
                            <li key={index}>
                                {inc.source}: ${inc.amount.toFixed(2)}
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{ width: "300px", height: "300px" }}>
                    <h3>Expense Breakdown</h3>
                    <Pie data={chartData} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
