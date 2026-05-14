import type { Metadata } from "next";
import "./globals.css";

// Import FontSource fonts to fix Google CDN metadata bugs
import "@fontsource/rajdhani/500.css";
import "@fontsource/rajdhani/600.css";
import "@fontsource/rajdhani/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/azeret-mono/300.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nagarivibes.synthory.space"),
  title: {
    default: "Nagari Vibes | Premium Digital Agency & Content Strategy",
    template: "%s | Nagari Vibes"
  },
  description: "Elevating digital presence with tactical strategy and premium design. We blend content strategy with high-end production to build authority and drive conversions.",
  keywords: ["Digital Agency", "Ahilyanagar", "Branding", "Content Strategy", "Promotional Reels", "Nagari Vibes"],
  openGraph: {
    title: "Nagari Vibes | Premium Digital Agency",
    description: "Tactical strategy and premium design. We turn attention into authority.",
    url: "https://nagarivibes.synthory.space",
    siteName: "Nagari Vibes",
    images: [
      {
        url: "https://nagarivibes.synthory.space/logos/vibes-media.png",
        width: 1200,
        height: 630,
        alt: "Nagari Vibes Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nagari Vibes | Premium Digital Agency",
    description: "Tactical strategy and premium design.",
    images: ["https://nagarivibes.synthory.space/logos/vibes-media.png"],
  },
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
