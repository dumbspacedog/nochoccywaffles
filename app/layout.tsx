import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoChoccyWaffles",
  description: "The catch-all portfolio for my projects. [If, that makes sense.]",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nochoccywaffles.com",
    title: "NoChoccyWaffles",
    description: "The catch-all portfolio for my projects. [If, that makes sense.]",
    images: [{ url: "https://nextcloud.ohheyandie.gay/index.php/apps/files_sharing/publicpreview/dibrXQTzDFeLzop?file=/stickers/8.png&fileId=674&x=1920&y=1080&a=true&etag=8df8cd5e36418b4b90428754c4b186c" }]
  },
  themeColor: "#e28743"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
