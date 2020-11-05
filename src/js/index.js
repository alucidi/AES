// Import SCSS so they get compiled
import '../scss/styles.scss';
// Lazy Load images
import 'lazysizes';
// Import Carousel
import Glide from './vendor/glide/glide.esm';

const isIE11 = Boolean(window.MSInputMethodContext) && Boolean(document.documentMode);
if (isIE11) {
    document.documentElement.classList.add('js-ie11');
}

if (window.matchMedia('(max-width: 767px)').matches) {
    // Carousel Settings
    const sliderSettings = {
        startAt: 0,
        perView: 1,
        gap: 16,
        peek: {
            before: 0,
            after: 55
        }
    };

    // Steps Carousel
    if (document.querySelector('.steps__cards')) {
        new Glide('.steps__cards', sliderSettings).mount();
    }

    // Benefits Carousel
    if (document.querySelector('.benefits__cards')) {
        new Glide('.benefits__cards', sliderSettings).mount();
    }
}
