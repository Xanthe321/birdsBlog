# 🐦 Avian Chronicles

**Avian Chronicles**, Türkiye'deki kuş türlerini, kuş gözlemini ve doğa fotoğrafçılığını tanıtmak amacıyla geliştirilmiş modern bir Türkçe içerik platformudur.

Proje; kuş türleri hakkında bilgilendirici içerikleri, fotoğraf galerilerini ve blog yazılarını kullanıcı dostu bir arayüz içerisinde sunarken, performans ve SEO odaklı bir web deneyimi sağlamayı amaçlar.

Uygulama **Next.js, TypeScript ve Tailwind CSS** kullanılarak geliştirilmiş; yeniden kullanılabilir UI bileşenleri, responsive tasarım, dark/light mode ve yapılandırılmış blog içerikleri gibi modern web geliştirme pratikleri üzerine kurulmuştur.

## ✨ Özellikler

* 🐦 Kuş türleri hakkında bilgilendirici blog içerikleri
* 📝 Türkçe SEO odaklı makaleler
* 📸 Kuş fotoğraf galerisi
* 🔎 İçeriklerin kolay keşfedilebilmesi için modern kullanıcı arayüzü
* 🌙 Dark / Light mode
* 📱 Tam responsive tasarım
* ✉️ İletişim formu
* ⚡ Next.js tabanlı performans odaklı yapı
* 🧩 Reusable component mimarisi
* 🎨 Modern ve erişilebilir UI bileşenleri
* 🗂️ Blog içeriklerinin ayrı bir content yapısında yönetilmesi

## 🛠️ Teknolojiler

| Teknoloji        | Kullanım Alanı                            |
| ---------------- | ----------------------------------------- |
| **Next.js 13**   | React framework ve routing                |
| **TypeScript**   | Type-safe development                     |
| **Tailwind CSS** | UI styling ve responsive design           |
| **shadcn/ui**    | Reusable ve accessible UI components      |
| **Lucide React** | Icon sistemi                              |
| **React Hooks**  | Client-side state ve interaction yönetimi |
| **Vercel**       | Deployment                                |

## 🏗️ Proje Mimarisi

Proje, Next.js'in App Router mimarisi üzerine kurulmuştur.

```text id="f4j3x1"
app/
├── pages & routes
├── layouts
└── application structure

components/
├── reusable UI components
├── sections
└── shared components

content/
└── blogs/
    └── blog articles

hooks/
└── reusable React hooks

lib/
└── utility functions

public/
└── static assets
```

Bu yapı sayesinde uygulamanın sayfa yapısı, UI bileşenleri, içerikleri ve yardımcı fonksiyonları birbirinden ayrılarak daha sürdürülebilir bir geliştirme ortamı oluşturulmuştur.

## 📝 Content Architecture

Blog içerikleri uygulamanın `content/blogs` dizini altında ayrı bir yapıda tutulmaktadır.

Bu yaklaşım sayesinde:

* İçerik ile UI kodu birbirinden ayrılır.
* Yeni makaleler eklemek kolaylaşır.
* İçerikler versiyon kontrolü altında tutulabilir.
* Blog yapısı ileride CMS veya farklı bir content pipeline'a taşınabilecek şekilde organize edilebilir.

Özellikle içerik odaklı bir platform için bu ayrım, uygulamanın kod tabanının daha düzenli kalmasını sağlar.

## 🎨 UI & Design

Arayüz, Tailwind CSS ve shadcn/ui kullanılarak modern ve responsive bir tasarım anlayışıyla geliştirilmiştir.

Bileşenlerin tekrar kullanılabilir şekilde oluşturulması sayesinde farklı sayfalarda ortak UI parçalarının yeniden kullanılabilmesi ve tasarımın tutarlı kalması hedeflenmiştir.

Dark ve light theme desteği sayesinde kullanıcıya farklı görüntüleme seçenekleri sunulmaktadır.

## 🔎 SEO

Projenin temel amaçlarından biri Türkçe kuş gözlem ve doğa içeriklerinin arama motorları üzerinden erişilebilirliğini artırmaktır.

Bu doğrultuda içerik yapısı ve sayfa mimarisi SEO odaklı düşünülmüştür.

Blog içerikleri; kuş türleri, gözlem, fotoğrafçılık ve doğa gibi konular etrafında yapılandırılarak organik trafik potansiyeli oluşturacak bir içerik mimarisi hedeflenmiştir.

## 📱 Responsive Experience

Avian Chronicles; masaüstü, tablet ve mobil cihazlarda kullanılabilecek şekilde responsive olarak geliştirilmiştir.

Özellikle fotoğraf ağırlıklı içeriklerde farklı ekran boyutlarında okunabilirlik ve görsel sunumun korunmasına odaklanılmıştır.

## 🚀 Kurulum

Projeyi local ortamınızda çalıştırmak için:

```bash id="k9q7rm"
git clone https://github.com/Xanthe321/birdsBlog.git

cd birdsBlog

npm install
```

Development server'ı başlatın:

```bash id="v8m2pz"
npm run dev
```

Ardından:

```text id="p6n4wd"
http://localhost:3000
```

adresini ziyaret edin.

Production build oluşturmak için:

```bash id="q2t7ls"
npm run build
```

## 🌐 Live Demo

**https://birds-blog.vercel.app/**

## 🎯 Projenin Amacı

Avian Chronicles, yalnızca bir blog arayüzü oluşturmak yerine; belirli bir içerik alanı etrafında **SEO, içerik organizasyonu, responsive UI ve modern frontend mimarisini** bir araya getiren bir web platformu olarak geliştirilmiştir.

Proje sayesinde özellikle:

* Next.js App Router
* TypeScript
* Component-based architecture
* Tailwind CSS
* shadcn/ui
* Responsive web design
* SEO-oriented content architecture
* Static/content-driven blog development

konularında pratik bir uygulama ortaya konmuştur.

## 📌 Future Improvements

Projeyi geliştirmeye devam etmek için planlanabilecek bazı özellikler:

* 🔍 Gelişmiş blog arama
* 🐦 Kuş türlerine göre filtreleme
* 🗺️ Türkiye kuş gözlem noktaları
* 📍 Bölgesel kuş gözlem haritası
* 🔊 Kuş ses kayıtları
* 📷 Kullanıcı fotoğraf galerileri
* ❤️ Favori türler
* 📊 Kuş gözlem istatistikleri
* 🌐 Çoklu dil desteği
* 🤖 AI destekli kuş türü tanımlama

---

## 📄 License

This project is developed for educational and portfolio purposes.
