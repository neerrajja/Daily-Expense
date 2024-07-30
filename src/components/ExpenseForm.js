import React, { useState } from 'react';
import { addExpense } from '../services/api';

const ExpenseForm = () => {
    const [description, setDescription] = useState('');
    const [total_amount, setTotalAmount] = useState('');
    const [split_method, setSplitMethod] = useState('equal');
    const [splits, setSplits] = useState([]);
    const [user_id, setUserId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newExpense = { description, total_amount, split_method, splits, user_id };
        await addExpense(newExpense);
        setDescription('');
        setTotalAmount('');
        setSplitMethod('equal');
        setSplits([]);
        setUserId('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
            <input type="number" value={total_amount} onChange={(e) => setTotalAmount(e.target.value)} placeholder="Total Amount" required />
            <select value={split_method} onChange={(e) => setSplitMethod(e.target.value)}>
                <option value="equal">Equal</option>
                <option value="exact">Exact</option>
                <option value="percentage">Percentage</option>
            </select>
            {/* Add inputs for splits based on splitMethod */}
            <input type="text" value={user_id} onChange={(e) => setUserId(e.target.value)} placeholder="User ID" required />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
