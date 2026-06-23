"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "./languageContext";

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}