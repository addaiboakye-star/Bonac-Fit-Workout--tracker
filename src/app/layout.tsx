import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bonac Fit - Workout Tracker",
  description: "Modern workout tracker with premium features, online coaching, equipment & supplement store, and multi-method payments. Inspired by IFBB Pro William Bonac.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
