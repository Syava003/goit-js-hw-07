const categories =document.querySelector("#categories").querySelectorAll(".item");
console.log("Number of categories:", categories.length);
categories.forEach((item) => {
   
    const title = item.querySelector("h2").textContent;
    
    
    const elementsCount = item.querySelectorAll("ul li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});