const API_URL = 'http://localhost:5000';

export async function createUser(userData) {
    const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    return response.json();
}

export async function addExpense(expenseData) {
    const response = await fetch(`${API_URL}/expenses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(expenseData),
    });
    return response.json();
}

export async function getUserExpenses(userId) {
    const response = await fetch(`${API_URL}/expenses/user/${userId}`);
    return response.json();
}

export async function getAllExpenses() {
    const response = await fetch(`${API_URL}/expenses`);
    return response.json();
}
