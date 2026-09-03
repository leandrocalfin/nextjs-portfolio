import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://www.leandrocalfin.com.ar";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Leandro Calfin | Desarrollador de Software - Full Stack Developer",
  description:
    "Portfolio de Leandro Calfin, desarrollador de software full stack. Proyectos, tecnologías y contacto. Estudiante avanzado en desarrollo de software.",
  keywords: [
    "Leandro Calfin",
    "desarrollador",
    "desarrollador web",
    "full stack",
    "portfolio",
    "desarrollo de software",
    "programador",
    "react",
    "next.js",
  ],
  authors: [{ name: "Leandro Calfin", url: siteUrl }],
  creator: "Leandro Calfin",
  publisher: "Leandro Calfin",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    title: "Leandro Calfin | Desarrollador de Software - Full Stack Developer",
    description:
      "Portfolio de Leandro Calfin, desarrollador de software full stack. Proyectos, tecnologías y contacto.",
    siteName: "Leandro Calfin Portfolio",
    images: [
      {
        url: "/images/logo.webp",
        width: 1200,
        height: 630,
        alt: "Leandro Calfin - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leandro Calfin | Desarrollador de Software",
    description:
      "Portfolio de Leandro Calfin, desarrollador de software full stack.",
    images: ["/images/logo.webp"],
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
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Leandro Calfin",
    jobTitle: "Desarrollador de Software - Full Stack Developer",
    description:
      "Desarrollador de software full stack. Portfolio de proyectos, tecnologías y contacto.",
    url: siteUrl,
    email: "mailto:lean.calfin@gmail.com",
    image: `${siteUrl}/images/logo.webp`,
    sameAs: [
      "https://github.com/leandrocalfin",
      "https://www.linkedin.com/in/leandro-calfin-954b7b352/",
    ],
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
