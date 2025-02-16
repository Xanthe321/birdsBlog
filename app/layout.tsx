import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Kuşların Dünyası | Kuş Türleri ve Bilgileri",
    template: "%s | Kuşların Dünyası",
  },
  description:
    "Türkiye ve dünyadan kuş türleri, kuşlar hakkında detaylı bilgiler, fotoğraflar ve daha fazlası.",
  keywords: [
    "kuşlar",
    "kuş türleri",
    "kuş fotoğrafları",
    "kuş bilgileri",
    "ornitoloji",
  ],
  authors: [{ name: "Site Sahibinin Adı" }],
  creator: "Site Sahibinin Adı",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://sizinsiteadresiniz.com",
    title: "Kuşların Dünyası | Kuş Türleri ve Bilgileri",
    description:
      "Türkiye ve dünyadan kuş türleri, kuşlar hakkında detaylı bilgiler, fotoğraflar ve daha fazlası.",
    siteName: "Kuşların Dünyası",
    images: [
      {
        url: "/og-image.jpg", // Ana sayfa için bir Open Graph resmi ekleyin
      },
    ],
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
  alternates: {
    canonical: "https://avian-chronicles.com",
    languages: {
      en: "https://avian-chronicles.com/en",
      tr: "https://avian-chronicles.com",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-background flex flex-col overflow-hidden">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center">
                <MainNav />
                <div className="ml-auto">
                  <ModeToggle />
                </div>
              </div>
            </header>
            <main className="flex-1 relative">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
