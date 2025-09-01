// -----------------------------
// Hero Section Animations
// -----------------------------
anime({
  targets: '.h-screen h2',
  translateY: [-50, 0],
  opacity: [0, 1],
  duration: 1200,
  easing: 'easeOutExpo'
});

anime({
  targets: '.h-screen p',
  translateY: [30, 0],
  opacity: [0, 1],
  delay: 500,
  duration: 1000,
  easing: 'easeOutExpo'
});

anime({
  targets: '.h-screen a',
  scale: [0.8, 1],
  opacity: [0, 1],
  delay: 1000,
  duration: 800,
  easing: 'easeOutBack'
});

// -----------------------------
// About Section Animations
// -----------------------------
anime({
  targets: '#about h2',
  scale: [0.9, 1],
  opacity: [0, 1],
  duration: 1000,
  easing: 'easeOutBack'
});

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

// Typing effect for hero section
function typeText(elementSelector, text, speed = 100) {
  const element = document.querySelector(elementSelector);
  element.textContent = ''; // clear existing text
  let i = 0;
  const interval = setInterval(() => {
    element.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

// Start typing on page load
document.addEventListener('DOMContentLoaded', () => {
  typeText('.h-screen h2', "Hey, I'm Serhij Čepil aka Sipxi", 30);
  
});


// Tech Skills cards animation
gsap.utils.toArray('#tech-skills .flex-shrink-0').forEach((card, i) => {
  const direction = i % 2 === 0 ? -200 : 200;
  gsap.from(card, {
    x: direction,
    opacity: 0,
    scale: 0.1,        // less scale change = smoother
    duration: 0.1,      // faster
    delay: i * 0.1,     // quicker stagger
    ease: "elastic.in", // smoother easing
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
    scale: 0.1,        // less scale change = smoother
    duration: 0.1,      // faster
    delay: i * 0.1,     // quicker stagger
    ease: "elastic.in", // smoother easing
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
