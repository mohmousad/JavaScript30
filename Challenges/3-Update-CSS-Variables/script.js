// HTML elements
const html = document.querySelector("html");
// const imgEl = document.querySelector("img");
const spacingEl = document.querySelector("#spacingInput");
const blurEl = document.querySelector("#blurInput");
const colorEl = document.querySelector("#colorInput");

// Read CSS variables initial values of CSS variables
const cssSpacing = getComputedStyle(html).getPropertyValue("--spacing");
const cssBlur = getComputedStyle(html).getPropertyValue("--blur");

// Change input value to the initial values of CSS variables
spacingEl.value = cssSpacing.replace(/[^0-9]/g, "");
blurEl.value = cssBlur.replace(/[^0-9]/g, "");

// Handle new inputs
spacingEl.addEventListener("input", (e) => {
  const spacingVal = e.target.value;
  html.style.setProperty("--spacing", `${spacingVal}px`);
});

blurEl.addEventListener("input", (e) => {
  const blurVal = e.target.value;
  html.style.setProperty("--blur", `${blurVal}px`);
});

colorEl.addEventListener("input", (e) => {
  const colorVal = e.target.value;
  html.style.setProperty("--color", colorVal);
});
