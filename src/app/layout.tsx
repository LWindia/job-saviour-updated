import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "DevOps Course with 100% Placement Guarantee in Jaipur | Real-Time Training",
  description: "LinuxWorld offers job-oriented DevOps training with 100% placement guarantee. Master AWS, Docker, Kubernetes, CI/CD, Linux, and Git through hands-on projects and expert interview support.",
  keywords: [
    "DevOps course",
    "DevOps training",
    "AWS training",
    "Docker training",
    "Kubernetes training",
    "CI/CD training",
    "placement guarantee",
    "DevOps certification",
    "job oriented DevOps",
    "DevOps course in Jaipur",
    "Linux training",
    "Git training",
    "DevOps jobs",
  ],
  authors: [{ name: "LinuxWorld" }],
  creator: "LinuxWorld",
  publisher: "LinuxWorld",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jobsaviour.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DevOps Course with 100% Placement Guarantee | LinuxWorld",
    description: "Master DevOps with hands-on training in AWS, Docker, Kubernetes, CI/CD. 100% placement guarantee with real-time projects and expert mentorship.",
    url: "https://jobsaviour.vercel.app",
    siteName: "Job Saviour - DevOps Course",
    images: [
      {
        url: "/assets/Main-Image.png",
        width: 1200,
        height: 630,
        alt: "DevOps Course with Placement Guarantee",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Course with 100% Placement Guarantee | LinuxWorld",
    description: "Master DevOps with hands-on training in AWS, Docker, Kubernetes, CI/CD. 100% placement guarantee.",
    images: ["/assets/Main-Image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here if needed
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
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
        suppressHydrationWarning
      >
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GDZ5ZFMX72"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GDZ5ZFMX72');
          `}
        </Script>
        {children}
      </body>
    </html>
  );

}
