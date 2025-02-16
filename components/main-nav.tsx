"use client"

import * as React from "react"
import Link from "next/link"
import { Bird, Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  
  const links = [
    { href: "/", label: "Ana Sayfa" },
    { href: "blog", label: "Blog" },
    // { href: "galeri", label: "Galeri" },
    { href: "iletisim", label: "İletişim" },
  ]

  return (
    <div className="flex items-center justify-between w-full md:w-auto md:justify-start gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Bird className="h-6 w-6" />
        <span className="inline-block font-bold">KuşTürleri</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === link.href ? "text-primary" : "text-muted-foreground"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Menüyü aç</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <div className="flex flex-col gap-6 mt-6">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}