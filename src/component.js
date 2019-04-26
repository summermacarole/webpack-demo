export default (text = "hello world") => {
  const elem = document.createElement("div");
  elem.innerHTML = text;
  elem.classList.add("test");
  return elem;
};
