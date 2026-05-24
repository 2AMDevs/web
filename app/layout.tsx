import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "2AM Developers — We don't sleep until the problem's solved",
  description:
    "2AM Developers is a two-person studio solving real-world problems through clean, purposeful code. Based in the late hours. Shipping at dawn.",
  openGraph: {
    title: "2AM Developers",
    description: "We don't sleep until the problem's solved.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2AM Developers",
    description: "We don't sleep until the problem's solved.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
