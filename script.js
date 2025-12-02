document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Interactive App Showcase Logic
    const cards = document.querySelectorAll('.info-card');
    const indicators = document.querySelectorAll('.indicator');
    const sliderTrack = document.getElementById('phone-slider-track');

    function updateShowcase(index) {
        // Update Slider Position (Slide Effect)
        const percentage = index * -25; // -0%, -25%, -50%, -75%
        sliderTrack.style.transform = `translateX(${percentage}%)`;

        // Update Active States
        cards.forEach(card => {
            if (card.dataset.index == index) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        indicators.forEach(indicator => {
            if (indicator.dataset.index == index) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    // Add Click Listeners to Cards
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const index = card.dataset.index;
            updateShowcase(index);
        });
    });

    // Add Click Listeners to Indicators
    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const index = indicator.dataset.index;
            updateShowcase(index);
        });
    });

    // FAQ Accordion Logic
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
});
