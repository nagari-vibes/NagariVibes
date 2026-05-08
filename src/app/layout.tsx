import type { Metadata } from "next";
import "./globals.css";

// Import FontSource fonts to fix Google CDN metadata bugs
import "@fontsource/rajdhani/500.css";
import "@fontsource/rajdhani/600.css";
import "@fontsource/rajdhani/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/azeret-mono/300.css";

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
