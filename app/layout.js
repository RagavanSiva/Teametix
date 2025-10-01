import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata = {
    title: "Teametix — HR Software for Payroll, Performance & Workforce Management",
    description: "Teametix is a free HR application for global teams — 30‑day free trial, no credit card required. Manage employee data, workflows, leave & attendance, timesheets, and payroll. Regional compliance support including Sri Lanka (EPF/ETF) with affordable pricing.",
    keywords: [
        "free HR application",
        "HR software",
        "workforce management",
        "payroll software",
        "no credit card required",
        "30-day free trial",
        "Sri Lanka HR software",
        "EPF ETF payroll",
    ],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={poppins.variable}>
                {children}
            </body>
        </html>
    );
}