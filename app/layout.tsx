import { ReactNode } from 'react';
import Link from 'next/link';
import './globals.css';
import Footer from './Footer';
import AuthWrapper from "@/components/AuthWrapper";
import { AuthProvider, useAuth } from '@/hooks/useAuth';

interface LayoutProps {
    children: ReactNode;
}

const AuthButtons = () => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <div className="right">
            {isAuthenticated ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <Link href="/app/login/page.tsx">
                    <a className="w3-bar-item w3-button w3-hover-none w3-hover-text-blue">Log In</a>
                </Link>
            )}
        </div>
    );
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <html lang="en">
        <head>
            <title>Digital CV</title>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="stylesheet" href="/styles/globals.css" />
        </head>
        <body>
        <AuthWrapper>
            <header>
                <nav>
                    <Link href="/" className="w3-bar-item w3-button w3-hover-none w3-hover-text-blue">Home</Link>
                    <Link href="/Education" className="w3-bar-item w3-button w3-hover-none w3-hover-text-blue">Education & Skills</Link>
                    <Link href="/Projects" className="w3-bar-item w3-button w3-hover-none w3-hover-text-blue">Projects</Link>
                    <Link href="/Contact" className="w3-bar-item w3-button w3-hover-none w3-hover-text-blue">Contact</Link>
                    <AuthButtons />
                </nav>
            </header>
            {children}
            <Footer />
        </AuthWrapper>
        </body>
        </html>
    );
};

export default Layout;