// Expose scrollToNextSection globally for inline onclick handlers in HTML
window.scrollToNextSection = function scrollToNextSection() {
  const heroHeight = window.innerHeight;
  window.scrollTo({
    top: heroHeight,
    behavior: 'smooth'
  });
};

