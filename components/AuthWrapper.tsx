'use client'; // Add this line to make it a client component

import { ReactNode } from 'react';
import {AuthProvider} from "@/components/hooks/useAuth";

const AuthWrapper = ({ children }: { children: ReactNode }) => {
    return <AuthProvider>{children}</AuthProvider>;
};

export default AuthWrapper;
