import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beauty From Ashes Tattoo | Premium Tattoo Studio in Crothersville, Indiana",
  description:
    "Beauty From Ashes Tattoo is a premium tattoo studio in Crothersville, Indiana. Custom tattoos, realism, fine line, blackwork, and cover-ups by experienced artists. Book your consultation today.",
  keywords: [
    "tattoo studio",
    "tattoo artist Indiana",
    "custom tattoo",
    "fine line tattoo",
    "realism tattoo",
    "cover up tattoo",
    "Beauty From Ashes",
    "Crothersville tattoo",
  ],
  authors: [{ name: "Beauty From Ashes Tattoo" }],
  openGraph: {
    title: "Beauty From Ashes Tattoo | Premium Tattoo Studio",
    description:
      "Where stories become permanent works of art. Premium tattoo studio in Crothersville, Indiana.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
