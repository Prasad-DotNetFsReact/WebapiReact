import React, { useEffect, useState } from 'react';
import { fetchData } from '../../services/apiService';
import { Link } from 'react-router-dom';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await fetchData('users');
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        getUsers();
    }, []);

    return (
        <div className="container">
            <h2 className="my-4">Users</h2>
            <div className="list-group">
                {users.map(user => (
                    <Link key={user.id} to={`/users/${user.id}`} className="list-group-item list-group-item-action">
                        {user.username}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default UserList;
