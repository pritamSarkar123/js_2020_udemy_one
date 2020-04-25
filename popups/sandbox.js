const justbutton = document.querySelector(".just-click");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");
const mouse = document.querySelector(".mouse-cursor-wrapper");
const unlist = document.querySelector(".todo-list");
const resbutton = document.querySelector(".reset");
justbutton.addEventListener("click", () => {
  popup.style.display = "block";
});
close.addEventListener("click", () => {
  popup.style.display = "none";
});
popup.addEventListener("click", () => {
  popup.style.display = "none";
});
mouse.addEventListener("mousemove", (e) => {
  mouse.innerHTML = `X positon: ${e.offsetX} Y position: ${e.offsetY}`;
});
unlist.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.tagName);
    e.target.remove();
  }
});

resbutton.addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerHTML = "Something to do!";
  unlist.prepend(li);
});
