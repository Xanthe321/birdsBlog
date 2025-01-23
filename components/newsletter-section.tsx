"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail("")
  }

  return (
    <section className="py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -z-10 inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl blur-xl" />
          <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent to-muted/50 rounded-3xl" />
          
          <div className="relative backdrop-blur-3xl border border-white/10 rounded-2xl p-8">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight mb-3">
                Bültenimize Katılın
                </h2>
                <p className="text-muted-foreground max-w-md">
                  Nadir görülen kuşlar ve uzman fotoğrafçılık ipuçları hakkında haftalık güncellemeler
                </p>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full max-w-md gap-3">
                <Input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="h-11 bg-background/50 border-gray-300/20"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" size="lg" className="group">
                  Abone Ol
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>

              <p className="text-xs text-muted-foreground">
                10.000+ kuş tutkununa katılın. İstediğiniz zaman abonelikten çıkabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}