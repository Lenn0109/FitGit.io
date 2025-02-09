let slideIndex = 1;
showSlides(slideIndex);

// next/previous Control
function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

// thumbnail image control
function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("MySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    // Sembunyikan semua slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Hapus kelas "active" dari semua dot
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");

    }
    
    // Tampilkan slide yang aktif
    slides[slideIndex - 1].style.display = "block";
    
    // Tandai dot yang aktif (dengan spasi agar tidak bergabung dengan kelas lain)
    dots[slideIndex - 1].className += " active";
    

}

