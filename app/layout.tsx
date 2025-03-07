import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display:"swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
})
export const metadata: Metadata = {
  title: "Pirunporn's Portfolio",
  description: "Generated by create next app",
  icons:"/me.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <link rel="icon" type="image/png" href="/me.png" sizes="any" /> */}

      <body
        className={jetbrainsMono.variable}
      >
        <Toaster />
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
        <Analytics/>
      </body>
    </html>
  );
}
