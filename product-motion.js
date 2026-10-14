// The supplied packshots only show the front, so motion stays within a believable angle.
document.querySelectorAll('.product-stage').forEach((stage) => {
  const idleLabel = stage.getAttribute('aria-label');
  stage.setAttribute('aria-pressed', 'false');

  stage.addEventListener('click', () => {
    const moving = stage.classList.toggle('is-moving');
    stage.setAttribute('aria-pressed', String(moving));
    stage.setAttribute('aria-label', moving
      ? idleLabel.replace('Movimentar frasco', 'Parar movimento do frasco')
      : idleLabel);
  });
});
