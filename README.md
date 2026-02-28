# Click to Start - Animated Landing Pages

Minimal ve şık animasyonlu giriş ekranları koleksiyonu. Farklı renk temalı 4 varyant içerir.

## 🎨 Temalar

- **Original (Black & White)** - Klasik siyah arka plan, beyaz metin
- **Black & White** - Beyaz arka plan, siyah metin  
- **Red & White** - Beyaz arka plan, kırmızı metin
- **White & Red** - Kırmızı arka plan, beyaz metin

## ✨ Özellikler

- Minimal ve modern tasarım
- Smooth animasyonlar
- Hover efektleri
- Responsive tasarım
- Klavye erişilebilirliği (Enter/Space tuşları)
- Sayfalara yönlendirme
- Saf HTML, CSS ve JavaScript (framework yok)

## 🚀 Kullanım

1. İstediğiniz tema klasörünü seçin
2. 1_orginal dosyadaki script dosyasına giderek 61 line daki dosyanızı veya sitenizi atabilirsiniz
3. `index.html` dosyasını açın

```bash
# Yerel olarak test etmek için
cd 1_Orginal
# Tarayıcınızda index.html'i açın
```

## 📁 Dosya Yapısı

```
├── 1_Orginal/          # Siyah arka plan, beyaz metin
├── 2_BlackWhite/       # Beyaz arka plan, siyah metin
├── 3_RedWhite/         # Beyaz arka plan, kırmızı metin
├── 4_WhiteRed/         # Kırmızı arka plan, beyaz metin
├── LICENSE             # MIT Lisansı
└── README.md           # Bu dosya
```

Her klasör şunları içerir:
- `index.html` - Ana HTML dosyası
- `style.css` - Stil dosyası
- `script.js` - JavaScript animasyonları

## 🎯 Özelleştirme

### Yönlendirme URL'sini Değiştirme

`script.js` dosyasında:

```javascript
//yerine başka bir URL
window.location.href = 'https://your-website.com';
```

### Renkleri Değiştirme

`style.css` dosyasında renk kodlarını düzenleyin:

```css
body {
    background-color: #your-color;
    color: #your-text-color;
}
```

### Animasyon Süresini Ayarlama

```javascript
setTimeout(() => {
    window.location.href = 'https://your-website.com';
}, 800); // Milisaniye cinsinden
```

## 🌐 Tarayıcı Desteği

- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)
- Zen bowser
- herhangi bowser


## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🤝 Katkıda Bulunma

1. Bu repo'yu fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 💡 İlham

Aşırı sıkılıp animasyon ve parlamalı birşey yapmak isterken... ortaya çat diye açıldığı için biraz hafifletmek için click sistemi istedim. Tamam tamam dürüst olacağım, tuvalette aklıma geldi

## 📧 İletişim

Sorularınız için GitHub Issues ve Instagram @Bizim_Ayberk kullanabilirsiniz.

---

⭐ Bu açık kaynaklı projeyi beğendiyseniz yıldız verin ula...yapay zekadan kırıntılar olabilir ama çoğu şeyi ben yaptım!
