import { account } from "@/lib/appwrite";
import { ID, Models } from "appwrite";
import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface UserContextProps {
    user: Models.User<Models.Preferences> | null;
    signin: (email: string, password: string) => Promise<void>;
    signout: () => Promise<void>;
    signup: (email: string, password: string, name: string) => Promise<void>;
}

export const UserContext = createContext<UserContextProps>({
    user: null,
    signin: async () => {},
    signout: async () => {},
    signup: async () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);

    const signin = async (email: string, password: string) => {
        try {
            await account.createEmailSession(email, password);
            const user = await account.get();
            setUser(user);
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const signout = async () => {
        try {
            await account.deleteSession("current");
            setUser(null);
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const signup = async (email: string, password: string, name: string) => {
        try {
            await account.create(ID.unique(), email, password, name);
            const user = await account.get();
            setUser(user);
        } catch (error) {
            console.error("Signup failed:", error);
        }
    };

    useEffect(() => {
        account.get().then((user) => setUser(user));
    }, []);

    return <UserContext.Provider value={{ user, signin, signout, signup }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
