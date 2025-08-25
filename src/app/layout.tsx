import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Sewas Styles - Fashion Design",
  description: "Fashion design website with smooth animations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <CartProvider>
          <main className="pt-20">{children}</main>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
