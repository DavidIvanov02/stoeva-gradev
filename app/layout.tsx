import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LoadingProvider } from "@/components/LoadingProvider";
import LoadingOverlay from "@/components/LoadingOverlay";

import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stoeva Gradev - Creative Design Studio",
  description: "Professional creative design services and portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <ThemeProvider>
          <LoadingProvider>
            <LoadingOverlay />
            <CustomCursor />
            <Navigation />
            <main className="pt-16">
              {children}
            </main>
            <ScrollToTop />
            <Footer />
            <CookieBanner />
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
