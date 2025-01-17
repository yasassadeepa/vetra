"use client";

import { ThemeProvider } from "next-themes";
import React from "react"
import { Toaster } from "../ui/sonner";

interface Props {
    children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <Toaster richColors theme="dark" position="top-right" />
            {children}
        </ThemeProvider>
    );
};

export default Providers
