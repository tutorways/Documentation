// "How a question travels" (home page): turns the list of stops into a route
// where one stop's detail shows at a time. Without JavaScript every detail is
// visible as a plain list.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".journey").forEach((journey) => {
    const stops = Array.from(journey.querySelectorAll(".journey__stop"));
    if (!stops.length) {
      return;
    }

    const panel = document.createElement("p");
    panel.className = "journey__panel";
    panel.setAttribute("aria-live", "polite");
    journey.querySelector(".journey__stops").after(panel);
    journey.classList.add("journey--interactive");

    const select = (index) => {
      stops.forEach((stop, i) => {
        const active = i === index;
        stop.classList.toggle("journey__stop--active", active);
        stop.querySelector(".journey__name").setAttribute("aria-pressed", String(active));
      });
      panel.textContent = stops[index].querySelector(".journey__detail").textContent;
    };

    stops.forEach((stop, i) => {
      stop.querySelector(".journey__name").addEventListener("click", () => select(i));
    });
    select(0);
  });
});
