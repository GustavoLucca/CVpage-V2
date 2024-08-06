// app/profile/page.jsx
'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect } from 'react';

const ProfilePage = () => {
    const { user, error, isLoading } = useUser();

    useEffect(() => {
        console.log('User:', user);
        console.log('Error:', error);
        console.log('IsLoading:', isLoading);
    }, [user, error, isLoading]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        user && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    );
};

export default ProfilePage;
