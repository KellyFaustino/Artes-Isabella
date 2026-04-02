import type { Metadata } from "next";
import { Open_Sans as OpenSans } from "next/font/google";

import "./globals.css";

const openSans = OpenSans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Exposição de Artes",
  description: "Site de exposição de artes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${openSans.variable} min-h-screen`}>{children}</body>
    </html>
  );
}
