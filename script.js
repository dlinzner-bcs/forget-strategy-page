const hero = document.getElementById('hero');
const leftWord = document.getElementById('forgetWord');
const rightWord = document.getElementById('strategyWord');

const updateTitle = () => {
  if (!hero || !leftWord || !rightWord) return;

  const maxScroll = Math.max(hero.offsetHeight - window.innerHeight, 1);
  const progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
  const startHorizontalOffset = Math.min(260, window.innerWidth * 0.24);
  const centerHorizontalOffset = Math.min(70, window.innerWidth * 0.07);
  const horizontalOffset = startHorizontalOffset - (startHorizontalOffset - centerHorizontalOffset) * progress;
  const forgetHeight = leftWord.getBoundingClientRect().height || 1;
  const startVerticalOffset = forgetHeight * 0.18;

  leftWord.style.setProperty('--move-x', `${horizontalOffset}px`);
  leftWord.style.setProperty('--move-y', '0px');
  rightWord.style.setProperty('--move-x', `${horizontalOffset}px`);
  rightWord.style.setProperty('--move-y', `${startVerticalOffset * (1 - progress)}px`);
};

window.addEventListener('scroll', updateTitle, { passive: true });
window.addEventListener('resize', updateTitle);
window.addEventListener('load', updateTitle);
updateTitle();
