import React, { useState } from 'react';
import { createUser } from '../services/api';

const UserForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [mobile_number, setMobileNumber] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = { email, name, mobile_number };
        await createUser(newUser);
        setEmail('');
        setName('');
        setMobileNumber('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="text" value={mobile_number} onChange={(e) => setMobileNumber(e.target.value)} placeholder="Mobile Number" required />
            <button type="submit">Create User</button>
        </form>
    );
};

export default UserForm;
