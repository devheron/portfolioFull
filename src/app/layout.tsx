import type { Metadata } from "next";
import { Syne, DM_Mono } from "next/font/google";
import "./globals.css";
import { PERSONAL } from "@/data/portfolio";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LangProvider } from "@/data/LangContext";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: `${PERSONAL.name} — ${PERSONAL.role}`,
  description: PERSONAL.description,
  keywords: ["portfolio", "desenvolvedor", "developer", "frontend", "react", "nextjs"],
  authors: [{ name: PERSONAL.name }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" data-theme="dark" className={`${syne.variable} ${dmMono.variable}`}>
      <body>
        <ThemeProvider>
          <LangProvider>
            {children}
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
