import { Rajdhani, Inter, Azeret_Mono } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-rajdhani",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  variable: "--font-azeret-mono",
});

export const metadata: Metadata = {
  title: "Nagari Vibes | Premium Digital Agency",
  description: "Elevating digital presence with tactical strategy and premium design. Based in Ahilyanagar.",
  keywords: ["Digital Agency", "Ahilyanagar", "Branding", "Content Strategy", "Promotional Reels"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${inter.variable} ${azeretMono.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
