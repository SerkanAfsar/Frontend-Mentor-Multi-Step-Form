import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const fontUbuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Fontend Mentor Multi Step Form",
  description: "Fontend Mentor Multi Step Form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-ubuntu bg-blue-100 ${fontUbuntu.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
