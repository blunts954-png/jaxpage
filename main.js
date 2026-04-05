// Initialize Lucide Icons
lucide.createIcons();

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Entrance Animations
window.addEventListener('load', () => {
    const tl = gsap.timeline();

    tl.to('.animate-in', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'expo.out'
    });

    // Hero Parallax
    gsap.to('.hero-image', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        y: 100,
        ease: 'none'
    });

    // Scroll Reveal Animations
    const scrollElements = document.querySelectorAll('.animate-scroll');
    scrollElements.forEach((el) => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'expo.out'
        });
    });

    // Card Glow Tracking
    const cards = document.querySelectorAll('.feature-card, .lead-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});

// Lead Form Handling
const leadForm = document.getElementById('lead-form');
if (leadForm) {
    leadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const btn = leadForm.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'INITIATING HERO PROTOCOL...';
        btn.disabled = true;

        // Simulate processing
        setTimeout(() => {
            const formData = new FormData(leadForm);
            const name = formData.get('business-name');
            const phone = formData.get('phone');
            const volume = formData.get('lead-volume');

            console.log('INITIATING MISSION FOR:', { name, phone, volume });
            
            // Redirect to thank you page with context
            window.location.href = `thank-you.html?name=${encodeURIComponent(name)}`;
        }, 1500);
    });
}

// Background Noise & Visual Effects (Slight horizontal jitter)
gsap.to('.scanline', {
    y: '100%',
    duration: 10,
    repeat: -1,
    ease: 'none'
});
