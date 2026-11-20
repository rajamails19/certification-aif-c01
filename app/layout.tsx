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
  metadataBase: new URL("https://aif-c01-exam-lab.movingloom2.chatgpt.site"),
  title: "AIF-C01 Exam Lab — AWS AI Practitioner Practice",
  description:
    "A premium practice experience for the AWS Certified AI Practitioner AIF-C01 exam.",
  openGraph: {
    title: "AIF-C01 Exam Lab",
    description: "Make the cloud think with you.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIF-C01 Exam Lab",
    description: "Make the cloud think with you.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
