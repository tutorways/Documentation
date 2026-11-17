// Scroll the "In this section" chip row so the current page's chip is visible.
document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector(".section-chips__list");
  const current = list && list.querySelector('[aria-current="page"]');
  if (!current || list.scrollWidth <= list.clientWidth) {
    return;
  }
  const chip = current.parentElement;
  list.scrollLeft = chip.offsetLeft - list.offsetLeft - (list.clientWidth - chip.offsetWidth) / 2;
});
