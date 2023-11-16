import type { Metadata } from "next";

import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Car Showcase",
  description: "Showcase all kinds of vehicle you have for sale",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
