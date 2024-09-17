import React, { useEffect, useState } from 'react';
import { fetchData } from '../../services/apiService';
import { useParams } from 'react-router-dom';

function UserProfile() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const data = await fetchData(`users/${id}`);
                setUser(data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        getUser();
    }, [id]);

    if (!user) return <div>Loading...</div>;

    return (
        <div className="container">
            <h2 className="my-4">{user.username}</h2>
            <p><strong>Role:</strong> {user.role?.roleName}</p>
        </div>
    );
}

export default UserProfile;
