let storiesEl = document.querySelector(".stories");
let storyLeftEl = document.querySelector(".story-left");
let storyRightEl = document.querySelector(".story-right");

storyLeftEl.addEventListener("click", () => {
  storiesEl.scrollTo({
    left: storiesEl.scrollLeft - 150,
    behavior: "smooth", // comportamento suave
  });
});
storyRightEl.addEventListener("click", () => {
  storiesEl.scrollTo({
    left: storiesEl.scrollLeft + 150,
    behavior: "smooth",
  });
});
