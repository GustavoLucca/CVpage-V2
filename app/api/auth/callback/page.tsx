// app/auth/callback/page.jsx
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';

const CallbackPage = () => {
    const { user, isLoading, error } = useUser();
    const router = useRouter();

    useEffect(() => {
        console.log('User:', user);
        console.log('IsLoading:', isLoading);
        console.log('Error:', error);
        if (!isLoading && user) {
            router.push('/profile');
        }
    }, [user, isLoading, error, router]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return <div>Redirecting...</div>;
};

export default CallbackPage;
