"use client";
import { UserProvider } from "@/contexts/userContext";
import React, { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <UserProvider>{children}</UserProvider>
        </>
    );
};

export default Providers;
