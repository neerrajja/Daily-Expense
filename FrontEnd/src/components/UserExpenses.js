import React, { useState, useEffect } from 'react';
import { getUserExpenses } from '../services/api';

const UserExpenses = ({ userId }) => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            const userExpenses = await getUserExpenses(userId);
            setExpenses(userExpenses);
        };
        fetchExpenses();
    }, [userId]);

    return (
        <div>
            <h2>User Expenses</h2>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>{expense.description}: ${expense.total_amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserExpenses;
