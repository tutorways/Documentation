// Turns numbered "## 1. Title" headings into stations on a route (TutorWays
// prototype C). Without JavaScript the headings stay as plain numbered headings.
document.addEventListener("DOMContentLoaded", () => {
  const article = document.querySelector(".md-content__inner");
  if (!article) {
    return;
  }

  const stepPattern = /^\s*(\d+)\.\s+/;
  const isStep = (el) =>
    el && el.tagName === "H2" && stepPattern.test(el.textContent);

  let route = null;
  let step = null;

  Array.from(article.children).forEach((el) => {
    if (isStep(el)) {
      if (!route) {
        route = document.createElement("div");
        route.className = "step-route";
        article.insertBefore(route, el);
      }
      step = document.createElement("section");
      step.className = "step-route__step";
      route.appendChild(step);

      const textNode = Array.from(el.childNodes).find(
        (node) => node.nodeType === Node.TEXT_NODE && stepPattern.test(node.textContent),
      );
      const number = el.textContent.match(stepPattern)[1];
      if (textNode) {
        textNode.textContent = textNode.textContent.replace(stepPattern, "");
      }
      const badge = document.createElement("span");
      badge.className = "step-route__num";
      badge.textContent = number;
      badge.setAttribute("aria-hidden", "true");
      const hidden = document.createElement("span");
      hidden.className = "step-route__sr";
      hidden.textContent = "Step " + number + ": ";
      el.prepend(badge, hidden);
      step.appendChild(el);
      return;
    }

    const endsRoute = /^H[12]$/.test(el.tagName) || el.matches(".page-route, .section-chips");
    if (route && step && !endsRoute) {
      step.appendChild(el);
      return;
    }

    if (route) {
      route.lastElementChild.classList.add("step-route__step--last");
    }
    route = null;
    step = null;
  });

  if (route) {
    route.lastElementChild.classList.add("step-route__step--last");
  }
});
