import { createContext, useContext, useState } from 'react';

export const AppContext = createContext(null);

export function useAppContext() {
    return useContext(AppContext);
}

export function useAuth() {
    const [email, setEmail] = useState('');
    const [user, setUser] = useState(null);
    return { email, setEmail, user, setUser };
}