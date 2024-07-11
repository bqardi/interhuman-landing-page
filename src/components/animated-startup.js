(function () {
  const container = document.querySelector("[data-animated-startup]");

  if (!container) return;

  // if animation have already run once, don't run it again (use sessionStorage to control)
  if (sessionStorage.getItem("animated-startup")) return;
  sessionStorage.setItem("animated-startup", true);

  const div = document.createElement("div");
  div.classList.add(
    "animate-startup",
    "h-startup",
    "bg-gradient-to-t",
    "from-purple-light",
    "via-purple-light",
    "to-purple-dark",
    "flex-1"
  );

  const interval = 50;

  for (let i = 0; i < 15; i++) {
    const clone = div.cloneNode(true);
    clone.style.animationDelay = `${i * interval}ms`;
    container.appendChild(clone);
  }
})();
