import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Avian Chronicles - Kuş Gözlem Blogu',
  description: 'Özenle seçilmiş makaleler ve fotoğraflar aracılığıyla kuşların büyüleyici dünyasını keşfedin',
  keywords: 'kuş gözlemi, kuş fotoğrafçılığı, doğa fotoğrafçılığı, kuşlar, yaban hayatı',
  openGraph: {
    title: 'Avian Chronicles',
    description: 'Özenle seçilmiş makaleler ve fotoğraflar aracılığıyla kuşların büyüleyici dünyasını keşfedin',
    url: 'https://avian-chronicles.com',
    siteName: 'Avian Chronicles',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797',
        width: 1200,
        height: 630,
        alt: 'Avian Chronicles Ana Görsel',
      }
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://avian-chronicles.com',
    languages: {
      'en': 'https://avian-chronicles.com/en',
      'tr': 'https://avian-chronicles.com'
    }
  }
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
          defaultTheme="system"
          enableSystem
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