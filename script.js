// script.js

const darkModeBtn = document.getElementById("darkModeBtn");
const menuItems = document.querySelectorAll(".sidebar li[data-page]");
const pageViews = document.querySelectorAll(".page-view");
const pageTitle = document.getElementById("pageTitle");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedPage = item.dataset.page;

    menuItems.forEach((menu) => menu.classList.remove("active"));
    item.classList.add("active");

    pageViews.forEach((page) => {
      page.classList.toggle("active", page.classList.contains(`${selectedPage}-page`));
    });

    pageTitle.textContent = item.textContent;
  });
});
