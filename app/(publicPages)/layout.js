import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Script from "next/script";

export default function Layout({ children }) {
    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-81Y4387HJN"
                strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-81Y4387HJN');
                `}
            </Script>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}