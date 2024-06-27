const categoriesList = document.getElementById("categories");
const categories = categoriesList.querySelectorAll(".item");
let categoryCount = 0;
categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const items = category.querySelectorAll("ul > li");
  let itemCount = items.length;
  console.log(`Category: ${categoryTitle}, Elements: ${itemCount}`);
  categoryCount++;
});
console.log(`Number of categories: ${categoryCount}`);