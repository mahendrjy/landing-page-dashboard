import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import ProtectedRoute from "@/components/authentication/protected-route";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing Page Dashboard",
  description: "Landing Page Dashboard with Routing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProtectedRoute>{children}</ProtectedRoute>
      </body>
    </html>
  );
}
