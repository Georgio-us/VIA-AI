// Smooth scroll with faster speed and offset for header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = 100; // Header height
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Intersection Observer для анимации появления блока WhyIntegrations
const whyIntegrationsBlock = document.querySelector('.WhyIntegrations');
if (whyIntegrationsBlock) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.2, // Срабатывает когда 20% блока видно
    rootMargin: '0px'
  });

  observer.observe(whyIntegrationsBlock);
}

// Мобильное меню
const menuToggle = document.getElementById('MenuToggle');
const headerNav = document.getElementById('HeaderNav');

if (menuToggle && headerNav) {
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    headerNav.classList.toggle('active');
    document.body.style.overflow = headerNav.classList.contains('active') ? 'hidden' : '';
  });

  // Закрытие меню при клике на ссылку или кнопку
  const navLinks = headerNav.querySelectorAll('.Header__link, .Header__nav-btn');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      headerNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Закрытие меню при клике вне его области
  document.addEventListener('click', function(event) {
    const isClickInsideNav = headerNav.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggle && headerNav.classList.contains('active')) {
      menuToggle.classList.remove('active');
      headerNav.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// Инициализация слайдеров
function initSlider(sliderSelector, indicatorsSelector, itemSelector) {
  const slider = document.querySelector(sliderSelector);
  const indicatorsContainer = document.querySelector(indicatorsSelector);
  
  if (!slider || !indicatorsContainer) return;
  
  const items = slider.querySelectorAll(itemSelector);
  if (items.length <= 1) return;
  
  // Создаём индикаторы
  items.forEach((_, index) => {
    const indicator = document.createElement('div');
    const baseClass = indicatorsSelector.replace('.', '').replace('__slider-indicators', '');
    indicator.className = baseClass + '__slider-indicator';
    if (index === 0) indicator.classList.add('active');
    indicatorsContainer.appendChild(indicator);
  });
  
  const indicators = indicatorsContainer.querySelectorAll('[class*="slider-indicator"]');
  
  // Функция обновления индикаторов
  function updateIndicators() {
    const scrollLeft = slider.scrollLeft;
    const itemWidth = slider.querySelector(itemSelector).offsetWidth;
    const gap = parseInt(getComputedStyle(slider).gap) || 20;
    const currentIndex = Math.round(scrollLeft / (itemWidth + gap));
    
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
  }
  
  // Обновление при прокрутке
  let scrollTimeout;
  slider.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateIndicators, 100);
  });
  
  // Клик по индикатору для перехода к слайду
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      const itemWidth = slider.querySelector(itemSelector).offsetWidth;
      const gap = parseInt(getComputedStyle(slider).gap) || 20;
      slider.scrollTo({
        left: index * (itemWidth + gap),
        behavior: 'smooth'
      });
    });
  });
  
  // Инициализация при загрузке
  updateIndicators();
}

// Инициализация всех слайдеров после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  // Why слайдер
  initSlider('.Why__slider', '.Why__slider-indicators', '.WhyCard');
  
  // ItWorks слайдеры
  initSlider('.ItWorks__logos--top.ItWorks__slider', '.ItWorks__slider-indicators--top', 'img');
  initSlider('.ItWorks__logos--bottom.ItWorks__slider', '.ItWorks__slider-indicators--bottom', 'img');
  
  // AllInside слайдер
  initSlider('.AllInside__slider', '.AllInside__slider-indicators', '.AllInsideCard');
  
  // WhyIntegrations слайдер
  initSlider('.WhyIntegrations__slider', '.WhyIntegrations__slider-indicators', '.WhyIntegrations__icon-card');
  
  // Pricing слайдер
  initSlider('.Pricing__slider', '.Pricing__slider-indicators', '.PricingCard');
});
