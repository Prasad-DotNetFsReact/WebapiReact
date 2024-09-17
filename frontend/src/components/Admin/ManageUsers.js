import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { fetchData } from '../../services/apiService';

function ManageUsers() {
    const [users, setUsers] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await fetchData('users');
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        if (user && user.role.roleName === 'Admin') {
            getUsers();
        }
    }, [user]);

    if (!user || user.role.roleName !== 'Admin') return <div>Access denied</div>;

    return (
        <div className="container">
            <h2 className="my-4">Manage Users</h2>
            <div className="list-group">
                {users.map(user => (
                    <div key={user.id} className="list-group-item">
                        {user.username}
                        <button className="btn btn-danger btn-sm float-right" onClick={() => handleDelete(user.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );

    async function handleDelete(userId) {
        try {
            await fetch(`http://localhost:5000/api/users/${userId}`, { method: 'DELETE' });
            setUsers(users.filter(user => user.id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }
}

export default ManageUsers;
