import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
