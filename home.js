document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-images img');
    const dots = document.querySelectorAll('.gallery-dots .dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const burgerMenu = document.getElementById('burgerMenu');
    const dropdownMenu = document.getElementById('dropdownMenu');

    burgerMenu.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });

    let currentImageIndex = 0;
    let autoChangeInterval;

    function showImage(index) {
        images.forEach((image, idx) => {
            if (idx === index) {
                image.style.display = 'block';
                setTimeout(() => {
                    image.style.opacity = 1;
                }, 30);
            } else {
                image.style.opacity = 0;
                setTimeout(() => {
                    image.style.display = 'none';
                }, 30);
            }
        });

        dots.forEach((dot, idx) => {
            if (idx === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function autoChangeImage() {
        autoChangeInterval = setInterval(() => {
            currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
            showImage(currentImageIndex);
        }, 10000);
    }

    function resetAutoChangeInterval() {
        clearInterval(autoChangeInterval);
        autoChangeImage();
    }

    prevBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
        showImage(currentImageIndex);
        resetAutoChangeInterval();
    });

    nextBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
        showImage(currentImageIndex);
        resetAutoChangeInterval();
    });

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', function() {
            currentImageIndex = idx;
            showImage(currentImageIndex);
            resetAutoChangeInterval();
        });
    });

    showImage(currentImageIndex);
    autoChangeImage();

    const sliderImages = document.querySelector('.slider-images');

    let startX;
    let scrollLeft;

    sliderImages.addEventListener('mousedown', function(e) {
        startX = e.pageX - sliderImages.offsetLeft;
        scrollLeft = sliderImages.scrollLeft;
    });
});
