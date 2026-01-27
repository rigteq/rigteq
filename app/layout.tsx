import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rigteq - Premium Website Design & Development Agency",
  description: "Rigteq is India's leading website design company. We build high-fidelity, premium websites for startups and enterprises globally. Contact us for custom web solutions.",
  icons: {
    icon: "/favicon.png",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
