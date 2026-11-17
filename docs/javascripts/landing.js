// Home page scrollytelling.
// 1. "The same question, asked everywhere": on wide screens, a sticky stage on
//    the right shows the surface whose text is in the middle of the viewport.
//    Narrow screens and no-JavaScript readers see each figure under its text.
// 2. "Choose your route": the trunk and branches draw in when the section
//    scrolls into view. With reduced motion they are simply shown drawn.
document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll(".surfaces-story").forEach((story) => {
    const steps = Array.from(story.querySelectorAll(".surfaces-story__step"));
    if (!steps.length || !("IntersectionObserver" in window)) {
      return;
    }

    const stage = document.createElement("div");
    stage.className = "surfaces-story__stage";
    stage.setAttribute("aria-hidden", "true");

    const frames = document.createElement("div");
    frames.className = "surfaces-story__frames";
    const index = document.createElement("div");
    index.className = "surfaces-story__index";

    steps.forEach((step) => {
      const figure = step.querySelector(".surfaces-story__figure");
      const frame = figure.cloneNode(true);
      frame.querySelectorAll("img").forEach((img) => img.removeAttribute("loading"));
      frames.appendChild(frame);
      index.appendChild(document.createElement("span"));
    });

    stage.append(frames, index);
    story.querySelector(".surfaces-story__steps").after(stage);
    story.classList.add("surfaces-story--staged");

    const setActive = (active) => {
      steps.forEach((step, i) => step.classList.toggle("is-active", i === active));
      Array.from(frames.children).forEach((frame, i) => frame.classList.toggle("is-active", i === active));
      Array.from(index.children).forEach((dot, i) => dot.classList.toggle("is-active", i === active));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(steps.indexOf(entry.target));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    steps.forEach((step) => observer.observe(step));
    setActive(0);
  });

  document.querySelectorAll(".routes").forEach((routes) => {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      return;
    }
    routes.classList.add("routes--animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            routes.classList.add("is-drawn");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 },
    );
    observer.observe(routes);
  });
});
