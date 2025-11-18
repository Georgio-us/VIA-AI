// Expose scrollToNextSection globally for inline onclick handlers in HTML
window.scrollToNextSection = function scrollToNextSection() {
  const heroHeight = window.innerHeight;
  window.scrollTo({
    top: heroHeight,
    behavior: 'smooth'
  });
};

// Toggle details sections in services cards
window.toggleDetails = function toggleDetails(serviceType) {
  const detailsElement = document.getElementById(`${serviceType}-details`);
  if (!detailsElement) return;
  const serviceCard = detailsElement.closest('.service-card');
  const expandIcon = serviceCard ? serviceCard.querySelector('.expand-icon') : null;

  const isExpanded = detailsElement.classList.contains('expanded');
  if (isExpanded) {
    detailsElement.classList.remove('expanded');
    expandIcon && expandIcon.classList.remove('expanded');
  } else {
    document.querySelectorAll('.details-list.expanded').forEach((el) => {
      el.classList.remove('expanded');
    });
    document.querySelectorAll('.expand-icon.expanded').forEach((icon) => {
      icon.classList.remove('expanded');
    });
    detailsElement.classList.add('expanded');
    expandIcon && expandIcon.classList.add('expanded');
  }
};

