// Başlamak için tıkla fonksiyonelliği

document.addEventListener('DOMContentLoaded', function() {
    console.log('Click to Start loaded');
    
    // DOM elementlerini al
    const entryScreen = document.getElementById('entry-screen');
    
    // Elementlerin var olup olmadığını kontrol et
    if (!entryScreen) {
        console.error('Entry screen element not found');
        return;
    }
    
    // Giriş ekranına tıklama olayı dinleyicisi ekle
    entryScreen.addEventListener('click', handleEntryScreenClick);
    
    // Klavye etkileşimini yönet (Enter veya Space)
    entryScreen.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleEntryScreenClick();
        }
    });
    
    function handleEntryScreenClick() {
        console.log('Entry screen clicked!');
        
        // Geçiş sırasında birden fazla tıklamayı engelle
        if (entryScreen.classList.contains('hidden')) {
            return;
        }
        
        // Geçişi başlat
        transitionToSite();
    }
    










    // GİRİŞ TIKLAMA ÖNCESİ-------------------------------------------------------------------------------------------------------------------

    function transitionToSite() {
        console.log('Loading...');
        
        // Birden fazla tıklamayı önlemek için pointer olaylarını devre dışı bırak
        entryScreen.style.pointerEvents = 'none';
        
        // CSS geçişini tetiklemek için hidden sınıfını ekle
        entryScreen.classList.add('hidden');
        
        // Animasyon tamamlandıktan sonra Google'a yönlendir
        setTimeout(() => {
            window.location.href = 'https://www.google.com';
        }, 800);
    }
    // GİRİŞ TIKLAMA ÖNCESİ-------------------------------------------------------------------------------------------------------------------






































    // Hover efekti ekle
    entryScreen.addEventListener('mouseenter', function() {
        if (!entryScreen.classList.contains('hidden')) {
            entryScreen.style.cursor = 'pointer';
        }
    });
});