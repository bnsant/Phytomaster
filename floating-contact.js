(() => {
  const floating = document.querySelector('.whatsapp-float');
  const inline = document.querySelector('.location-actions .location-whatsapp');
  if (!floating || !inline || !('IntersectionObserver' in window)) return;

  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && document.activeElement === floating) return;
    floating.hidden = entry.isIntersecting;
  }).observe(inline);
})();
