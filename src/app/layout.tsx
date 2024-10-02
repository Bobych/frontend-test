import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "./globals.css";
import Header from "@/components/header/HeaderComponent";

const MontserratFont = Montserrat({ weight: "400", subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: "Awesome team",
  description: "Join us please",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' style={MontserratFont.style}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
