// Intentionally tiny.
// The site does not depend on JavaScript for layout, scrolling, or content.

// Keep the copyright year current.
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}