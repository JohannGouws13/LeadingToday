import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "LeadingToday | Fix Unclear Messaging, Broken Systems & Admin Chaos",
  description: "Help South African entrepreneurs build clear messaging, simple systems, and time freedom. Download The Clarity Checklist or book a free 30-min strategy call.",
  keywords: ["business consulting", "systems automation", "clear messaging", "South Africa", "entrepreneur"],
  authors: [{ name: "Johann Gouws" }],
  openGraph: {
    title: "LeadingToday | Systems & Clarity for SA Entrepreneurs",
    description: "Stop losing sales to confusion. Fix your messaging, automate your systems, and get your time back.",
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeadingToday | Systems & Clarity for SA Entrepreneurs",
    description: "Stop losing sales to confusion. Fix your messaging, automate your systems, and get your time back.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
