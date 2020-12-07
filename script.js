const selectElement = (s) => document.querySelector(s);

selectElement(".open").addEventListener("click", () => {
  selectElement(".main-nav").classList.add("active");
});

selectElement(".close").addEventListener("click", () => {
  selectElement(".main-nav").classList.remove("active");
});
