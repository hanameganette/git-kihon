const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const label = button.textContent?.trim() ?? "";
    console.log(`Clicked: ${label}`);
  });
});
