import React from 'react';
import UserForm from './components/userform';
import ExpenseForm from './components/ExpenseForm';
import UserExpenses from './components/UserExpenses';
import AllExpenses from './components/AllExpenses';

const App = () => {
    return (
        <div>
            <h1>Daily Expenses Sharing Application</h1>
            <UserForm />
            <ExpenseForm />
            <UserExpenses userId={1} />
            <AllExpenses />
        </div>
    );
};

export default App;
