import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata = {
    title: "Teametix — HR Software for Payroll, Performance & Workforce Management",
    description: "Teametix is an all-in-one HR platform for employee data, workflows, performance, leave & attendance, payroll and expenses.",
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