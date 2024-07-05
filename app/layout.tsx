// app/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';
import './globals.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
      <html>
      <head>
        <title>My Next.js App</title>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="/styles/globals.css"/>
      </head>
      <body>
      {children}
      </body>
      </html>
  );
};

export default Layout;
