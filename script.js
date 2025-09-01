const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
let menuOpen = false;

// Create a GSAP timeline for smooth dropdown
const menuTimeline = gsap.timeline({ paused: true })
  .to(mobileMenu, { height: "auto", opacity: 1, duration: 0.4, ease: "power3.out" });

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    gsap.set(mobileMenu, { display: "block", height: 0, opacity: 0 });
    menuTimeline.play();
    menuOpen = true;
  } else {
    menuTimeline.reverse().eventCallback("onReverseComplete", () => {
      gsap.set(mobileMenu, { display: "none" });
    });
    menuOpen = false;
  }
});

// -----------------------------
// Hero Section Animations
// -----------------------------
function typeText(elementSelector, text, speed = 100, callback) {
    const element = document.querySelector(elementSelector);
    element.textContent = ''; // clear existing text
    let i = 0;
    const interval = setInterval(() => {
        element.textContent += text[i];
        i++;
        if (i >= text.length) {
            clearInterval(interval);
            if (callback) callback();
        }
    }, speed);
}
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const heroH2 = document.querySelector('.h-screen h2');
    const heroP = document.querySelector('.h-screen p');
    const heroBtn = document.querySelector('.h-screen a');

    // Hide hero elements & header initially (but no vertical shift)
    gsap.set([header, heroH2, heroP, heroBtn], { opacity: 0, scale: 0.95 });
    gsap.to("body", { opacity: 1, duration: 0.3 });


    // Typing effect for hero H2
    typeText('.h-screen h2', "Hey, I'm Serhij Čepil aka Sipxi", 30, () => {
        // Animate paragraph
        gsap.to(heroP, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out"
        });

        // Animate button
        gsap.to(heroBtn, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            delay: 0.6
        });


        // Animate header first (optional small fade)
        gsap.to(header, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            delay: 0.6,
        });

    });
});


// -----------------------------
// About Section Animations
// -----------------------------
anime({
    targets: '#about p',
    translateY: [50, 0],
    opacity: [0, 1],
    delay: anime.stagger(300),
    duration: 1000,
    easing: 'easeOutExpo'
});

// -----------------------------
// Projects Section Animations
// -----------------------------
gsap.registerPlugin(ScrollTrigger);

gsap.from('#projects .grid > div', {
    scrollTrigger: {
        trigger: '#projects',
        start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    scale: 0.9,
    stagger: 0.2,
    duration: 1,
    ease: 'power3.out'
});

// Tech Skills cards animation
gsap.utils.toArray('#tech-skills .flex-shrink-0').forEach((card, i) => {
    const direction = i % 2 === 0 ? -200 : 200;
    gsap.from(card, {
        x: direction,
        opacity: 0,
        scale: 0.1,
        duration: 0.1,
        delay: i * 0.1,
        ease: "elastic.in",
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
        }
    });
});

// Soft Skills / Architecture / OS cards animation
gsap.utils.toArray('#soft-skills .flex-shrink-0').forEach((card, i) => {
    const direction = i % 2 === 0 ? -200 : 200;
    gsap.from(card, {
        x: direction,
        opacity: 0,
        scale: 0.1,
        duration: 0.1,
        delay: i * 0.1,
        ease: "elastic.in",
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
        }
    });
});

// -----------------------------
// Contact Section Animations
// -----------------------------
anime({
    targets: '#contact h2',
    translateX: [-50, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo'
});

anime({
    targets: '#contact p',
    translateY: [20, 0],
    opacity: [0, 1],
    delay: 300,
    duration: 800,
    easing: 'easeOutExpo'
});

// -----------------------------
// Fetch GitHub Repos
// -----------------------------
fetch('https://api.github.com/users/sipxi/repos')
    .then(response => response.json())
    .then(repos => {
        const grid = document.getElementById('projects-grid');
        repos.forEach((repo, index) => {
            const card = document.createElement('div');
            card.classList.add('bg-gray-800', 'p-6', 'rounded-lg', 'hover:scale-105', 'transition', 'transform', 'project-card');
            card.innerHTML = `
        <h3 class="text-2xl font-bold mb-2 font-[Lora]">${repo.name}</h3>
        <p>${repo.description || 'No description available.'}</p>
        <a href="${repo.html_url}" target="_blank" class="text-purple-400 mt-4 inline-block">View on GitHub</a>
      `;
            grid.appendChild(card);

            // Animate each card
            gsap.from(card, {
                opacity: 0,
                y: 50,
                duration: 1,
                delay: index * 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                }
            });
        });
    })
    .catch(error => console.error('Error fetching GitHub repositories:', error));
