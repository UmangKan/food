// Enhance blog interactions

// Click-through logging (placeholder for routing)
document.querySelectorAll('.article-card').forEach((card) => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h3')?.textContent?.trim() ?? 'Unknown';
    console.log('[open-blog]', title);
  });
});

// Smooth local scrolling for in-page links only
document.querySelectorAll('.nav-menu a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href')?.slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple intersection-based fade-in for article cards
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.article-card').forEach((el) => {
  el.classList.add('opacity-0', 'translate-y-2', 'transition', 'duration-500');
  observer.observe(el);
});


