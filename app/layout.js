
import { Geist, Geist_Mono, Orbitron, Electrolize } from "next/font/google";
import "./globals.css";
import LenisProvider from "../components/lenis/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const electrolize = Electrolize({
  variable: "--font-electrolize",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "Dynamo EV - The Future is Electric",
  description: "Experience the future of urban mobility with Dynamo EV electric scooters. Premium electric scooters designed for the modern rider.",
  keywords: "electric scooter, electric vehicle, EV, urban mobility, sustainable transport",
  openGraph: {
    title: "Dynamo EV - The Future is Electric",
    description: "Experience the future of urban mobility with Dynamo EV electric scooters.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${electrolize.variable} antialiased overflow-x-hidden`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
