import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata = {
    title: "Teametix — HR Software for Payroll, Performance & Workforce Management",
    description: "Teametix is a free HR application with a 30‑day free trial — no credit card required. Built for Sri Lanka: employee data, workflows, leave & attendance, timesheets, and payroll with EPF/ETF readiness and affordable LKR pricing.",
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