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
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Scroll Reveal Animations
    const scrollElements = document.querySelectorAll('.animate-scroll');
    scrollElements.forEach((el) => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // Pulse animation for badges
    gsap.to('.badge', {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
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
