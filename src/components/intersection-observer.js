(function () {
  const sections = document.querySelectorAll("[data-color]");

  const options = {
    root: null,
    rootMargin: "0px 0px -50% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const color = entry.target.dataset.color;

        // prettier-ignore
        document.documentElement.style.setProperty(`--color-background`, `var(--${color})`);
        // prettier-ignore
        document.documentElement.style.setProperty(`--color-foreground`, `var(--${color}-dark)`);
        // prettier-ignore
        document.documentElement.style.setProperty(`--color-button-background`, `var(--${color}-button-dark)`);
        // prettier-ignore
        document.documentElement.style.setProperty(`--color-button-foreground`, `var(--${color}-button)`);
      }),
    options
  );

  sections.forEach((section) => observer.observe(section));
})();

(function () {
  const sections = document.querySelectorAll("[data-slide-in]");

  const options = {
    root: null,
    rootMargin: "0px 0px -25% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("active");
      }),
    options
  );

  sections.forEach((section) => observer.observe(section));
})();
