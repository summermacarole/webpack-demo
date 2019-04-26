export default (text = "hello world") => {
  const elem = document.createElement("div");
  elem.innerHTML = text;
  elem.className = "test";
  return elem;
};
