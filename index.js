document.addEventListener("DOMContentLoaded", function () {
  const confettiSettings = { target: "confetti" };
  const confetti = new window.ConfettiGenerator(confettiSettings);
  confetti.render();
});
