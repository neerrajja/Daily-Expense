import React, { useState, useEffect } from 'react';
import { getAllExpenses } from '../services/api';


const AllExpenses = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            const allExpenses = await getAllExpenses();
            setExpenses(allExpenses);
        };
        fetchExpenses();
    }, []);

    return (
        <div>
            <h2>All Expenses</h2>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>{expense.description}: ${expense.total_amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default AllExpenses;
