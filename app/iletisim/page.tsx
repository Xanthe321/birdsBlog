"use client"

import { useState } from "react"
import { Bird, Mail, MessageSquare, Send, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-muted/50 border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent" />
        <div className="container relative py-20">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <Bird className="h-4 w-4" />
                <span className="text-sm font-medium tracking-wide uppercase">İletişime Geçin</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Bize Ulaşın
              </h1>
              <p className="text-lg text-muted-foreground">
                Kuş fotoğrafçılığı hakkında sorularınız mı var veya deneyimlerinizi paylaşmak mı istiyorsunuz? Sizden haber almaktan mutluluk duyarız.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Adınız
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    placeholder="Ahmet Yılmaz"
                    className="pl-10"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  E-posta
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="ahmet@ornek.com"
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Konu
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="subject"
                  placeholder="Ne hakkında konuşmak istersiniz?"
                  className="pl-10"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Mesajınız
              </label>
              <Textarea
                id="message"
                placeholder="Mesajınızı buraya yazın..."
                className="min-h-[150px]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Mesaj Gönder
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>

          {/* Contact Information */}
          <div className="mt-16 pt-8 border-t">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <Mail className="mx-auto h-6 w-6 text-primary" />
                <h3 className="font-medium">E-posta</h3>
                <p className="text-sm text-muted-foreground">
                  merhaba@avianchronicles.com
                </p>
              </div>
              <div className="text-center space-y-2">
                <MessageSquare className="mx-auto h-6 w-6 text-primary" />
                <h3 className="font-medium">Sosyal Medya</h3>
                <p className="text-sm text-muted-foreground">
                  @AvianChronicles
                </p>
              </div>
              <div className="text-center space-y-2">
                <Bird className="mx-auto h-6 w-6 text-primary" />
                <h3 className="font-medium">Yanıt Süresi</h3>
                <p className="text-sm text-muted-foreground">
                  24-48 saat içinde
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}