export function smoothScroll(e, href) {
  e.preventDefault();
  const targetId = href.replace(/.*\#/, "");
  const elem = document.getElementById(targetId);
  if (elem) {
    elem.scrollIntoView({
      behavior: "smooth",
    });
  }
}
