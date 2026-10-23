(() => {
  const video = document.querySelector('.capsule-video');
  if (!video) return;

  let failed = false;
  let fallback = false;
  let alphaChecked = false;
  // Autoplay and the source also live in HTML so a delayed script cannot freeze the poster.
  video.muted = true;
  video.defaultMuted = true;
  video.autoplay = true;
  video.loop = true;
  video.playsInline = true;
  const sync = () => {
    if (!document.hidden && !failed) {
      video.play().catch(() => { /* Keep the poster if the browser blocks autoplay. */ });
    } else {
      video.pause();
    }
  };
  const useFallback = () => {
    if (fallback) {
      // If neither format loads, retain the transparent poster.
      video.removeAttribute('src');
      video.load();
      failed = true;
      return;
    }
    fallback = true;
    video.classList.add('is-fallback');
    video.src = video.dataset.fallback;
    video.load();
    sync();
  };
  const checkAlpha = () => {
    if (fallback || alphaChecked) return;
    alphaChecked = true;
    // Some browsers decode VP9 but discard its alpha channel.
    try {
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = 1;
      const context = canvas.getContext('2d', { willReadFrequently: true });
      context.drawImage(video, 0, 0, 1, 1, 0, 0, 1, 1);
      if (context.getImageData(0, 0, 1, 1).data[3] > 0) useFallback();
    } catch { /* Local file previews can restrict canvas pixel access. */ }
  };
  video.addEventListener('loadeddata', checkAlpha);
  video.addEventListener('error', useFallback);
  video.addEventListener('canplay', sync);
  document.addEventListener('visibilitychange', sync);
  window.addEventListener('pageshow', sync);
  // If a browser requires a gesture, retry on the first ordinary page interaction.
  document.addEventListener('pointerdown', sync, {once: true, passive: true});
  document.addEventListener('keydown', sync, {once: true});
  if (!video.canPlayType('video/webm; codecs="vp9"') || video.error) {
    useFallback();
  } else {
    if (video.readyState >= 2) checkAlpha();
    sync();
  }
})();
