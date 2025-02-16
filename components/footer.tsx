"use client"

import { Bird, Twitter, Instagram, Facebook, Youtube, Mail } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  about: [
    // { label: "Hakkımızda", href: "/about" },
    // { label: "Ekibimiz", href: "/team" },
    // { label: "Kariyer", href: "/careers" },
    { label: "İletişim", href: "/iletisim" }
  ],
  explore: [
    { label: "Son Yazılar", href: "/blog" },
    // { label: "Kuş Türleri", href: "/species },
    // { label: "Fotoğraf İpuçları", href: "/tips" },
    { label: "Etkinlikler", href: "/events" }
  ],
  resources: [
    { label: "Kuş Gözlem Rehberi", href: "/guide" },
    { label: "Fotoğraf Ekipmanları", href: "/gear" },
    { label: "Koruma", href: "/conservation" },
    { label: "SSS", href: "/faqs" }
  ]
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Mail, href: "#", label: "E-posta" }
]

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Bird className="h-6 w-6" />
              <span className="text-xl font-bold">Avian Chronicles</span>
            </Link>
            <p className="text-muted-foreground">
              Uzman fotoğrafçılık ve etkileyici hikayeler aracılığıyla kuşların güzelliğini ve harikalarını paylaşmaya adanmış platform.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="space-y-4">
            <h3 className="font-semibold">Hakkımızda</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Keşfet</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div className="space-y-4">
            <h3 className="font-semibold">Kaynaklar</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        <div className="border-t mt-8 md:mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Avian Chronicles. Tüm hakları saklıdır.</p>
            {/* <div className="flex gap-4 md:gap-6">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Kullanım Koşulları
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}